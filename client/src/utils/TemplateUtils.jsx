
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
      css: '#ffffff',
      type: 'swatch',
    },
    {
      title: 'Alt Background',
      info: 'A colour to compliment the main background.',
      id: 'altBackground',
      colour: '#94a3b8',
      css: '#94a3b8',
      type: 'swatch',
    },
    {
      title: 'Nav Background',
      info: 'Usually a dark background. Can be semi-transparent or even see through.',
      id: 'navBackground',
      colour: '#1e293b',
      css: '#1e293b',
      type: 'swatch',
    },
    {
      title: 'Dark Mode Background',
      info: 'Part of your SEO requires you to have the entire site available in an alternate dark colour scheme.',
      id: 'darkModeBackground',
      colour: '#000000',
      css: '#000000',
      type: 'swatch',
    },
    {
      title: 'Main Text',
      info: 'Primary font colour for general text.',
      id: 'mainText',
      colour: '#000000',
      css: '#000000',
      type: 'swatch',
    },
    {
      title: 'Dark Mode Main Text',
      info: 'In dark mode alternate your text to contrast the background. Dark modes are part of your SEO requirements.',
      id: 'darkModeMainText',
      colour: '#ffffff',
      css: '#ffffff',
      type: 'swatch',
    },
    {
      title: 'Alt Text',
      info: 'Alternative text colour for highlighting headers, titles or specific words.',
      id: 'altText',
      colour: '#94a3b8',
      css: '#94a3b8',
      type: 'swatch',
    },
    {
      title: 'Hover Text',
      info: 'To highlight the text the user hovers on. For a smooth interactive user experience.',
      id: 'hoverText',
      colour: '#1e293b',
      css: '#1e293b',
      type: 'swatch',
    },
    {
      title: 'Dark Mode Hover Text',
      info: 'A slightly darker colour than your text to highlight when hovered over.',
      id: 'darkModeHoverText',
      colour: '#e2e8f0',
      css: '#e2e8f0',
      type: 'swatch',
    },
    {
      title: 'Active Text',
      info: 'For clicked on links and selected navigation links.',
      id: 'activeText',
      colour: '#6b7280',
      css: '#6b7280',
      type: 'swatch',
    },
    {
      title: 'Borders',
      info: 'The colour for all your borders throughout the site.',
      id: 'borders',
      colour: '#000000',
      css: '#000000',
      type: 'swatch',
    },
    {
      title: 'Dark Mode Borders',
      info: 'In dark mode alternate your border colour as well.',
      id: 'darkModeBorders',
      colour: '#ffffff',
      css: '#ffffff',
      type: 'swatch',
    },
    {
      title: 'Hyperlinks',
      info: 'To make links stand out as part of your SEO, hyperlinks get a noticable colour.',
      id: 'hyperlinks',
      colour: '#2563eb',
      css: '#2563eb',
      type: 'swatch',
    },
  ];