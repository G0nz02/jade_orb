import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

// This is how you use Prisma:
// Import the client. Establish a connection. Write your query in a function. Call the function and disconnect when done.
// to read from db, use     prisma.{model}.findMany()       This holds the data so you can console.log() this and read the data for yourself
// to write to db, use      prisma.{model}.create({query info})