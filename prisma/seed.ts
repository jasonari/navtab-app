import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  await prisma.user.deleteMany()
  await prisma.user.create({
    data: {
      username: 'JasonAdmin',
      password: 'JasonAdmin',
      bookmarks: {
        create: [
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
            id: 'juejin',
            href: 'https://juejin.cn/',
            size: 38,
            title: '掘金',
            imgUrl: '/icon-juejin.cn.svg',
            bgColor: '#fff'
          },
          {
            id: 'bilibili',
            href: 'https://bilibili.com/',
            size: 48,
            title: 'bilibili',
            imgUrl: '/icon-bilibili.svg',
            bgColor: '#fff'
          },
          {
            id: 'agedm',
            href: 'https://www.agedm.org/',
            size: 62,
            title: 'AGE动漫',
            imgUrl: '/icon-agedm.org.ico',
            bgColor: '#fff'
          },
          {
            id: 'aliyun',
            href: 'https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fwww.aliyun.com%2F%3Fspm%3D5176.12901015-2.0.0.21174b84rt9cr6',
            size: 32,
            title: '阿里云控制台',
            imgUrl: '/icon-aliyun.com.ico',
            bgColor: '#fff'
          },
          {
            id: 'baota',
            href: 'http://8.134.202.12:23135/d9f7593b',
            size: 32,
            title: '宝塔面板',
            imgUrl: '/icon-bt.cn.ico',
            bgColor: '#fff'
          },
          {
            id: 'perplexity',
            href: 'https://www.perplexity.ai/',
            size: 38,
            title: 'Perplexity',
            imgUrl: '/icon-perplexity.svg',
            bgColor: '#fff'
          },
          {
            id: 'tongyi',
            href: 'https://tongyi.aliyun.com/qianwen/',
            size: 38,
            title: '通义千问',
            imgUrl: '/icon-tongyi.png',
            bgColor: '#fff'
          },
          {
            id: 'chatgpt',
            href: 'https://chatgpt.com/?oai-dm=1',
            size: 42,
            title: 'ChatGPT',
            imgUrl: '/icon-chatgpt.svg',
            bgColor: '#fff'
          }
        ]
      },
      role: 'ADMIN'
    }
  })

  console.log('Database seeded successfully')
}

main()
