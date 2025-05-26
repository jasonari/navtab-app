import { hashSync } from 'bcrypt-ts-edge'

const seedData = {
  users: [
    {
      username: 'JasonAdmin',
      password: hashSync('JasonAdmin', 10),
      email: 'user@example.com',
      role: 'ADMIN'
    }
  ],
  bookmarks: [
    {
      id: 'notion',
      href: 'https://www.notion.so/',
      size: 48,
      title: 'notion',
      imgUrl: '/icon-notion.svg',
      bgColor: '#fff',
      userId: '7c3c4d01-14d2-4657-adcd-0a1cceb79fe7'
    },
    {
      id: 'github',
      href: 'https://github.com/',
      size: 38,
      title: 'github',
      imgUrl: '/icon-github.com.svg',
      bgColor: '#fff',
      userId: '7c3c4d01-14d2-4657-adcd-0a1cceb79fe7'
    },
    {
      id: 'juejin',
      href: 'https://juejin.cn/',
      size: 38,
      title: '掘金',
      imgUrl: '/icon-juejin.cn.svg',
      bgColor: '#fff',
      userId: '7c3c4d01-14d2-4657-adcd-0a1cceb79fe7'
    },
    {
      id: 'bilibili',
      href: 'https://bilibili.com/',
      size: 48,
      title: 'bilibili',
      imgUrl: '/icon-bilibili.svg',
      bgColor: '#fff',
      userId: '7c3c4d01-14d2-4657-adcd-0a1cceb79fe7'
    },
    {
      id: 'agedm',
      href: 'https://www.agedm.org/',
      size: 62,
      title: 'AGE动漫',
      imgUrl: '/icon-agedm.org.ico',
      bgColor: '#fff',
      userId: '7c3c4d01-14d2-4657-adcd-0a1cceb79fe7'
    },
    {
      id: 'aliyun',
      href: 'https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fwww.aliyun.com%2F%3Fspm%3D5176.12901015-2.0.0.21174b84rt9cr6',
      size: 32,
      title: '阿里云控制台',
      imgUrl: '/icon-aliyun.com.ico',
      bgColor: '#fff',
      userId: '7c3c4d01-14d2-4657-adcd-0a1cceb79fe7'
    },
    {
      id: 'baota',
      href: 'http://8.134.202.12:23135/d9f7593b',
      size: 32,
      title: '宝塔面板',
      imgUrl: '/icon-bt.cn.ico',
      bgColor: '#fff',
      userId: '7c3c4d01-14d2-4657-adcd-0a1cceb79fe7'
    },
    {
      id: 'perplexity',
      href: 'https://www.perplexity.ai/',
      size: 38,
      title: 'Perplexity',
      imgUrl: '/icon-perplexity.svg',
      bgColor: '#fff',
      userId: '7c3c4d01-14d2-4657-adcd-0a1cceb79fe7'
    },
    {
      id: 'tongyi',
      href: 'https://tongyi.aliyun.com/qianwen/',
      size: 38,
      title: '通义千问',
      imgUrl: '/icon-tongyi.png',
      bgColor: '#fff',
      userId: '7c3c4d01-14d2-4657-adcd-0a1cceb79fe7'
    },
    {
      id: 'chatgpt',
      href: 'https://chatgpt.com/?oai-dm=1',
      size: 42,
      title: 'ChatGPT',
      imgUrl: '/icon-chatgpt.svg',
      bgColor: '#fff',
      userId: '7c3c4d01-14d2-4657-adcd-0a1cceb79fe7'
    }
  ]
}

export default seedData
