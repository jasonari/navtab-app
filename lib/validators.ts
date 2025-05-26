import { z } from 'zod'

export const insertUserSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters long'),
  password: z.string().min(8, 'Password must be at least 8 characters long')
})

export const insertBookmarkSchema = z.object({
  href: z.string().url('Invalid URL'),
  size: z.number().min(1, 'Size must be greater than 0'),
  title: z.string().min(1, 'Title is required'),
  imgUrl: z.string().url('Invalid image URL'),
  bgColor: z.string().min(1, 'Background color is required')
})

export const signInFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long')
})
