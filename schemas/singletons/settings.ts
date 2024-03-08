import { CogIcon, PackageIcon } from '@sanity/icons'
import { PAGE_REFERENCES } from '../../constants'

const TITLE = 'Settings'

export default {
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      default: true,
      name: 'navigation',
      title: 'Navigation'
    },
    {
      name: 'productOptions',
      title: 'Product options'
    },
    {
      name: 'notFoundPage',
      title: '404 page'
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
    // Menu
    {
      name: 'menu',
      title: 'Menu',
      type: 'object',
      group: 'navigation',
      options: {
        collapsed: false,
        collapsible: true
      },
      fields: [
        // Links
        {
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            {
              name: 'collectionGroup',
              title: 'Collection group',
              type: 'object',
              icon: PackageIcon,
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'collectionLinks',
                  title: 'Collection links',
                  type: 'array',
                  of: [
                    {
                      name: 'collection',
                      type: 'reference',
                      weak: true,
                      to: [{ type: 'collection' }]
                    }
                  ]
                },
                {
                  name: 'collectionProducts',
                  title: 'Collection products',
                  type: 'reference',
                  description: 'Products from this collection will be listed',
                  weak: true,
                  to: [{ type: 'collection' }]
                }
              ]
            },
            { type: 'linkInternal' },
            { type: 'linkExternal' }
          ]
        }
      ]
    },
    // Footer
    {
      name: 'footer',
      title: 'Footer',
      type: 'object',
      group: 'navigation',
      options: {
        collapsed: false,
        collapsible: true
      },
      fields: [
        {
          type: 'array',
          name: 'footerModules',
          title: 'Footer Modules',
          of: [
            {
              type: 'object',
              name: 'footerText',
              title: 'Footer Text',
              fields: [
                {
                  name: 'text',
                  title: 'Text',
                  type: 'array',
                  of: [
                    {
                      lists: [{ title: 'Bullet', value: 'bullet' }],
                      marks: {
                        annotations: [
                          // Email
                          {
                            title: 'Email',
                            name: 'annotationLinkEmail',
                            type: 'annotationLinkEmail'
                          },
                          {
                            name: 'annotationLinkTel',
                            type: 'annotationLinkTel'
                          },
                          // Internal link
                          {
                            title: 'Internal page',
                            name: 'annotationLinkInternal',
                            type: 'annotationLinkInternal'
                          },
                          {
                            name: 'annotationLinkInternalStatic',
                            type: 'annotationLinkInternalStatic'
                          },
                          // URL
                          {
                            title: 'URL',
                            name: 'annotationLinkExternal',
                            type: 'annotationLinkExternal'
                          }
                        ],
                        decorators: []
                      },
                      // Block styles
                      styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H3', value: 'h3' }
                      ],
                      type: 'block'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'minimal',
          name: 'newsletterText',
          title: 'Newsletter Text'
        }
      ]
    },
    {
      name: 'collectionLinks',
      title: 'Collection Page Navigation',
      type: 'array',
      group: 'navigation',
      of: [
        {
          name: 'collection',
          type: 'reference',
          weak: true,
          to: [{ type: 'collection' }]
        }
      ]
    },
    // Custom product options
    // {
    //   name: 'customProductOptions',
    //   title: 'Custom product options',
    //   type: 'array',
    //   group: 'productOptions',
    //   of: [
    //     {
    //       name: 'customProductOption.color',
    //       type: 'customProductOption.color'
    //     },
    //     {
    //       name: 'customProductOption.size',
    //       type: 'customProductOption.size'
    //     }
    //   ],
    //   validation: Rule =>
    //     Rule.custom(options => {
    //       // Each product option type must have a unique title
    //       if (options) {
    //         const uniqueTitles = new Set(options.map(option => option.title))
    //         if (options.length > uniqueTitles.size) {
    //           return 'Each product option type must have a unique title'
    //         }
    //       }
    //       return true
    //     })
    // },
    // Not found page
    {
      type: 'object',
      name: 'menuBanners',
      group: 'navigation',
      fields: [
        {
          type: 'object',
          name: 'promo',
          title: 'Promotional',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string'
            },
            // Reference
            {
              name: 'reference',
              type: 'reference',
              weak: true,
              to: PAGE_REFERENCES
            }
          ]
        },
        {
          type: 'object',
          name: 'topBanner',
          title: 'Top Banner',
          fields: [
            {
              title: 'Text',
              name: 'text',
              type: 'text',
              rows: 5
            },
            {
              name: 'image',
              type: 'image',
              title: 'Icon',
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'notFoundPage',
      title: '404 page',
      type: 'object',
      group: 'notFoundPage',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 2
        },
        {
          name: 'collection',
          title: 'Collection',
          type: 'reference',
          description: 'Collection products displayed on this page',
          weak: true,
          to: [
            {
              name: 'collection',
              type: 'collection'
            }
          ]
        },
        // Color theme
        {
          name: 'colorTheme',
          title: 'Color theme',
          type: 'reference',
          to: [{ type: 'colorTheme' }]
        }
      ]
    },
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      description: 'Defaults for every page',
      options: {
        collapsed: false,
        collapsible: true
      },
      fields: [
        {
          name: 'title',
          title: 'Site title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          validation: Rule =>
            Rule.max(150).warning('Longer descriptions may be truncated by search engines')
        }
      ],
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    prepare() {
      return {
        title: TITLE
      }
    }
  }
}
