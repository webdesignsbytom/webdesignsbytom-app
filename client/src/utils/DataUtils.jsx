// Project set up data
export const projectInitialData = {
    type: ``,
    name: ``,
    domain: ``,
    startDate: new Date(),
    numPages: ``,
    owner: ``,
    dueDate: ``
}

export const initAlert = { status: '', content: '' };

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
    text: `Up to 10 pages`,
  },
  {
    text: `10 GB of storage`,
  },
  {
    text: `Hosting from £3.99 pm`,
  },
  {
    text: `3 Months free testing`,
  },
  {
    text: `SSL Certificates`,
  },
];

export const shopListItems = [
  {
    text: `Hundreds of store products`,
  },
  {
    text: `Individual product pages`,
  },
  {
    text: `Stripe, Paypal or Visa payments`,
  },
  {
    text: `Purchasing and thank you pages`,
  },
  {
    text: `Update products admin area`,
  },
];

export const fullstackListItems = [
  {
    text: `Intergrated restful API's`,
  },
  {
    text: `Custom database deisgns`,
  },
  {
    text: `Developer and admin tools`,
  },
  {
    text: `Fully customized components`,
  },
  {
    text: `User features`,
  },
];
