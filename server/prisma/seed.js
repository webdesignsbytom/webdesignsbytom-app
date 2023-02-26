import bcrypt from 'bcrypt'
import dbClient from '../src/utils/dbClient.js';

async function seed() {
  const password = await bcrypt.hash('123', 8)

  const createdUser = await dbClient.user.create({
    data: {
      email: 'maxpower@email.com',
      password,
    },
  });

  const adminUser = await dbClient.user.create({
    data: {
      email: 'admin@admin.com',
      password,
      role: 'ADMIN',
    }
  })
}

seed().catch(async (error) => {
  console.error(error)
  await dbClient.$disconnect()
  process.exit(1)
})
