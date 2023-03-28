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
    }
  })

  for (let i = 0; i <= 9; i++) {
    const user = await dbClient.user.create({
      data: {
        email: `email${i}@gmail${i}.com`,
        password,
        isVerified: true,
        firstName: `Max${i}`,
        lastName: 'Power',
        country: 'UK',
        agreedToTerms: true,
      },
    });

    const complaint = await dbClient.complaint.create({
      data: {
        email: `email${i}@gmail${i}.com`,
        content: 'Crap',
      },
    });

    const project = await dbClient.project.create({
      data: {
        type: 'TEST',
        domainName: `www.${i}.com`,
        ownerName: `${user.firstName} ${user.lastName}`,
        name: 'New fun',
        userId: user.id,
        price: 1000,
      },
    });
  }

  // PAGES
  const page1 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `Home`,
      desc: 'Home page, index page, splash page. Make your mark with a visually interesting display.',
    },
  })
  const page2 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `About`,
      desc: 'About page. A short description of you or your business. Call to action buttons to tak users where they need to go.',
    },
  })
  const page3 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `Contact`,
      desc: 'Contact pages will consist of a form, but is better to include media links, email, phone and other communication methods. Google maps API for exact location displayed.',
    },
  })
  const page4 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `Gallery`,
      desc: 'A display page to show off something you are pleased to display. This might be products or places.',
    },
  })
  const page5 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `FAQ`,
      desc: 'Easily answered questions to save you time responding. A staple of most websites.',
    },
  })
  const page6 = await dbClient.page.create({
    data: {
      type: 'SHOP',
      name: `Store Front`,
      desc: 'Popular products can be displayed in the store front. Sales or important information can be convayed.',
    },
  })
  const page7 = await dbClient.page.create({
    data: {
      type: 'SHOP',
      name: `Cart`,
      desc: 'Carts need to be eligant and users can easily update or remove their items.',
    },
  })
  const page8 = await dbClient.page.create({
    data: {
      type: 'SHOP',
      name: `Thank You`,
      desc: 'Little pages like this make your app look more professional. They are touches a user is used to seeing.',
    },
  })
  const page9 = await dbClient.page.create({
    data: {
      type: 'BLOG',
      name: `Posts`,
      desc: 'Every blog needs to show it has posts. A smart layout with easy navigation for switching between blog posts is essential.',
    },
  })
  const page10 = await dbClient.page.create({
    data: {
      type: 'BLOG',
      name: `Upload posts`,
      desc: 'As an admin of a website you want a quick and easy page where you can manage all your posts and create new ones.',
    },
  })
  const page11 = await dbClient.page.create({
    data: {
      type: 'ADMIN',
      name: `Admin Overview`,
      desc: 'As an admin you can look over data about your site. User information, admin powers, total views and traffic.',
    },
  })
  const page12 = await dbClient.page.create({
    data: {
      type: 'DEVELOPER',
      name: `Upload posts`,
      desc: 'As an developer on app manager. You will need to collect reports about your website and log and errors for improvements. Websites must be constantly evolving to keep up.',
    },
  })
  const page13 = await dbClient.page.create({
    data: {
      type: 'FULLSTACK',
      name: `Logout`,
      desc: 'Either a serpate page where people can click a log out link. Or reached after signing out as a "Come again soon" page.',
    },
  })

  // COMPONENTS
  const component1 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `Home`,
      desc: 'Home page, index page, splash page. Make your mark with a visually interesting display.',
    },
  })
  const component2 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `About`,
      desc: 'About page. A short description of you or your business. Call to action buttons to tak users where they need to go.',
    },
  })
  const component3 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `Contact`,
      desc: 'Contact pages will consist of a form, but is better to include media links, email, phone and other communication methods. Google maps API for exact location displayed.',
    },
  })
  const component4 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `Gallery`,
      desc: 'A display page to show off something you are pleased to display. This might be products or places.',
    },
  })
  const component5 = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: `FAQ`,
      desc: 'Easily answered questions to save you time responding. A staple of most websites.',
    },
  })
  const component6 = await dbClient.page.create({
    data: {
      type: 'SHOP',
      name: `Store Front`,
      desc: 'Popular products can be displayed in the store front. Sales or important information can be convayed.',
    },
  })
  const component7 = await dbClient.page.create({
    data: {
      type: 'SHOP',
      name: `Cart`,
      desc: 'Carts need to be eligant and users can easily update or remove their items.',
    },
  })
  const component8 = await dbClient.page.create({
    data: {
      type: 'SHOP',
      name: `Thank You`,
      desc: 'Little pages like this make your app look more professional. They are touches a user is used to seeing.',
    },
  })
  const component9 = await dbClient.page.create({
    data: {
      type: 'BLOG',
      name: `Posts`,
      desc: 'Every blog needs to show it has posts. A smart layout with easy navigation for switching between blog posts is essential.',
    },
  })
  const component10 = await dbClient.page.create({
    data: {
      type: 'BLOG',
      name: `Upload posts`,
      desc: 'As an admin of a website you want a quick and easy page where you can manage all your posts and create new ones.',
    },
  })
  const component11 = await dbClient.page.create({
    data: {
      type: 'ADMIN',
      name: `Admin Overview`,
      desc: 'As an admin you can look over data about your site. User information, admin powers, total views and traffic.',
    },
  })
  const component12 = await dbClient.page.create({
    data: {
      type: 'DEVELOPER',
      name: `Upload posts`,
      desc: 'As an developer on app manager. You will need to collect reports about your website and log and errors for improvements. Websites must be constantly evolving to keep up.',
    },
  })

  // REVIEWS
  const wervingsReview = await dbClient.review.create({
    data: {
      email: `sales@wervings.com`,
      value: 5,
      url: `www.wervings.co.uk`,
      content:
        'Tom has run our business ecommerce website for years now and has always done splendid work! Very easy to work with.',
      image: 'https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/wervings.png?raw=true',
    },
  });
  const rvsReview = await dbClient.review.create({
    data: {
      email: `andy@rapidvansolutions.com`,
      value: 5,
      url: `www.rapidvansolutions.com`,
      content:
        'Thank you for designing and building our website. I understand nothing about the internet and Tom worked with that.',
      image: 'https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/RVS-logo.jpg?raw=true',
    },
  });
  const musicReview = await dbClient.review.create({
    data: {
      email: `stu@stuartturnbull.com`,
      value: 5,
      url: `www.stuartturnbull.net`,
      content:
        'A hard working man and a pleasure to work with. Said yes to everything i asked and didnt over complicate the job.',
      image: 'https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/turnbull-review.jpeg?raw=true',
    },
  });
  const ecoReview = await dbClient.review.create({
    data: {
      email: `info@myecoapp.org`,
      value: 5,
      url: `www.myecoapp.org`,
      content:
        'Tom built a beautiful site for us and brings most of the ideas about improvements and modernisations.',
      image: 'https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/myea-logo.jpg?raw=true',
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
  const adminUser = await dbClient.user.create({
    data: {
      email: 'admin@admin.com',
      password,
      role: 'ADMIN',
      isVerified: true,
      firstName: 'Craig',
      lastName: 'Peloton',
      country: 'USA',
      agreedToTerms: true,
    },
  });
  const adminUserTwo = await dbClient.user.create({
    data: {
      email: 'admin2@admin.com',
      password,
      role: 'ADMIN',
      isVerified: true,
      firstName: 'Raymond',
      lastName: 'Holt',
      country: 'USA',
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
      lastName: 'Hats',
      country: 'UK',
      agreedToTerms: true,
    },
  });

  const devUserTwo = await dbClient.user.create({
    data: {
      email: 'dev2@dev.com',
      password,
      role: 'DEVELOPER',
      isVerified: true,
      firstName: 'Mean',
      lastName: 'Girl',
      country: 'UK',
      agreedToTerms: true,
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

  for (let i = 0; i <= 9; i++) {
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
        sentFromId: adminUser.id,
      },
    });

    const adminNote = await dbClient.notification.create({
      data: {
        userId: adminUser.id,
        type: 'TEST',
        content: 'message rest',
      },
    });

    const adminMessage = await dbClient.message.create({
      data: {
        userId: createdUser.id,
        subject: 'MESSAGE',
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
        sentFromId: adminUser.id,
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
