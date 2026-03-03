import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed process...')

  const user = await prisma.user.upsert({
    where: { id: 'founder-001' },
    update: {},
    create: {
      id: 'founder-001',
      email: 'founder@kinseso.com',
      name: 'Kinseso Founder',
    },
  })

  console.log(`✅ Success! Created user: ${user.email}`)
  console.log('✨ Seed finished successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })