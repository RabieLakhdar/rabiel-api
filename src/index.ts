import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const newPost = await prisma.post.create({
        data: {
            title: 'rabiel post',
            content: ' rabiel fullstack js developer'
        },
      })
      console.log('Created new post: ', newPost)
    
      const allPosts = await prisma.post.findMany()
      console.log('All posts: ')
      console.dir(allPosts, { depth: null })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())
