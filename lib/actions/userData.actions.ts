'use server'
import prisma from '@/db/prisma'

export async function getBookmarksByUserUid(user_uid: string) {
  const res = await prisma.bookmark.findMany({
    where: {
      userUid: user_uid
    }
  })

  return res
}
