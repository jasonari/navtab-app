import { PrismaClient } from '@prisma/client'
import seedData from './seedData'

async function main() {
  const prisma = new PrismaClient()

  // await prisma.user.deleteMany()
  // await prisma.account.deleteMany()
  // await prisma.bookmark.deleteMany()
  // await prisma.session.deleteMany()
  // await prisma.verificationToken.deleteMany()

  // await prisma.user.createMany({ data: seedData.users })
  // await prisma.bookmark.createMany({ data: seedData.bookmarks })

  console.log('Database seeded successfully')
}

main()
