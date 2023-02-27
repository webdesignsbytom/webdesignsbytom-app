import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';

async function seed() {
  const password = await bcrypt.hash('123', 8);

  const createdUser = await dbClient.user.create({
    data: {
      email: 'maxpower@email.com',
      password,
      isVerified: true,
      firstName: 'Max',
      lastName: 'Power',
      country: 'UK',
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
    },
  });

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
        price: 100
    },
  });
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
