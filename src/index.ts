import { PrismaClient } from '@prisma/client'
import * as express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/posts', async (req, res) => {
  const posts = await prisma.post.findMany()
  res.json(posts)
})

app.get(`/post/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  })
  res.json(post)
})

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
