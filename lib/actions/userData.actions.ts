'use server'
import prisma from '@/prisma/prisma'
import { USER_ID } from '@/lib/constants'

export async function getBookmarks() {
  const res = await prisma.bookmark.findMany({
    where: {
      userId: USER_ID
    }
  })

  return res
}
