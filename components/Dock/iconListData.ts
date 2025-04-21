export type Icon = {
  id: string
  href: string
  size: number
  title: string
  imgUrl: string
  bgColor: string
}

export const iconList: Icon[] = [
  {
    id: 'notion',
    href: 'https://www.notion.so/',
    size: 48,
    title: 'notion',
    imgUrl: '/icon-notion.svg',
    bgColor: '#fff'
  },
  {
    id: 'github',
    href: 'https://github.com/',
    size: 38,
    title: 'github',
    imgUrl: '/icon-github.com.svg',
    bgColor: '#fff'
  },
  {
    id: 'bilibili',
    href: 'https://bilibili.com/',
    size: 48,
    title: 'bilibili',
    imgUrl: '/icon-bilibili.svg',
    bgColor: '#fff'
  }
]
