import sanityClient from 'part:@sanity/base/client'
const { v4: uuidv4 } = require('uuid')

// Run `sanity exec addField.js --with-user-token`

const client = sanityClient.withConfig({ apiVersion: '2023-01-01' })

const fetchDocuments = () => client.fetch(`*[_type == "product"][] {_id, _rev, productDescription}`)

const buildPatches = docs =>
  docs.map(doc => {
    if (!doc?.productDescription) {
      return {
        id: doc._id,
        patch: {
          set: {
            productDescription: [
              {
                _type: 'storefrontDescription',
                title: 'Shopify Product Description',
                _key: uuidv4()
              }
            ]
          },
          ifRevisionID: doc._rev
        }
      }
    } else if (
      doc?.productDescription?.filter(item => item._type == 'storefrontDescription').length > 0
    ) {
      return null
    } else
      return {
        id: doc._id,
        patch: {
          insert: {
            before: 'productDescription[0]',
            items: [
              {
                _type: 'storefrontDescription',
                title: 'Shopify Product Description',
                _key: uuidv4()
              }
            ]
          },
          ifRevisionID: doc._rev
        }
      }
  })

const createTransaction = patches =>
  patches.reduce((tx, patch) => tx.patch(patch.id, patch.patch), client.transaction())

const commitTransaction = tx => tx.commit()

const editNextBatch = async () => {
  const documents = await fetchDocuments()
  const patches = buildPatches(documents).filter(value => value !== null)

  if (patches.length === 0) {
    console.log('No more documents to update!')
    return null
  }
  console.log(patches)

  console.log(
    `Editing batch:\n %s`,
    patches.map(patch => `${patch.id} => ${JSON.stringify(patch.patch)}`).join('\n')
  )
  const transaction = createTransaction(patches)
  await commitTransaction(transaction)
}

editNextBatch().catch(err => {
  console.error(err)
  process.exit(1)
})
