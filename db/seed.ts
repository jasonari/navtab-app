import { PrismaClient } from '@prisma/client'
import data from './data'

async function main() {
  const prisma = new PrismaClient()
  await prisma.account.deleteMany()
  await prisma.bookmark.deleteMany()
  await prisma.session.deleteMany()
  await prisma.user.deleteMany()
  await prisma.verificationToken.deleteMany()

  await prisma.user.createMany({ data: data.users })

  console.log('Database seeded successfully')
}

main()
