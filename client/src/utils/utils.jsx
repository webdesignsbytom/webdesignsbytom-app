export const initAlert = { status: '', content: '' };

export const contactFormTemplate = {
  email: '',
  phone: '',
  firstName: '',
  lastName: '',
  country: 'United Kingdom',
  message: '',
};

export const userStoryTemplate = {
  designId: '',
  projectId: '',
  content: '',
};

export const messageTemplate = {
  subject: '',
  content: '',
  sentFromId: '',
  sentFromName: '',
  userId: '',
};

export const designTemplate = {
  name: 'untitled',
  navDesign: {},
  colourPalette: [],
  userStories: [{ content: 'I want my website to suit me perfectly' }],
  userId: '',
};

export const paletteTemplate = [
  {
    title: 'Main Background',
    info: 'Main Background colour.',
    id: 'mainBackground',
    colour: '#ffffff',
    css: 'bg-[#ffffff]',
  },
  {
    title: 'Alt Background',
    info: 'A colour to compliment the main background.',
    id: 'altBackground',
    colour: '#94a3b8',
    css: 'bg-[#94a3b8]',
  },
  {
    title: 'Nav Background',
    info: 'Usually a dark background. Can be semi-transparent or even see through.',
    id: 'navBackground',
    colour: '#1e293b',
    css: 'bg-[#1e293b]',
  },
  {
    title: 'Dark Mode Background',
    info: 'Part of your SEO requires you to have the entire site available in an alternate dark colour scheme.',
    id: 'darkModeBackground',
    colour: '#000000',
    css: 'bg-[#000000]',
  },
  {
    title: 'Main Text',
    info: 'Primary font colour for general text.',
    id: 'mainText',
    colour: '#000000',
    css: 'bg-[#000000]',
  },
  {
    title: 'Dark Mode Main Text',
    info: 'In dark mode alternate your text to contrast the background. Dark modes are part of your SEO requirements.',
    id: 'darkModeMainText',
    colour: '#ffffff',
    css: 'bg-[#ffffff]',
  },
  {
    title: 'Alt Text',
    info: 'Alternative text colour for highlighting headers, titles or specific words.',
    id: 'altText',
    colour: '#94a3b8',
    css: 'bg-[#94a3b8]',
  },
  {
    title: 'Hover Text',
    info: 'To highlight the text the user hovers on. For a smooth interactive user experience.',
    id: 'hoverText',
    colour: '#1e293b',
    css: 'bg-[#1e293b]',
  },
  {
    title: 'Dark Mode Hover Text',
    info: 'A slightly darker colour than your text to highlight when hovered over.',
    id: 'darkModeHoverText',
    colour: '#e2e8f0',
    css: 'bg-[#e2e8f0]',
  },
  {
    title: 'Active Text',
    info: 'For clicked on links and selected navigation links.',
    id: 'activeText',
    colour: '#6b7280',
    css: 'bg-[#6b7280]',
  },
  {
    title: 'Borders',
    info: 'The colour for all your borders throughout the site.',
    id: 'borders',
    colour: '#000000',
    css: 'bg-[#000000]',
  },
  {
    title: 'Dark Mode Borders',
    info: 'In dark mode alternate your border colour as well.',
    id: 'darkModeBorders',
    colour: '#ffffff',
    css: 'bg-[#ffffff]',
  },
  {
    title: 'Hyperlinks',
    info: 'To make links stand out as part of your SEO, hyperlinks get a noticable colour.',
    id: 'hyperlinks',
    colour: '#2563eb',
    css: 'bg-[#2563eb]',
  },
];

export const pricingTableData = [
  {
    title: 'Email address',
    basicSite: {
      available: true,
      amount: 'infinite',
    },
    basicShop: {
      available: true,
      amount: 'infinite',
    },
    fullstack: {
      available: true,
      amount: 'infinite',
    },
  },
  {
    title: 'Contact Form',
    basicSite: {
      available: true,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
  {
    title: 'Social Media Interaction',
    basicSite: {
      available: true,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
  {
    title: 'Google Maps',
    basicSite: {
      available: true,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
  {
    title: 'Cookies and Privacy Bar',
    basicSite: {
      available: true,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
  {
    title: 'Home Page',
    basicSite: {
      available: true,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
  {
    title: 'Reviews',
    basicSite: {
      available: true,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
  {
    title: '3 Months Testing',
    basicSite: {
      available: true,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
  // Basic shop +
  {
    title: 'Users',
    basicSite: {
      available: false,
    },
    basicShop: {
      available: true,
      amount: 'infinite',
    },
    fullstack: {
      available: true,
      amount: 'infinite',
    },
  },
  {
    title: 'Product Pages',
    basicSite: {
      available: false,
    },
    basicShop: {
      available: true,
      amount: 100,
    },
    fullstack: {
      available: true,
      amount: 'infinite',
    },
  },
  {
    title: 'Analytics',
    basicSite: {
      available: false,
    },
    basicShop: {
      available: true,
    },
    fullstack: {
      available: true,
    },
  },
];


export const basicListItems = [
  {
    text: `Up to 10 pages`
  },
  {
    text: `10 GB of storage`
  },
  {
    text: `Hosting from £3.99 pm`
  },
  {
    text: `3 Months free testing`
  },
  {
    text: `SSL Certificates`
  },
]
export const shopListItems = [
  {
    text: `Hundreds of store products`
  },
  {
    text: `Individual product pages`
  },
  {
    text: `Stripe, Paypal or Visa payments`
  },
  {
    text: `Purchasing and thank you pages`
  },
  {
    text: `Update products admin area`
  },
]

export const fullstackListItems = [
  {
    text: `Intergrated restful API's`
  },
  {
    text: `Custom database deisgns`
  },
  {
    text: `Developer and admin tools`
  },
  {
    text: `Fully customized components`
  },
  {
    text: `User features`
  },
]