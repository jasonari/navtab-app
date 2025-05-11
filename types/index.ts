import { z } from 'zod'
import { insertBookmarkSchema } from '@/lib/validators'

export type Bookmark = z.infer<typeof insertBookmarkSchema> & {
  id: string
}
