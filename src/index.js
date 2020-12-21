import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const newUser = await prisma.post.create({
        data: {
            title: 'rabiel post',
            content: ' rabiel fullstack js developer'
        },
      })
      console.log('Created new user: ', newUser)
    
      const allUsers = await prisma.user.findMany({
        include: { posts: true },
      })
      console.log('All users: ')
      console.dir(allUsers, { depth: null })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.disconnect())
