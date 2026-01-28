import React from 'react';
import {
  AboutUs,
  Category,
  Gallery,
  Wishlist,
  Cart,
  Help,
  Home,
  Notification,
  Orders,
  Profile,
  Share,
  Settings,
  Lock,
  Hindi,
  Language,
  CurrencyConverter,
  Korea,
  France,
  Arabic,
  Rupees,
  Dollar,
  Euro,
  AustralianDollar,
  KoreanWon,
  Rtl,
  DarkMode,
  Location,
  Wallet,
  Document,
  Delivery,
  ReturnOrder,
  Return,
  BulkOrder,
  LanguageIcon
} from '@utils/icons';
import images from '../images/images';
import { windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import Check from '../../assets/icons/check';

module.exports = {
  data: [
    {
      title: 'Welcome to NBS Energy Store',
      body: 'Explore solar panels, inverters, batteries and power systems at NBS. Find new energy solutions, top brands and reliable products every week.',
      imgUrl: images.onBoarding1,
    },
    {
      title: 'Energy Solutions for Every Need',
      body: '20+ trusted brands and over 2,000+ energy products. Discover the best power solution for your needs with easy support and return options.',
      imgUrl: images.onBoarding2,
    },
    {
      title: 'Sustainable. Reliable. Affordable.',
      body: 'Latest solar systems, power backups and water pumps every week. Premium quality. Fast delivery available. Hassle-free installation and secure service.',
      imgUrl: images.onBoarding3,
    },
  ],

  drawerItems: [
    // {
    //   name: 'drawerArr.mode',
    //   icons: <DarkMode />,
    //   description: '',
    //   showSwitch: true,
    // },
    // {
    //   name: 'drawerArr.rtl',
    //   icons: <Rtl />,
    //   description: '',
    //   showSwitch: true,
    // },
    // {
    //   name: 'profile.pages',
    //   icons: <Orders />,
    //   description: 'profile.pagesProfile',
    //   showSwitch: false,
    // },
    {
      name: 'drawerArr.home',
      icons: <Home />,
      description: 'drawerArr.homeDrawer',
      showSwitch: false,
      path: 'Home'
    },
    {
      name: 'drawerArr.shopByCategory',
      icons: <Category />,
      description: 'drawerArr.categoryDrawer',
      showSwitch: false,
      path: 'CategoryStackScreen'
    },
    {
      name: 'Gallery',
      icons: <Gallery />,
      description: 'Pictures, Moments, Memories...',
      showSwitch: false,
      path: 'Gallery'
    },
    {
      name: 'drawerArr.orders',
      icons: <Orders />,
      description: 'drawerArr.orderDrawer',
      showSwitch: false,
      path: 'OrderHistory'
    },
    {
      name: 'drawerArr.cart',
      icons: <Cart />,
      description: 'drawerArr.wishlistDrawer',
      showSwitch: false,
      path: 'cart'
    },
    {
      name: 'drawerArr.account',
      icons: <Profile />,
      description: 'drawerArr.accountDrawer',
      showSwitch: false,
      path: 'profile'
    },
    // {
    //   name: 'drawerArr.bulkOrder',
    //   icons: <BulkOrder />,
    //   description: 'drawerArr.bulkOrderDrawer',
    //   showSwitch: false,
    //   path: 'Bulk Order'
    // },
    // {
    //   name: 'drawerArr.language',
    //   icons: <LanguageIcon />,
    //   description: 'drawerArr.languageDrawer',
    //   showSwitch: false,
    //   path: 'visibleModal'
    // },
    // {
    //   name: 'drawerArr.currencyConverter',
    //   icons: <CurrencyConverter />,
    //   description: 'drawerArr.currencyConverterDrawer',
    //   showSwitch: false,
    // },
    // {
    //   name: 'drawerArr.notification',
    //   icons: <Notification />,
    //   description: 'drawerArr.notificationDrawer',
    //   showSwitch: false,
    // },
    // {
    //   name: 'drawerArr.settings',
    //   icons: <Settings />,
    //   description: 'drawerArr.settingsDrawer',
    //   showSwitch: false,
    //   path: 'Settings'
    // },
    // {
    //   name: 'profile.shareApp',
    //   icons: <Share />,
    //   description: 'profile.shareAppDesc',
    //   showSwitch: false,
    //   path: 'ShareApp'
    // },
    {
      name: 'drawerArr.aboutUs',
      icons: <AboutUs />,
      description: 'drawerArr.aboutUsDrawer',
      showSwitch: false,
      path: 'AboutUs'
    },
    {
      name: 'drawerArr.help',
      icons: <Help />,
      description: 'drawerArr.helpDrawer',
      showSwitch: false,
      path: 'HelpCenter'
    },
  ],

  featuredCollection: [
    {
      name: "Elm Collection",
      image: images.elmCollection,
      collectionId: "gid://shopify/Collection/550167445815"
    },
    {
      name: "Como Collection",
      image: images.comoCollection,
      collectionId: "gid://shopify/Collection/521124643127"
    },
    {
      name: "Emerson Collection",
      image: images.emersonCollection,
      collectionId: "gid://shopify/Collection/521715679543"
    },
    {
      name: "Madeline Collection",
      image: images.madelineCollection,
      collectionId: "gid://shopify/Collection/522176364855"
    },
    {
      name: "Belle Collection",
      image: images.belleCollection,
      collectionId: "gid://shopify/Collection/521715843383"
    },
    {
      name: "Amalfi Collection",
      image: images.amalfiCollection,
      collectionId: "gid://shopify/Collection/521121235255"
    },
    {
      name: "Hamilton Collection",
      image: images.hamiltonCollection,
      collectionId: "gid://shopify/Collection/521124610359"
    },
    {
      name: "Arrow Collection",
      image: images.arrowCollection,
      collectionId: "gid://shopify/Collection/521723085111"
    },
    {
      name: "Sophie Collection",
      image: images.sophieCollection,
      collectionId: "gid://shopify/Collection/521715548471"
    },
    {
      name: "Pallet Collection",
      image: images.palletCollection,
      collectionId: "gid://shopify/Collection/521124512055"
    },
    {
      name: "Scandinavian Collection",
      image: images.scandinavianCollection,
      collectionId: "gid://shopify/Collection/521124577591"
    },
    {
      name: "Bordeaux Collection",
      image: images.bordeauxCollection,
      collectionId: "gid://shopify/Collection/527795749175"
    },
    {
      name: "Zelda Collection",
      image: images.zeldaCollection,
      collectionId: "gid://shopify/Collection/522337059127"
    },
    {
      name: "Kosha Collection",
      image: images.koshaCollection,
      collectionId: "gid://shopify/Collection/521124282679"
    },
    {
      name: "Industrial",
      image: images.industrialCollection,
      collectionId: "gid://shopify/Collection/528738746679"
    },
    {
      name: "Hairpin Collection",
      image: images.hairpinCollection,
      collectionId: "gid://shopify/Collection/522385195319"
    },
    {
      name: "Corporate",
      image: images.corporateCollection,
      collectionId: "gid://shopify/Collection/528803660087"
    },
    {
      name: "Arabic Seating",
      image: images.arabicCollection,
      collectionId: "gid://shopify/Collection/522170499383"
    },
    {
      name: "Outdoor Seating",
      image: images.outdoorSeatingCollection,
      collectionId: "gid://shopify/Collection/527934062903"
    },

  ],

  productGallery: [
    {
      mainImage: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Arlo_beige_copy.png?v=1767704181',
      smallTitle: 'New Collection!',
      title: 'Arlo Lounge Seating',
      description: 'Sculptural curves and soft upholstery come together in a modern modular lounge, blending comfort with minimalist elegance in blush, charcoal, and sand tones.',
      collectionId: 'gid://shopify/Collection/552040497463'
    },
    {
      mainImage: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/elm_table.png?v=1764341317',
      smallTitle: 'New Collection!',
      title: 'Elm Rectangular Dining Table',
      description: 'Understated elegance. The Elm Dining Table features a clean, rectangular top and architectural base, providing a timeless, natural focal point for your rental needs.',
      collectionId: 'gid://shopify/Product/10354329911607'
    },
    {
      mainImage: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/elm_barstool_and_chair_4a5ce136-6d0d-406b-875e-c11fcd11b5f0.png?v=1764341396',
      smallTitle: 'New Collection!',
      title: 'Elm Seating Collection',
      description: 'Sculptural comfort for every height. The Elm Barstool and Dining Chair share a harmonious design, characterized by their warm elm wood finish and unique, rounded back supports. A modern, natural choice for seamless event seating.',
      collectionId: 'gid://shopify/Collection/550167445815'
    }
  ],

  category: [
    {
      name: 'categoryArr.seating',
      // image: images.inverterImage,
      image: images.category21,
      categoryImg: images.category21,
      categorySubTxt: 'categoryArr.seatingCollection',
      color: appColors.categoryColor1,
      collectionId: "gid://shopify/Collection/443235205332"
    },
    {
      name: 'categoryArr.tables',
      // image: images.batteryImage,
      image: images.category22,
      categoryImg: images.category22,
      categorySubTxt: 'categoryArr.tablesCollection',
      color: appColors.divider,
      collectionId: "gid://shopify/Collection/443235369172"
    },
    {
      name: 'categoryArr.decor',
      // image: images.waterPumpImage,
      image: images.category23,
      categoryImg: images.category23,
      categorySubTxt: 'categoryArr.decorCollection',
      color: appColors.categoryColor2,
      collectionId: "gid://shopify/Collection/443234746580"
    },
    {
      name: 'categoryArr.outdoor',
      // image: images.generatorImage,
      image: images.category24,
      categoryImg: images.category24,
      categorySubTxt: 'categoryArr.outdoorCollection',
      color: appColors.divider,
      collectionId: "gid://shopify/Collection/443266466004"
    },
    {
      name: 'categoryArr.miscellaneous',
      // image: images.powerStationImage,
      image: images.category25,
      categoryImg: images.category25,
      categorySubTxt: 'categoryArr.miscellaneousCollection',
      color: appColors.categoryColor3,
      collectionId: "gid://shopify/Collection/443234615508"
    },
    {
      name: 'categoryArr.siteMobility',
      // image: images.solarImage,
      image: images.category26,
      categoryImg: images.category26,
      categorySubTxt: 'categoryArr.siteMobilityCollection',
      color: appColors.divider,
      collectionId: "gid://shopify/Collection/522170663223"
    },
    // {
    //   name: 'categoryArr.accessories',
    //   image: images.accessoriesImage,
    //   categoryImg: images.category27,
    //   categorySubTxt: 'categoryArr.accessoriesCollection',
    //   color: appColors.categoryColor3,
    //   collectionId: "gid://shopify/Collection/443234779348"
    // },
  ],

  bannerSection: [
    {
      image: images.banner1Image,
      heading: "Distinctive. Elegant. Sophisticated. ",
      text: "Distinctive, Elegant And Sophisticated Rental Solutions"
    },
    {
      image: images.banner2Image,
      heading: "Corporate Event",
      text: "Make a Lasting Impression at Your Next Corporate Event",
    },
    {
      image: images.banner3Image,
      heading: "Wedding Event",
      text: "Elevate Your Wedding Event with Exquisite Details"
    },
    {
      image: images.banner4Image,
      heading: "Hosting a House Party?",
      text: "Elevate Your Event with Our Furniture"
    }],

  dealsOfDaySection: [
    {
      image: images.dealOfTheDay1,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      image: images.dealOfTheDay2,
      title: 'products.productName2',
      brandName: 'products.productBrand2',
      discountPrice: 'products.productDiscountPrice2',
      price: 'products.productPrice2',
      discount: 'products.productDiscount2',
    },
    {
      image: images.dealOfTheDay3,
      title: 'products.productName3',
      brandName: 'products.productBrand3',
      discountPrice: 'products.productDiscountPrice3',
      price: 'products.productPrice3',
      discount: 'products.productDiscount3',
    },
  ],

  findYourStyleFilter: [
    { title: 'ourProductsArr.generators' },
    { title: 'ourProductsArr.waterpumps' },
    { title: 'ourProductsArr.powerstations' },
    { title: 'ourProductsArr.batteries' },
  ],

  findYourStyle: [
    {
      id: 1,
      image: images.findStyle1,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      id: 1,
      image: images.findStyle2,
      title: 'products.productName2',
      brandName: 'products.productBrand2',
      discountPrice: 'products.productDiscountPrice2',
      price: 'products.productPrice2',
      discount: 'products.productDiscount2',
    },
    {
      id: 1,
      image: images.findStyle3,
      title: 'products.productName3',
      brandName: 'products.productBrand3',
      discountPrice: 'products.productDiscountPrice3',
      price: 'products.productPrice3',
      discount: 'products.productDiscount3',
    },
    {
      id: 1,
      image: images.findStyle4,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      id: 2,
      image: images.findStyle2,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      id: 2,
      image: images.findStyle4,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      id: 3,
      image: images.findStyle3,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      id: 4,
      image: images.findStyle4,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      id: 5,
      image: images.findStyle1,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      id: 5,
      image: images.findStyle3,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
  ],

  biggestDeal: [
    { brand: images.biggestDeal1 },
    { brand: images.biggestDeal2 },
    { brand: images.biggestDeal3 },
    { brand: images.biggestDeal4 },
    { brand: images.biggestDeal5 },
    { brand: images.biggestDeal6 },
    { brand: images.biggestDeal7 },
    { brand: images.biggestDeal8 },
    { brand: images.biggestDeal9 },
    { brand: images.biggestDeal10 },
    { brand: images.biggestDeal11 },
    { brand: images.biggestDeal12 },
    { brand: images.biggestDeal13 },
    { brand: images.biggestDeal14 },
    { brand: images.biggestDeal15 },
    { brand: images.biggestDeal16 },
    { brand: images.biggestDeal17 },
    { brand: images.biggestDeal18 },
    { brand: images.biggestDeal19 },
    { brand: images.biggestDeal20 },
    { brand: images.biggestDeal21 },
  ],

  trendingCategories: [
    {
      name: "Lounge Sofa",
      image: "https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Lounge_sofa_4b3497d5-8969-4e9a-9594-c147586c8efe.jpg?v=1739185348",
      collectionId: "gid://shopify/Collection/522026123575"
    },
    {
      name: "Dining Chairs",
      image: "https://cdn.shopify.com/s/files/1/0919/2957/5735/files/chair_b8d91fb2-3ed5-47bf-b733-acf9319bb84a.jpg?v=1739185367",
      collectionId: "gid://shopify/Collection/522026254647"
    },
    {
      name: "Coffee Tables",
      image: "https://cdn.shopify.com/s/files/1/0919/2957/5735/files/coffee_4d4cb664-3322-49ae-a9ed-9d5ab962a337.jpg?v=1739185392",
      collectionId: "gid://shopify/Collection/522026582327"
    },
    {
      name: "Bar Stools",
      image: "https://cdn.shopify.com/s/files/1/0919/2957/5735/files/stool_700eb69f-0f46-4d17-ba3f-3f682d4fdb7b.jpg?v=1739185417",
      collectionId: "gid://shopify/Collection/522026287415"
    },
    {
      name: "Single Seater Sofa",
      image: "https://cdn.shopify.com/s/files/1/0919/2957/5735/files/sofa_e8c01789-023d-4735-8579-14e5f092ef04.jpg?v=1739185433",
      collectionId: "gid://shopify/Collection/522026156343"
    },
    {
      name: "Cocktail Tables",
      image: "https://cdn.shopify.com/s/files/1/0919/2957/5735/files/cocktail_table_0f4284f9-d121-4b4b-bef4-5fc8698925c9.jpg?v=1739185454",
      collectionId: "gid://shopify/Collection/522170401079"
    }
  ],

  testiMonials: [
    {
      star: 5,
      name: "Hussein Kapasi",
      title: "Rented wedding furniture",
      content: "Rented wedding furniture from them and their quality was amazing, team was prompt and very professional and very reasonably priced. Surely recommend them!"
    },
    {
      star: 5,
      name: "MOMMY VIDA",
      title: "We've been renting from mint",
      content: "We've been renting from mint for the longest time. They have a great variety of different furniture and a great team as well. I would recommend mint furniture in terms of its quality and price."
    },
    {
      star: 5,
      name: "Johanna Haldemann",
      title: "I've been using Mint Event Rentals for",
      content: "I've been using Mint Event Rentals for almost 4 years now and have been very happy with their service since. They are quick to respond, flexible and they have a great range of furniture available for all "
    },
    {
      star: 5,
      name: "MOMMY VIDA",
      title: "We've been renting from mint",
      content: "We've been renting from mint for the longest time. They have a great variety of different furniture and a great team as well. I would recommend mint furniture in terms of its quality and price."
    },
  ],

  offerCorner: [
    {
      name: 'offerCornerArr.under',
    },
    {
      name: 'offerCornerArr.flat',
    },
    {
      name: 'offerCornerArr.buyGet',
    },
    {
      name: 'offerCornerArr.upto',
    },
  ],

  kidsCorner: [
    {
      image: images.kidsCorner1,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      image: images.kidsCorner2,
      title: 'products.productName2',
      brandName: 'products.productBrand2',
      discountPrice: 'products.productDiscountPrice2',
      price: 'products.productPrice2',
      discount: 'products.productDiscount2',
    },
    {
      image: images.kidsCorner3,
      title: 'products.productName3',
      brandName: 'products.productBrand3',
      discountPrice: 'products.productDiscountPrice3',
      price: 'products.productPrice3',
      discount: 'products.productDiscount3',
    },
  ],

  langauges: [
    // { key: 'hi', name: 'langaugesArr.hindi', icons: <Hindi /> },
    {
      key: 'en',
      name: 'langaugesArr.english',
      icons: <Language width={windowWidth(34)} height={windowHeight(34)} />,
    },
    // { key: 'kr', name: 'langaugesArr.korean', icons: <Korea /> },
    { key: 'ar', name: 'langaugesArr.arabic', icons: <Arabic /> },
    { key: 'fr', name: 'langaugesArr.french', icons: <France /> },
  ],

  currencys: [
    {
      key: '₹',
      name: 'currencyConverterArr.indianRupees',
      icons: <Rupees />,
      value: 1,
    },
    {
      key: '$',
      name: 'currencyConverterArr.usDollar',
      icons: <Dollar />,
      value: 0.013,
    },
    {
      key: '€',
      name: 'currencyConverterArr.euro',
      icons: <Euro />,
      value: 0.012,
    },
    {
      key: 'A$',
      name: 'currencyConverterArr.australianDollar',
      icons: <AustralianDollar />,
      value: 0.018,
    },
    {
      key: '₩',
      name: 'currencyConverterArr.koreanWon',
      icons: <KoreanWon />,
      value: 16.44,
    },
  ],

  ratings: [{}, {}, {}, {}, {}],

  subCategory: [
    {
      name: 'Seating',
      title: "All Seating Collection",
      content: "Discover our complete range of seating options including Lounges, Single Seaters, Ottomans, Bean Bags, Dining Chairs, and more.",
      bgImage: "https://cdn.shopify.com/s/files/1/0919/2957/5735/collections/seating.jpg?v=1741773394",
      totalProducts: 181,
      collectionId: "gid://shopify/Collection/522026615095",
      innerCat: [
        {
          name: 'Lounge Seating',
          count: 79,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Arlo_three_seater_anthracite.jpg?v=1767700977',
          collectionId: "gid://shopify/Collection/522026123575"
        },
        {
          name: 'Single Seater Sofa',
          count: 45,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Arlo_single_seater_pink_71b79062-2951-4bfc-844d-5266a9a7c397.jpg?v=1767700894',
          collectionId: "gid://shopify/Collection/522026156343"
        },
        {
          name: 'Ottoman',
          count: 31,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/PROVINCIAL_TUFTED_OTTOMAN_kseaus.jpg?v=1736765890',
          collectionId: "gid://shopify/Collection/522031628599"
        },
        {
          name: 'Bean Bags',
          count: 10,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/PEARBEANBAGBLUE.jpg?v=1736768907',
          collectionId: "gid://shopify/Collection/522026189111"
        },
        {
          name: 'Dining Chairs',
          count: 42,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/arrow_gold_stool..jpg?v=1738155945',
          collectionId: "gid://shopify/Collection/522026254647"
        },
        {
          name: 'Single Chairs',
          count: 13,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/AllureBlack.jpg?v=1743665773',
          collectionId: "gid://shopify/Collection/525320028471"
        },
        {
          name: 'Barstools',
          count: 29,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/arrow_black_stool.jpg?v=1737103139',
          collectionId: "gid://shopify/Collection/522026287415"
        },
        {
          name: 'Accent Chairs',
          count: 23,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/osakaorange_421a0e98-0cbf-4ba5-8b12-2b14456a6cea.jpg?v=1737106931',
          collectionId: "gid://shopify/Collection/522026352951"
        },
        {
          name: 'Office Chairs',
          count: 8,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/akira_office_chair_d0d44a56-a25a-478e-a416-4ef4f898b904.jpg?v=1743665223',
          collectionId: "gid://shopify/Collection/522171384119"
        },
      ],
    },
    {
      name: 'Tables',
      title: "All Tables Collection",
      content: "Discover our tables collection featuring coffee, cocktail, dining, café, banquet, and meeting tables for every setting.",
      bgImage: "https://cdn.shopify.com/s/files/1/0919/2957/5735/collections/tables.jpg?v=1739884961",
      totalProducts: 144,
      collectionId: "gid://shopify/Collection/525215760695",
      innerCat: [
        {
          name: 'Coffee Tables',
          count: 68,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/sienna.jpg?v=1767622813',
          collectionId: "gid://shopify/Collection/522026582327"
        },
        {
          name: 'Cocktail Tables',
          count: 27,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/woodwashhairpinblackcocktail70x70.jpg?v=1737706529',
          collectionId: "gid://shopify/Collection/522170401079"
        },
        {
          name: 'Bars',
          count: 29,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Elmbarstool.jpg?v=1764319968',
          collectionId: "gid://shopify/Collection/522026287415"
        },
        {
          name: 'Cafe Tables',
          count: 15,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/blackwashhairpinblack.jpg?v=1737553418',
          collectionId: "gid://shopify/Collection/522587701559"
        },
        {
          name: 'Dining Tables',
          count: 20,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/madeline_05358a0e-3cbf-4747-aade-8fca812c89f7.jpg?v=1737380650',
          collectionId: "gid://shopify/Collection/522496803127"
        },
        {
          name: 'Banquet Tables',
          count: 4,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/banquetround.jpg?v=1737529267',
          collectionId: "gid://shopify/Collection/522591469879"
        },
        {
          name: 'Meeting Tables',
          count: 7,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/banquetrec.jpg?v=1737465023',
          collectionId: "gid://shopify/Collection/522889789751"
        },
      ],
    },
    {
      name: 'Decor',
      title: "All Decor Collection",
      content: "Discover a curated decor collection featuring lighting, wall accents, swings, rugs, and stylish accessories.",
      bgImage: "https://cdn.shopify.com/s/files/1/0919/2957/5735/collections/decors.jpg?v=1742543083",
      totalProducts: 32,
      collectionId: "gid://shopify/Collection/528341631287",
      innerCat: [
        {
          name: 'Lamps & Lantern',
          count: 9,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/tablelampblack.jpg?v=1739786436',
          collectionId: "gid://shopify/Collection/527933538615"
        },
        {
          name: 'Wall Panels',
          count: 4,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/PICKETFENCE.jpg?v=1738930488',
          collectionId: "gid://shopify/Collection/527933571383"
        },
        {
          name: 'Swings & Carts',
          count: 6,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/alohaswingwithbackrest.jpg?v=1742539400',
          collectionId: "gid://shopify/Collection/527933636919"
        },
        {
          name: 'Fashion Props',
          count: 13,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/makeupmirror.jpg?v=1737814694',
          collectionId: "gid://shopify/Collection/528343335223"
        },
        {
          name: 'Rugs & Carpets',
          count: 3,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/ArabicRugMERAR02.jpg?v=1743666583',
          collectionId: "gid://shopify/Collection/527933767991"
        },
      ],
    },

    {
      name: 'Outdoor',
      title: "All Outdoor Collection",
      content: "Discover our outdoor collection featuring seating, Arabic seating, umbrellas, and picnic benches for open spaces.",
      bgImage: "https://cdn.shopify.com/s/files/1/0919/2957/5735/collections/arabic_collection.jpg?v=1739609174",
      totalProducts: 28,
      collectionId: "gid://shopify/Collection/522170532151",
      innerCat: [
        {
          name: 'Outdoor Seating',
          count: 19,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/bruno2seater.jpg?v=1737720212',
          collectionId: "gid://shopify/Collection/527934062903"
        },
        {
          name: 'Arabic Seating',
          count: 19,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/majilissetting.jpg?v=1737711733',
          collectionId: "gid://shopify/Collection/522170499383"
        },
        {
          name: 'Umbrellas',
          count: 7,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/cabanarust.jpg?v=1765445773',
          collectionId: "gid://shopify/Collection/527934161207"
        },
        {
          name: 'Picnic Bench',
          count: 3,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/picnicbrown.jpg?v=1737723919',
          collectionId: "gid://shopify/Collection/527934226743"
        },
      ],
    },

    {
      name: 'Miscellaneous',
      title: "All Miscellaneous Collection",
      content: "Discover essential miscellaneous items including appliances, back-of-house, and crowd control solutions.",
      bgImage: "https://cdn.shopify.com/s/files/1/0919/2957/5735/collections/seating.jpg?v=1741773394",
      totalProducts: 62,
      collectionId: "gid://shopify/Collection/522170630455",
      innerCat: [
        {
          name: 'Back of House',
          count: 39,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/OFFICE_TABLE.jpg?v=1756474159',
          collectionId: "gid://shopify/Collection/527934685495"
        },
        {
          name: 'Appliances',
          count: 16,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/smallchiller.jpg?v=1739790308',
          collectionId: "gid://shopify/Collection/525100810551"
        },
        {
          name: 'Crowd Control',
          count: 10,
          image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/barriesdisplaystanda4.jpg?v=1767703135',
          collectionId: "gid://shopify/Collection/522900767031"
        },
      ],
    },
  ],

  cartList: [
    {
      image: images.product1,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      image: images.product16,
      title: 'products.productName2',
      brandName: 'products.productBrand2',
      discountPrice: 'products.productDiscountPrice2',
      price: 'products.productPrice2',
      discount: 'products.productDiscount2',
    },
    {
      image: images.product15,
      title: 'products.productName3',
      brandName: 'products.productBrand3',
      discountPrice: 'products.productDiscountPrice3',
      price: 'products.productPrice3',
      discount: 'products.productDiscount3',
    },
  ],

  mayLike: [
    {
      image: images.product14,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      image: images.product15,
      title: 'products.productName2',
      brandName: 'products.productBrand2',
      discountPrice: 'products.productDiscountPrice2',
      price: 'products.productPrice2',
      discount: 'products.productDiscount2',
    },
    {
      image: images.product16,
      title: 'products.productName3',
      brandName: 'products.productBrand3',
      discountPrice: 'products.productDiscountPrice3',
      price: 'products.productPrice3',
      discount: 'products.productDiscount3',
    },
  ],

  wishlist: [
    {
      image: images.product1,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      image: images.product15,
      title: 'products.productName2',
      brandName: 'products.productBrand2',
      discountPrice: 'products.productDiscountPrice2',
      price: 'products.productPrice2',
      discount: 'products.productDiscount2',
    },
    {
      image: images.findStyle2,
      title: 'products.productName3',
      brandName: 'products.productBrand3',
      discountPrice: 'products.productDiscountPrice3',
      price: 'products.productPrice3',
      discount: 'products.productDiscount3',
    },
    {
      image: images.kidsCorner2,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      image: images.dealOfTheDay3,
      title: 'products.productName2',
      brandName: 'products.productBrand2',
      discountPrice: 'products.productDiscountPrice2',
      price: 'products.productPrice2',
      discount: 'products.productDiscount2',
    },
    {
      image: images.dealOfTheDay1,
      title: 'products.productName3',
      brandName: 'products.productBrand3',
      discountPrice: 'products.productDiscountPrice3',
      price: 'products.productPrice3',
      discount: 'products.productDiscount3',
    },
  ],

  profileItems: [
    // {
    //   name: 'drawerArr.mode',
    //   icons: <DarkMode />,
    //   description: '',
    //   showSwitch: true,
    // },
    // {
    //   name: 'drawerArr.rtl',
    //   icons: <Rtl />,
    //   description: '',
    //   showSwitch: true,
    // },
    // {
    //   name: 'profile.pages',
    //   icons: <Orders />,
    //   description: 'profile.pagesProfile',
    //   showSwitch: false,
    // },
    {
      name: 'drawerArr.orders',
      icons: <Orders />,
      description: 'drawerArr.orderDrawer',
      showSwitch: false,
      path: 'OrderHistory'
    },
    {
      name: 'drawerArr.cart',
      icons: <Cart />,
      description: 'drawerArr.wishlistDrawer',
      showSwitch: false,
      path: 'cart'
    },
    {
      name: 'Gallery',
      icons: <Gallery />,
      description: 'Pictures, Moments, Memories...',
      showSwitch: false,
      path: 'Gallery'
    },
    // {
    //   name: 'profile.payment',
    //   icons: <Wallet />,
    //   description: 'profile.paymentProfile',
    //   showSwitch: false,
    //   path: 'PaymentCard'
    // },
    // {
    //   name: 'profile.savedAddress',
    //   icons: <Location />,
    //   description: 'profile.addProfile',
    //   showSwitch: false,
    //   path: 'SavedAddress'
    // },
    // {
    //   name: 'drawerArr.language',
    //   icons: <LanguageIcon />,
    //   description: 'drawerArr.languageDrawer',
    //   showSwitch: false,
    //   path: 'visibleModal'
    // },
    // {
    //   name: 'drawerArr.currencyConverter',
    //   icons: <CurrencyConverter />,
    //   description: 'drawerArr.currencyConverterDrawer',
    //   showSwitch: false,
    // },
    // {
    //   name: 'drawerArr.notification',
    //   icons: <Notification />,
    //   description: 'drawerArr.notificationDrawer',
    //   showSwitch: false,
    // },
    // {
    //   name: 'drawerArr.settings',
    //   icons: <Settings />,
    //   description: 'drawerArr.settingsDrawer',
    //   showSwitch: false,
    //   path: 'Settings'
    // },
    // {
    //   name: 'drawerArr.bulkOrder',
    //   icons: <BulkOrder />,
    //   description: 'drawerArr.bulkOrderDrawer',
    //   showSwitch: false,
    //   path: 'Bulk Order'
    // },
    // {
    //   name: 'profile.profileSetting',
    //   icons: <AboutUs />,
    //   description: 'profile.profileSettings',
    //   showSwitch: false,
    // },
    {
      name: 'profile.privacyPolicy',
      icons: <Lock />,
      description: 'profile.privacyPolicyDesc',
      showSwitch: false,
      path: 'PrivacyPolicy'
    },
    // {
    //   name: 'profile.termsConditions',
    //   icons: <AboutUs />,
    //   description: 'profile.termsProfile',
    //   showSwitch: false,
    //   path: 'TermsCondition'
    // },
    // {
    //   name: 'profile.shippingPolicy',
    //   icons: <Document />,
    //   description: 'profile.shippingPolicyDesc',
    //   showSwitch: false,
    //   path: 'ShippingPolicy'
    // },
    // {
    //   name: 'profile.refundPolicy',
    //   icons: <Return />,
    //   description: 'profile.refundPolicyDesc',
    //   showSwitch: false,
    //   path: 'RefundPolicy'
    // },
    // {
    //   name: 'profile.deliveryPolicy',
    //   icons: <Delivery />,
    //   description: 'profile.deliveryPolicyDesc',
    //   showSwitch: false,
    //   path: 'DeliveryPolicy'
    // },
    // {
    //   name: 'profile.shareApp',
    //   icons: <Share />,
    //   description: 'profile.shareAppDesc',
    //   showSwitch: false,
    //   path: 'ShareApp'
    // },
    {
      name: 'drawerArr.help',
      icons: <Help />,
      description: 'drawerArr.helpDrawer',
      showSwitch: false,
      path: 'HelpCenter'
    },
  ],

  recentSearch: [
    { result: 'products.productName1' },
    { result: 'products.productName2' },
    { result: 'products.productName3' },
  ],

  recommended: [
    {
      id: 0,
      name: 'categoryArr.inverters',
      collectionId: "gid://shopify/Collection/443235205332"
    },
    {
      id: 1,
      name: 'categoryArr.batteries',
      collectionId: "gid://shopify/Collection/443235369172"
    },
    {
      id: 2,
      name: 'categoryArr.waterPump',
      collectionId: "gid://shopify/Collection/443234746580"
    },
    {
      id: 3,
      name: 'categoryArr.generator',
      collectionId: "gid://shopify/Collection/443266466004"
    },
    {
      id: 4,
      name: 'categoryArr.powerStation',
      collectionId: "gid://shopify/Collection/443234615508"
    },
    {
      id: 5,
      name: 'categoryArr.solarPanel',
      collectionId: "gid://shopify/Collection/444937961684"
    },
    {
      id: 6,
      name: 'categoryArr.accessories',
      collectionId: "gid://shopify/Collection/443234779348"
    }
  ],

  trendingCategory: [
    { name: 'recommendedArr.flowerprint', category: images.flowerprint },
    { name: 'recommendedArr.denim', category: images.denim },
    { name: 'recommendedArr.skirts', category: images.skirts },
  ],

  topBrands: [
    { brand: images.brand1, darkBrand: images.biggestDealDark1 },
    { brand: images.brand2, darkBrand: images.biggestDealDark2 },
    { brand: images.brand3, darkBrand: images.biggestDealDark3 },
    { brand: images.brand4, darkBrand: images.biggestDealDark4 },
    { brand: images.brand5, darkBrand: images.biggestDealDark5 },
    { brand: images.brand6, darkBrand: images.biggestDealDark6 },
  ],
  order: [
    {
      image: images.product15,
      name: 'orderSuccess.ordername',
      size: 'sizes.small',
      price: '32.00',
      quantity: 1,
    },
    {
      image: images.product16,
      name: 'orderSuccess.ordername',
      size: 'sizes.small',
      price: '32.00',
      quantity: 1,
    },
  ],
  openOrders: [
    {
      image: images.product15,
      orderName: 'products.productName1',
      size: 'sizes.small',
      date: 'orderHistory.orderDate',
      deliveryStatus: 'orderHistory.dispatched',
      orderStatus: 'orderHistory.ongoing',
      quantity: 1,
    },
    {
      image: images.product16,
      orderName: 'products.productName1',
      size: 'sizes.small',
      date: 'orderHistory.orderDate',
      deliveryStatus: 'orderHistory.ontheway',
      orderStatus: 'orderHistory.ongoing',
      quantity: 1,
    },
  ],
  pastOrders: [
    {
      image: images.product14,
      orderName: 'products.productName1',
      size: 'sizes.small',
      date: 'orderHistory.orderDate',
      deliveryStatus: 'orderHistory.delivered',
      orderStatus: 'orderHistory.ongoing',
      quantity: 1,
    },
    {
      image: images.product18,
      orderName: 'products.productName1',
      size: 'sizes.small',
      date: 'orderHistory.orderDate',
      deliveryStatus: 'orderHistory.delivered',
      orderStatus: 'orderHistory.ongoing',
      quantity: 1,
    },
  ],
  orderTrackerData: [
    {
      title: 'Out For Delivery',
      description: 'expected delivery on monday',
    },
    { title: 'In Transit', description: '10.00 am, 21/05/2020', icon: <Check /> },
    {
      title: 'Ready To Ship',
      description: '12.00 am, 20/05/2020',
      icon: <Check />,
    },
    { title: 'Ordered', description: '20/05/2020', icon: <Check /> },
  ],
  productSection: [
    { id: 0, image: images.product1 },
    { id: 0, image: images.product2 },
    { id: 0, image: images.product4 },
    { id: 1, image: images.product5 },
    { id: 1, image: images.product6 },
    { id: 1, image: images.product7 },
    { id: 2, image: images.noData },
  ],
  sizes: [
    { id: 0, name: 'sizes.small' },
    { id: 1, name: 'sizes.midium' },
    { id: 2, name: 'sizes.large' },
    { id: 3, name: 'sizes.xlarge' },
  ],
  selectColors: [
    { id: 0, color: '#E6E6FA' },
    { id: 1, color: '#F5F5F5' },
    { id: 2, color: '#B0C4DE' },
  ],
  productDetails: [
    { name: 'productDetail.product', content: 'productDetail.content' },
    { name: 'productDetail.product1', content: 'productDetail.content1' },
    { name: 'productDetail.product2', content: 'productDetail.content2' },
  ],
  customerReview: [
    {
      image: images.person,
      name: 'customerReview.name',
      date: 'customerReview.date',
      review: 'customerReview.review',
      size: 'sizes.small',
      like: 20,
      disLike: 2,
    },
    {
      image: images.person,
      name: 'customerReview.name',
      date: 'customerReview.date',
      review: 'customerReview.review1',
      size: 'sizes.xlarge',
      like: 20,
      disLike: 2,
    },
  ],
  cupons: [
    {
      name: 'OffersForYou.MULTIKART10',
      amount: '20.00',
      disc: 'cupons.multikartDisc',
    },
    {
      name: 'cupons.welcome',
      amount: '22.00',
      disc: 'cupons.welcomeDesc',
    },
    {
      name: 'cupons.Lucky50',
      amount: '32.00',
      disc: 'cupons.LUCKYDesc',
    },
    {
      name: 'cupons.SummerSale',
      amount: '15.00',
      disc: 'cupons.SummerSaleDesc',
    },
  ],
  notification: [
    {
      title: 'notification.all',
    },
    {
      title: 'notification.orderInfo',
    },
    {
      title: 'notification.Offers',
    },
    {
      title: 'notification.payment',
    },
  ],
  notificationList: [
    {
      id: 0,
      image: images.product19,
      title: 'Exclusive Brand Day Sale!! HURRY, LIMITED period offer!',
      date: '10 July, 2021',
      newNotification: true,
    },
    {
      id: 0,
      image: images.product15,
      title:
        'Order Placed successfully. It will be delivered on Mon 15 July, 2021',
      date: '5 July, 2021',
      newNotification: true,
    },
    {
      id: 0,
      image: images.product20,
      title: 'We have got coupons. collect now and save extras !!!',
      date: '5 June, 2021',
      newNotification: true,
    },
    {
      id: 0,
      image: images.product21,
      title:
        'Payment Failed. You can retry making a payment on order sections.',
      date: '20 April, 2021',
      newNotification: false,
    },
    {
      id: 0,
      image: images.product22,
      title: 'Exclusive Brand Day Sale!! HURRY, LIMITED period offer!',
      date: '10 July, 2021',
      newNotification: false,
    },
    {
      id: 0,
      image: images.product15,
      title:
        'Your order is delivered on time. for any further assistance please contact us. ',
      date: '5 July, 2021',
      newNotification: true,
    },
    {
      id: 0,
      image: images.product15,
      title: 'We have got coupons. collect now and save extras !!!',
      date: '5 June, 2021',
      newNotification: false,
    },
    {
      id: 0,
      image: images.product20,
      title:
        'Payment Failed. You can retry making a payment on order sections.',
      date: '20 April, 2021',
      newNotification: false,
    },
    {
      id: 1,
      image: images.product15,
      title:
        'Order Placed successfully. It will be delivered on Mon 15 July, 2021',
      date: '5 July, 2021',
      newNotification: true,
    },
    {
      id: 1,
      image: images.product19,
      title: 'Exclusive Brand Day Sale!! HURRY, LIMITED period offer!',
      date: '10 July, 2021',
      newNotification: false,
    },
    {
      id: 1,
      image: images.product15,
      title:
        'Your order is delivered on time. for any further assistance please contact us. ',
      date: '5 July, 2021',
      newNotification: true,
    },
    {
      id: 2,
      image: images.product19,
      title: 'Exclusive Brand Day Sale!! HURRY, LIMITED period offer!',
      date: '10 July, 2021',
      newNotification: true,
    },
    {
      id: 2,
      image: images.product15,
      title:
        'Order Placed successfully. It will be delivered on Mon 15 July, 2021',
      date: '5 July, 2021',
      newNotification: true,
    },
    {
      id: 2,
      image: images.product20,
      title:
        'Payment Failed. You can retry making a payment on order sections.',
      date: '20 April, 2021',
      newNotification: false,
    },
    {
      id: 3,
      image: images.product19,
      title: 'Exclusive Brand Day Sale!! HURRY, LIMITED period offer!',
      date: '10 July, 2021',
      newNotification: true,
    },
    {
      id: 3,
      image: images.product20,
      title:
        'Payment Failed. You can retry making a payment on order sections.',
      date: '20 April, 2021',
      newNotification: false,
    },
  ],
  offers: [
    {
      offerDesc: 'paymentDetails.offerDesc',
      showMore: false,
    },
    {
      offerDesc: 'paymentDetails.promotionDesc',
      showMore: false,
    },
    {
      offerDesc: 'paymentDetails.offerDesc',
      showMore: true,
    },
    {
      offerDesc: 'paymentDetails.promotionDesc',
      showMore: true,
    },
  ],
  paymentOption: [
    {
      image: images.cash,
      name: 'paymentDetails.cashDelivery',
      darkImg: images.cashDark,
      selected: true
    },
    {
      image: images.credit,
      name: 'paymentDetails.debit/credit',
      darkImg: images.creditDark,
      selected: false
    },
    {
      image: images.wallets,
      name: 'paymentDetails.wallets',
      darkImg: images.walletsDark,
      selected: false
    },
    {
      image: images.netBanking,
      name: 'paymentDetails.netBanking',
      darkImg: images.netBankingDark,
      selected: false
    },
  ],
  paymentwallets: [
    {
      id: 0,
      name: 'wallets.commercialBank',
      selected: true,
    },
    {
      id: 1,
      name: 'wallets.constructionBank',
      selected: false,
    },
    {
      id: 2,
      name: 'wallets.agriculturalBank',
      selected: false,
    },
    {
      id: 3,
      name: 'wallets.hsbcholdings',
      selected: false,
    },
    {
      id: 4,
      name: 'wallets.bankAmerica',
      selected: false,
    },
    {
      id: 5,
      name: 'wallets.jpMorgan',
      selected: false,
    },
  ],
  chooseBank: [
    {
      id: 0,
      name: 'wallets.chooseBank',
    },
    {
      id: 1,
      name: 'wallets.ICICI',
    },
    {
      id: 2,
      name: 'wallets.BOB',
    },
  ],
  netBankingData: [
    {
      id: 0,
      name: 'netBanking.adyen',
    },
    {
      id: 1,
      name: 'netBanking.airtelMoney',
    },
    {
      id: 2,
      name: 'netBanking.alliedWallet',
    },
    {
      id: 3,
      name: 'netBanking.applePay',
    },
    {
      id: 4,
      name: 'netBanking.brinks',
    },
    {
      id: 5,
      name: 'netBanking.cardFree',
    },
  ],
  country: [
    {
      id: 0,
      name: 'addNewAddress.newZealand',
    },
    {
      id: 1,
      name: 'addNewAddress.australia',
    },
    {
      id: 2,
      name: 'addNewAddress.india',
    },
  ],

  states: [
    {
      id: 0,
      name: 'addNewAddress.abudhabi',
    },
    {
      id: 1,
      name: 'addNewAddress.dubai',
    },
    {
      id: 2,
      name: 'addNewAddress.sharjah',
    },
    {
      id: 3,
      name: 'addNewAddress.ajman',
    },
    {
      id: 4,
      name: 'addNewAddress.rasalkhaima',
    },
    {
      id: 5,
      name: 'addNewAddress.fujairah',
    },
    {
      id: 6,
      name: 'addNewAddress.ummalquwain',
    },
  ],
  addressTypes: [
    { id: 0, name: 'addNewAddress.home', selected: true },
    { id: 1, name: 'addNewAddress.office', selected: false },
    { id: 2, name: 'addNewAddress.others', selected: false },
  ],
  deliveryDetails: [
    {
      id: 0,
      area: 'ShippingDetails.area',
      address: 'orderSuccess.address',
      phoneNo: '903-239-1284',
      deliveryService: 'addNewAddress.home',
    },
    {
      id: 1,
      area: 'deliveryDetails.area',
      address: 'deliveryDetails.address',
      phoneNo: '317-898-0622',
      deliveryService: 'addNewAddress.office',
    },
  ],
  expectedDeliveryData: [
    {
      id: 0,
      name: 'products.productName1',
      date: '25th July',
      image: images.product15,
    },
    {
      id: 1,
      name: 'products.productName1',
      date: '25th July',
      image: images.product16,
    },
  ],
  helpCenter: [
    {
      quetion: 'helpCenter.question1',
    },
    {
      quetion: 'helpCenter.question2',
    },
    {
      quetion: 'helpCenter.question3',
    },
    {
      quetion: 'helpCenter.question4',
    },
    {
      quetion: 'helpCenter.question5',
    },
    {
      quetion: 'helpCenter.question6',

    },
    {
      quetion: 'helpCenter.question7',
    },
    {
      quetion: 'helpCenter.question8',
    },
  ],
  termsConditions: [
    { content: 'termsCondition.restrictionContent' },
    { content: 'termsCondition.restrictionContent1' },
    { content: 'termsCondition.restrictionContent2' },
    { content: 'termsCondition.restrictionContent3' },
    { content: 'termsCondition.restrictionContent4' },
    { content: 'termsCondition.restrictionContent5' },
    { content: 'termsCondition.restrictionContent6' },
    { content: 'termsCondition.restrictionContent7' },
  ],
  gender: [
    { id: 0, name: 'profileSettings.male' },
    { id: 1, name: 'profileSettings.female' },
    { id: 2, name: 'profileSettings.other' },
  ],

  categorys: [
    {
      id: 1,
      image: images.findStyle3,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
      newProduct: 'shopPage.newProduct',
    },
    {
      id: 2,
      image: images.findStyle4,
      title: 'products.productName2',
      brandName: 'products.productBrand2',
      discountPrice: 'products.productDiscountPrice2',
      price: 'products.productPrice2',
      discount: 'products.productDiscount2',
    },
    {
      id: 3,
      image: images.findStyle1,
      title: 'products.productName3',
      brandName: 'products.productBrand3',
      discountPrice: 'products.productDiscountPrice3',
      price: 'products.productPrice3',
      discount: 'products.productDiscount3',
    },
    {
      id: 4,
      image: images.findStyle2,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
      newProduct: 'shopPage.newProduct',
    },
    {
      id: 5,
      image: images.kidsCorner1,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      id: 6,
      image: images.product1,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      id: 7,
      image: images.kidsCorner3,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
    {
      id: 8,
      image: images.kidsCorner2,
      title: 'products.productName1',
      brandName: 'products.productBrand1',
      discountPrice: 'products.productDiscountPrice1',
      price: 'products.productPrice1',
      discount: 'products.productDiscount1',
    },
  ],

  sortBy: [
    {
      id: 0,
      name: 'shopPage.recommended',
    },
    {
      id: 1,
      name: 'shopPage.popularity',
    },
    {
      id: 2,
      name: 'shopPage.WhatsNew',
    },
    {
      id: 3,
      name: 'shopPage.hightToLow',
    },
    {
      id: 4,
      name: 'shopPage.lowToHigh',
    },
    {
      id: 5,
      name: 'shopPage.customerRating',
    },
  ],

  brands: [
    {
      id: 0,
      name: 'Bluetti',
    },
    {
      id: 1,
      name: 'Daewoo',
    },
    {
      id: 2,
      name: 'Dewalt',
    },
    {
      id: 3,
      name: 'Honda',
    },
    {
      id: 4,
      name: 'NBS Solar',
    },
    {
      id: 5,
      name: 'Perkins',
    },

    {
      id: 6,
      name: 'Saer',
    },
    {
      id: 7,
      name: 'Samsun Solar',
    },
    {
      id: 8,
      name: 'Silver',
    },
    {
      id: 9,
      name: 'Solis',
    },
    {
      id: 10,
      name: 'Su-Kam',
    },
    {
      id: 11,
      name: 'Su-mak Solar',
    },
    {
      id: 12,
      name: 'Sunride Solar',
    },
    {
      id: 13,
      name: 'Yanmar',
    },

  ],
  size: [
    {
      id: 0,
      name: 'sizes.smallSize',
    },
    {
      id: 1,
      name: 'sizes.medium',
    },
    {
      id: 2,
      name: 'sizes.largeSize',
    },
    {
      id: 3,
      name: 'sizes.large',
    },
    {
      id: 4,
      name: 'sizes.2xl',
    },
  ],
  Colors: [
    { id: 0, color: '#E6E6FA' },
    { id: 1, color: '#F5F5F5' },
    { id: 2, color: '#B0C4DE' },
    { id: 3, color: '#EBACA2' },
    { id: 4, color: '#FFC0CB' },
    { id: 5, color: '#ADD8E6' },
    { id: 6, color: '#BED3C3' },
    { id: 7, color: '#9FD9F2' },
    { id: 8, color: '#F5DEB3' },
    { id: 9, color: '#FFE4E1' },
    { id: 10, color: '#E6E6FA' },
  ],
  Occasions: [
    {
      id: 0,
      name: 'shopPage.casual',
    },
    {
      id: 1,
      name: 'shopPage.sports',
    },
    {
      id: 2,
      name: 'shopPage.beachWear',
    },
    {
      id: 3,
      name: 'shopPage.loungeWear',
    },
    {
      id: 4,
      name: 'shopPage.formal',
    },
    {
      id: 5,
      name: 'shopPage.party',
    },
  ],
  paymentSlider: [
    {
      id: 0,
      image: images.blueCard,
      cardName: 'paymentCard.creditCard',
      bankName: 'paymentCard.bankName',
      creditNumber: '1234   5678  ****    9123  ',
    },
    {
      id: 1,
      image: images.yellowCard,
      cardName: 'paymentCard.creditCard',
      bankName: 'paymentCard.bankName',
      creditNumber: '1234   5678  ****  9123  ',
    },
    {
      id: 2,
      image: images.purpleCard,
      cardName: 'paymentCard.creditCard',
      bankName: 'paymentCard.bankName',
      creditNumber: '1234   5678  ****  9123  ',
    },
  ],
  wallets: [
    {
      image: images.paytmLogo,
      name: 'paymentCard.paytmWallet',
      amount: '$25',
    },
    {
      image: images.cashLogo,
      name: 'paymentCard.cashApp',
      amount: '$25',
    },
    {
      image: images.googleLogo,
      name: 'paymentCard.googleWallet',
      amount: '$25',
    },
  ],

  pages: [
    {
      title: 'pages.onBoarding',
      subtitle: 'pages.onBoardingDesc',
      innerPages: [
        { screen: 'onBoarding', title: 'pages.onBoarding' },
        { screen: 'LoginScreen', title: 'pages.login' },
        { screen: 'RegistrationScreen', title: 'register.signUp' },
        { screen: 'ForgotPasswordScreen', title: 'authComman.forgotPassword' },
        { screen: 'ResetpasswordScreen', title: 'resetPassword.resetPassword' },
        { screen: 'onBoarding', title: 'pages.otp' },
      ],
    },
    {
      title: 'pages.homeProduct',
      subtitle: 'pages.homeProductDesc',
      innerPages: [
        { screen: 'Drawer', title: 'tabBar.home' },
        { screen: 'CategoryStackScreen', title: 'category.categories' },
        { screen: 'innerCategory', title: 'pages.innerCategory' },
        { screen: 'Search', title: 'search.search' },
        { screen: 'ShopPage', title: 'pages.shop' },
        { screen: 'Product', title: 'pages.products' },
      ],
    },
    {
      title: 'pages.cartOrderPayment',
      subtitle: 'pages.cartOrderDesc',
      innerPages: [
        { screen: 'cart', title: 'tabBar.cart' },
        { screen: 'EmptyCart', title: 'pages.emptyCart' },
        { screen: 'ApplyCoupon', title: 'cart.applyCoupons' },
        { screen: 'wishList', title: 'tabBar.wishList' },
        { screen: 'AddNewAddress', title: 'addNewAddress.addNewAddress' },
        { screen: 'Payment', title: 'notification.payment' },
        { screen: 'OrderSuccessful', title: 'pages.orderSuccess' },
      ],
    },
    {
      title: 'profile.profileSetting',
      subtitle: 'pages.profileDesc',
      innerPages: [
        { screen: 'profile', title: 'profile.profile' },
        { screen: 'ProfileSettings', title: 'profile.profileSetting' },
        { screen: 'OrderHistory', title: 'orderHistory.orderHistory' },
        { screen: 'orderScreen', title: 'pages.ordertrack' },
        { screen: 'EmptyCart', title: 'pages.noOrder' },
      ],
    },
    {
      title: 'pages.otherPages',
      subtitle: 'pages.otherPageDesc',
      innerPages: [
        { screen: 'TermsCondition', title: 'profile.termsConditions' },
        { screen: 'HelpCenter', title: 'pages.help' },
        { screen: 'AboutUs', title: 'drawerArr.aboutUs' },
        { screen: 'Notification', title: 'drawerArr.notification' },
      ],
    },
  ],
  Settings: [
    {
      id: 0,
      name: 'drawerArr.mode',
      switchType: 'darkMode',
    },
    // {
    //   id: 1,
    //   name: 'drawerArr.rtl',
    //   switchType: 'rtl',
    // },
    // {
    //   id: 2,
    //   name: 'drawerArr.notification',
    //   discription: 'drawerArr.notificationDrawer',
    //   switchType: 'notification',
    // },
  ],
  orderFilters: [
    {
      id: 0,
      name: 'orderFilter.allOrders',
    },
    {
      id: 1,
      name: 'orderFilter.openOrders',
    },
    {
      id: 2,
      name: 'orderFilter.returnOrders',
    },
    {
      id: 3,
      name: 'orderFilter.cancelledOrders',
    },
  ],
  timeFilter: [
    {
      id: 0,
      name: 'orderFilter.last30days',
    },
    {
      id: 1,
      name: 'orderFilter.last6months',
    },
    {
      id: 2,
      name: 2021,
    },
    {
      id: 3,
      name: 2023,
    },
  ],
};
