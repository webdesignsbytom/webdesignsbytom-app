import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';

async function seed() {
  const password = await bcrypt.hash('123', 8);

  const testUser = await dbClient.user.create({
    data: {
      email: `xtombrock1989@gmail.com`,
      password,
      isVerified: false,
      firstName: `Conan`,
      lastName: 'O Brian',
      country: 'USA',
      agreedToTerms: true,
    },
  });

  const complaint = await dbClient.complaint.create({
    data: {
      email: `email@gmail.com`,
      content: 'Crap',
    },
  });

  const project = await dbClient.project.create({
    data: {
      type: 'TEST',
      domainName: `www.magic.com`,
      ownerName: `${testUser.firstName} ${testUser.lastName}`,
      name: 'New fun',
      userId: testUser.id,
      price: 1000,
    },
  });

  // PAGES
  const page1 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `Home`,
      desc: 'Home page, index page, splash page. Make your mark with a visually interesting display.',
    },
  });
  const page2 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `About`,
      desc: 'About page. A short description of you or your business. Call to action buttons to tak users where they need to go.',
    },
  });
  const page3 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `Contact`,
      desc: 'Contact pages will consist of a form, but is better to include media links, email, phone and other communication methods. Google maps API for exact location displayed.',
    },
  });
  const page4 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `Gallery`,
      desc: 'A display page to show off something you are pleased to display. This might be products or places.',
    },
  });
  const page5 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `FAQ`,
      desc: 'Easily answered questions to save you time responding. A staple of most websites.',
    },
  });
  const page6 = await dbClient.page.create({
    data: {
      type: 'SHOP',
      name: `Store Front`,
      desc: 'Popular products can be displayed in the store front. Sales or important information can be convayed.',
    },
  });
  const page7 = await dbClient.page.create({
    data: {
      type: 'SHOP',
      name: `Cart`,
      desc: 'Carts need to be eligant and users can easily update or remove their items.',
    },
  });
  const page8 = await dbClient.page.create({
    data: {
      type: 'SHOP',
      name: `Thank You`,
      desc: 'Little pages like this make your app look more professional. They are touches a user is used to seeing.',
    },
  });
  const page9 = await dbClient.page.create({
    data: {
      type: 'BLOG',
      name: `Posts`,
      desc: 'Every blog needs to show it has posts. A smart layout with easy navigation for switching between blog posts is essential.',
    },
  });
  const page10 = await dbClient.page.create({
    data: {
      type: 'BLOG',
      name: `Upload posts`,
      desc: 'As an admin of a website you want a quick and easy page where you can manage all your posts and create new ones.',
    },
  });
  const page11 = await dbClient.page.create({
    data: {
      type: 'ADMIN',
      name: `Admin Overview`,
      desc: 'As an admin you can look over data about your site. User information, admin powers, total views and traffic.',
    },
  });
  const page12 = await dbClient.page.create({
    data: {
      type: 'DEVELOPER',
      name: `Upload posts`,
      desc: 'As an developer on app manager. You will need to collect reports about your website and log and errors for improvements. Websites must be constantly evolving to keep up.',
    },
  });
  const page13 = await dbClient.page.create({
    data: {
      type: 'FULLSTACK',
      name: `Logout`,
      desc: 'Either a serpate page where people can click a log out link. Or reached after signing out as a "Come again soon" page.',
    },
  });

  // COMPONENTS
  const component1 = await dbClient.component.create({
    data: {
      type: 'BASIC',
      name: `Social Media`,
      desc: 'Social media links in a stylish container.',
    },
  });
  const component2 = await dbClient.component.create({
    data: {
      type: 'BASIC',
      name: `Hero Section`,
      desc: 'A header to the home page. A stylish spash component that shows off your whole website and company in one screen.',
    },
  });
  const component3 = await dbClient.component.create({
    data: {
      type: 'BASIC',
      name: `Map API`,
      desc: 'Usually found on a contact page. A map can be used to represent your location or your customers current location.',
    },
  });
  const component4 = await dbClient.component.create({
    data: {
      type: 'FULLSTACK',
      name: `User Profile`,
      desc: 'If you let users sign up they will need a place to manage their account data. Display current info, update and delete.',
    },
  });
  const component5 = await dbClient.page.create({
    data: {
      type: 'SHOP',
      name: `Product`,
      desc: 'Either as a pop out page or a component to fill the page. Each product can have its own description and images.',
    },
  });
  const component6 = await dbClient.component.create({
    data: {
      type: 'FULLSTACK',
      name: `Custom animations`,
      desc: 'Using canvas and enough time and money you can create most animations for your site. With the realism of a PS2 cut sceen.',
    },
  });
  const component7 = await dbClient.component.create({
    data: {
      type: 'SHOP',
      name: `Reviews`,
      desc: 'Reviews are hugely important to business and website SEO, a smart review container is used to present the best.',
    },
  });
  const component8 = await dbClient.component.create({
    data: {
      type: 'FULLSTACK',
      name: `Chat room`,
      desc: 'Chat rooms take all forms, either in game chat or customer service.',
    },
  });
  const component9 = await dbClient.component.create({
    data: {
      type: 'BASIC',
      name: `Gallery`,
      desc: 'A gallery component can be inserted on any page. They are widely used to show of products or add a little colour and content to a page.',
    },
  });
  const component10 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `Embedded Media`,
      desc: 'Add video, audio, PDF or youtube videos to your website.',
    },
  });
  const component11 = await dbClient.component.create({
    data: {
      type: 'FULLSTACK',
      name: `Website Analytics`,
      desc: 'An admin or developer will want to check the website stats. Vistors, location, login, errors and page ranking stats can be compiled as graphs.',
    },
  });
  const component12 = await dbClient.component.create({
    data: {
      type: 'FULLSTACK',
      name: `Blog, Posts, Comments`,
      desc: 'You might want user comments or interactions. Maybe you publish articles and want to collect comments, likes, reviews or data from readers. ',
    },
  });
  const component13 = await dbClient.component.create({
    data: {
      type: 'BASIC',
      name: `Loading Animations`,
      desc: 'Websites need a little animation so people can tell they are working. A loading spinner is commonly found on buttons that require waiting for a database response.',
    },
  });
  const component14 = await dbClient.component.create({
    data: {
      type: 'FULLSTACK',
      name: `Donations`,
      desc: 'Add payment connections to parts of your page where you can take donations from visitors.',
    },
  });
  const component15 = await dbClient.component.create({
    data: {
      type: 'BASIC',
      name: `Cookies and privacy`,
      desc: 'These bars pop up when you visit a new site and are part of any major project.',
    },
  });
  const component16 = await dbClient.component.create({
    data: {
      type: 'FULLSTACK',
      name: `Search Bar`,
      desc: 'Allow your users to search through larger websites faster.',
    },
  });

  // REVIEWS
  const wervingsReview = await dbClient.review.create({
    data: {
      email: `sales@wervings.com`,
      value: 5,
      url: `www.wervings.co.uk`,
      content:
        'Tom has run our business ecommerce website for years now and has always done splendid work! Very easy to work with.',
      image:
        'https://github.com/webdesignsbytom/webdesignsbytom-app/blob/main/client/src/assets/img/logos/wervings.png?raw=true',
    },
  });
  const rvsReview = await dbClient.review.create({
    data: {
      email: `andy@rapidvansolutions.com`,
      value: 5,
      url: `www.rapidvansolutions.com`,
      content:
        'Thank you for designing and building our website. I understand nothing about the internet and Tom worked with that.',
      image:
        'https://github.com/webdesignsbytom/webdesignsbytom-app/blob/main/client/src/assets/img/logos/RVS-logo.jpg?raw=true',
    },
  });
  const musicReview = await dbClient.review.create({
    data: {
      email: `stu@stuartturnbull.com`,
      value: 5,
      url: `www.stuartturnbull.net`,
      content:
        'A hard working man and a pleasure to work with. Said yes to everything i asked and didnt over complicate the job.',
      image:
        'https://github.com/webdesignsbytom/webdesignsbytom-app/blob/main/client/src/assets/img/logos/turnbull-review.jpeg?raw=true',
    },
  });
  const ecoReview = await dbClient.review.create({
    data: {
      email: `info@myecoapp.org`,
      value: 5,
      url: `www.myecoapp.org`,
      content:
        'Tom built a beautiful site for us and brings most of the ideas about improvements and modernisations.',
      image:
        'https://github.com/webdesignsbytom/webdesignsbytom-app/blob/main/client/src/assets/img/logos/myea-logo.jpg?raw=true',
    },
  });

  // USERS
  const createdUser = await dbClient.user.create({
    data: {
      email: 'maxpower@email.com',
      password,
      isVerified: true,
      firstName: 'Max',
      lastName: 'Power',
      country: 'UK',
      agreedToTerms: true,
    },
  });
  const devUser = await dbClient.user.create({
    data: {
      email: 'dev@dev.com',
      password,
      role: 'DEVELOPER',
      isVerified: true,
      firstName: 'Tom',
      lastName: 'Brockington',
      country: 'UK',
      agreedToTerms: true,
      designs: {
        create: {
          name: 'Best ever',
        }
      }
    },
  });

  const ContactMessage = await dbClient.contact.create({
    data: {
      email: 'tom@gmail.com',
      phone: '0534534534',
      firstName: 'Tommy',
      lastName: 'Place holder message - do not delete',
      country: 'United States',
      message: 'Contact',
    },
  });

  for (let i = 0; i <= 3; i++) {
    const userNote = await dbClient.notification.create({
      data: {
        userId: createdUser.id,
        type: 'MESSAGE',
        content: 'message rest',
      },
    });

    const UserMessage = await dbClient.message.create({
      data: {
        userId: createdUser.id,
        subject: 'TEST',
        content: 'message rest unseen',
        sentFromId: devUser.id,
      },
    });

    const devUserNote = await dbClient.notification.create({
      data: {
        userId: devUser.id,
        type: 'TEST',
        content: `${i} notification new and shiney`,
      },
    });

    const devUserMessage = await dbClient.message.create({
      data: {
        userId: devUser.id,
        subject: 'TEST',
        content: `Ahh i needed to say ${i}`,
        sentFromId: createdUser.id,
      },
    });

    const devUserNoteSeen = await dbClient.notification.create({
      data: {
        userId: devUser.id,
        type: 'TEST',
        content: `${i} Lorem ipsum dolor sit amet old note`,
        viewed: true,
      },
    });
  }

  // EVENTS
  const eventOne = await dbClient.event.create({
    data: {
      type: 'ERROR',
      topic: 'Test event',
      code: 500,
      content: '500 test content',
    },
  });
  const eventTwo = await dbClient.event.create({
    data: {
      type: 'USER',
      topic: 'Test event',
      code: 200,
      content: '200 test content',
    },
  });
  const eventThree = await dbClient.event.create({
    data: {
      type: 'ADMIN',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
  const eventFour = await dbClient.event.create({
    data: {
      type: 'VISITOR',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
  const eventFive = await dbClient.event.create({
    data: {
      type: 'DEVELOPER',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
