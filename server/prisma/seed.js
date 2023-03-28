import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';

async function seed() {
  const password = await bcrypt.hash('123', 8);

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

    const page = await dbClient.page.create({
      data: {
        type: 'BASIC',
        name: `Page ${i}`,
        desc: 'tom made a page',
        price: 100,
      },
    });

    const component = await dbClient.component.create({
      data: {
        type: 'BASIC',
        name: `Page ${i}`,
        desc: 'tom made a page',
        price: 100,
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

  for (let i = 0; i <= 2; i++) {
    const review = await dbClient.review.create({
      data: {
        email: `email${i}@gmail${i}.com`,
        value: 5,
        url: `www.webdesignsbytom.com`,
        content:
          'Great work building my website and very reasonably priced. Will hire again anytime and recommend to everyone.',
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      },
    });
  }

  const wervingsReview = await dbClient.review.create({
    data: {
      email: `sales@wervings.com`,
      value: 5,
      url: `www.wervings.co.uk`,
      content:
        'Tom has run our business ecommerce website for years now and has always done splendid work! Very easy to work with.',
      image: 'https://instagram.fbrs4-1.fna.fbcdn.net/v/t51.2885-19/71502051_740469529760061_4462238516784398336_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbrs4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=b2fwdLk1VrgAX94GCkr&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAxqY5lDGxvtBg71BV1BhRjCaNc8p1gR1AYBjh1jxoglQ&oe=64280BB2&_nc_sid=8fd12b',
    },
  });

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
      lastName: 'Testing',
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

  const componentOne = await dbClient.component.create({
    data: {
      type: 'BASIC',
      name: 'Contact Form',
      desc: 'Users can fill in details',
      price: 100,
    },
  });

  const pageOne = await dbClient.page.create({
    data: {
      type: 'BASIC',
      name: 'Home Page',
      desc: 'Everyone needs a home page',
      price: 100,
    },
  });

  const pageTwo = await dbClient.page.create({
    data: {
      type: 'ADMIN',
      name: 'Admin Page',
      desc: 'Admin page with panel to manage stats and users',
      price: 100,
    },
  });

  const pageThree = await dbClient.page.create({
    data: {
      type: 'DEVELOPER',
      name: 'Developer Page',
      desc: 'Developer page with panel to manage stats, errors and speeds',
      price: 100,
    },
  });

  const pageFour = await dbClient.page.create({
    data: {
      type: 'SHOP',
      name: 'Store Front',
      desc: 'Display various items from your shop',
      price: 100,
    },
  });
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
