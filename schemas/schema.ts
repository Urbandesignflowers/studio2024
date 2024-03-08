// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Rich text annotations used in the block content editor ddd
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkTel from './annotations/linkTel'
import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'
import annotationProduct from './annotations/product'
import annotationLinkInternalStatic from './annotations/linkInternalStatic'

// Document types
import collection from './documents/collection'
import colorTheme from './documents/colorTheme'
import page from './documents/page'
import product from './documents/product'
import productVariant from './documents/productVariant'
import blog from './documents/blog'

// Singleton document types
import home from './singletons/home'
import settings from './singletons/settings'
import review from './documents/review'

// Block content
import body from './blocks/body'
import minimal from './blocks/minimal'

// Object types
import collectionRule from './objects/collectionRule'
import customProductOptionColor from './objects/customProductOption/color'
import customProductOptionSize from './objects/customProductOption/size'
import imageWithProductHotspots from './objects/imageWithProductHotspots'
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'
import heroCollection from './objects/hero/collection'
import heroHome from './objects/hero/home'
import heroPage from './objects/hero/page'
import moduleAccordion from './objects/module/accordion'
import moduleCallout from './objects/module/callout'
import moduleCallToAction from './objects/module/callToAction'
import moduleCollection from './objects/module/collection'
import moduleGrid from './objects/module/grid'
import moduleImage from './objects/module/image'
import moduleImages from './objects/module/images'
import moduleInstagram from './objects/module/instagram'
import moduleProduct from './objects/module/product'
import moduleProducts from './objects/module/products'
import placeholderString from './objects/placeholderString'
import productHotspots from './objects/productHotspots'
import productOption from './objects/productOption'
import productWithVariant from './objects/productWithVariant'
import proxyString from './objects/proxyString'
import seoHome from './objects/seo/home'
import seoPage from './objects/seo/page'
import seoShopify from './objects/seo/shopify'
import shopifyCollection from './objects/shopifyCollection'
import shopifyProduct from './objects/shopifyProduct'
import shopifyProductVariant from './objects/shopifyProductVariant'
import imagesBanner from './objects/pageBlocks/imagesBanner'
import pageBanner from './objects/pageBlocks/pageBanner'
import productCarousel from './objects/pageBlocks/productCarousel'
import posts from './objects/pageBlocks/posts'
import textContent from './objects/pageBlocks/textContent'
import reviews from './objects/pageBlocks/reviews'
import collectionsBanner from './objects/pageBlocks/collectionsBanner'
import moduleInfo from './objects/module/info'
import contactBanner from './objects/pageBlocks/contactBanner'
import textImage from './objects/pageBlocks/textImage'
import navigationList from './documents/navigationList'
import pageHeader from './objects/pageBlocks/pageHeader'
import gallery from './objects/pageBlocks/gallery'
import productText from './objects/product/productText'
import personalisation from './documents/personalisation'
import extraGift from './objects/product/extraGift'
import productDescription from './arrays/productDescription'
import productContent from './documents/productContent'
import contentBanner from './objects/pageBlocks/contentBanner'

// Build the schemas and export to the Sanity Studio app
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Annotations
    annotationLinkEmail,
    annotationLinkTel,
    annotationLinkExternal,
    annotationLinkInternal,
    annotationProduct,
    annotationLinkInternalStatic,
    // Document types
    collection,
    page,
    product,
    productVariant,
    blog,
    review,
    // Singleton document types
    home,
    settings,
    // Block content
    body,
    minimal,
    // Objects
    collectionRule,
    colorTheme,
    customProductOptionColor,
    customProductOptionSize,
    heroCollection,
    heroHome,
    heroPage,
    imageWithProductHotspots,
    linkExternal,
    linkInternal,
    moduleAccordion,
    moduleCallout,
    moduleCallToAction,
    moduleCollection,
    moduleGrid,
    moduleImage,
    moduleImages,
    moduleInstagram,
    moduleProduct,
    moduleProducts,
    moduleInfo,
    placeholderString,
    productHotspots,
    productOption,
    productWithVariant,
    proxyString,
    seoHome,
    seoPage,
    seoShopify,
    shopifyCollection,
    shopifyProduct,
    shopifyProductVariant,
    imagesBanner,
    pageBanner,
    productCarousel,
    posts,
    textContent,
    reviews,
    collectionsBanner,
    contactBanner,
    textImage,
    navigationList,
    pageHeader,
    gallery,
    productText,
    personalisation,
    extraGift,
    productDescription,
    productContent,
    contentBanner
  ])
})
