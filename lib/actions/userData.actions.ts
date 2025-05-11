'use server'
import { PrismaClient } from '@prisma/client'

export async function getBookmarksByUserUid(user_uid: string) {
  const prisma = new PrismaClient()
  const res = await prisma.bookmark.findMany({
    where: {
      userUid: user_uid
    }
  })

  return res
}
