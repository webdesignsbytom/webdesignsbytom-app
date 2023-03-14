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
  tempId: '',
  designId: '',
  projectId: '',
  content: '',
};

export const designTemplate = {
  name: 'untitled',
  navDesign: {},
  colorPalette: [],
  userStories: [],
  userId: '',
};

export const paletteTemplate = {
  mainBackground: {
    colour: '#ffffff',
    css: 'bg-[#ffffff]',
  },
  altBackground: {
    colour: '#94a3b8',
    css: 'bg-[#94a3b8]',
  },
  navBackground: {
    colour: '#1e293b',
    css: 'bg-[#1e293b]',
  },
  darkModeBackground: {
    colour: '#000000',
    css: 'bg-[#000000]',
  },
  mainText: {
    colour: '#000000',
    css: 'bg-[#000000]',
  },
  darkModeMainText: {
    colour: '#ffffff',
    css: 'bg-[#ffffff]',
  },
  altText: {
    colour: '#94a3b8',
    css: 'bg-[#94a3b8]',
  },
  hoverText: {
    colour: '#1e293b',
    css: 'bg-[#1e293b]',
  },
  darkModeHoverText: {
    colour: '#e2e8f0',
    css: 'bg-[#e2e8f0]',
  },
  activeText: {
    colour: '#6b7280',
    css: 'bg-[#6b7280]',
  },
  borders: {
    colour: '#000000',
    css: 'bg-[#000000]',
  },
  darkModeBorders: {
    colour: '#ffffff',
    css: 'bg-[#ffffff]',
  },
  hyperlinks: {
    colour: '#2563eb',
    css: 'bg-[#2563eb]',
  },
};

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
