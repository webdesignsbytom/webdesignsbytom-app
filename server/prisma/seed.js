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

    const review = await dbClient.review.create({
      data: {
        email: `email${i}@gmail${i}.com`,
        value: 5,
        content: 'Great',
      },
    });

    const complaint = await dbClient.complaint.create({
      data: {
        email: `email${i}@gmail${i}.com`,
        content: 'Crap',
      },
    });
  }

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

  for (let i = 0; i <= 9; i++) {
    const userNote = await dbClient.notification.create({
      data: {
        userId: createdUser.id,
        type: 'MESSAGE',
        content: 'message rest',
      },
    });

    const adminNote = await dbClient.notification.create({
      data: {
        userId: adminUser.id,
        type: 'MESSAGE',
        content: 'message rest',
      },
    });

    const devUserNote = await dbClient.notification.create({
      data: {
        userId: devUser.id,
        type: 'MESSAGE',
        content: 'message rest unseen',
      },
    });

    const devUserNoteSeen = await dbClient.notification.create({
      data: {
        userId: devUser.id,
        type: 'MESSAGE',
        content: 'message rest seen',
        viewed: true
      },
    });

    const devDesigns = await dbClient.design.create({
      data: {
        name: `${i}}`,
        userId: devUser.id,
      }
    })
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
      mainImage:
        'https://www.f-cdn.com/assets/main/en/assets/illustrations/portfolio/browse-portfolios.svg',
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
