import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

  // Create default user
  const user = await prisma.user.create({
    data: {
      email: "admin@example.com",
      name: "Admin User"
    }
  })

  // Create sample camera device
  const device = await prisma.cameraDevice.create({
    data: {
      name: "Front Camera",
      location: "Vehicle Dashboard",
      status: "active"
    }
  })

  // Create sample incident
  const incident = await prisma.incident.create({
    data: {
      type: "system",
      description: "Initial system test incident"
    }
  })

  console.log("Seed completed")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })