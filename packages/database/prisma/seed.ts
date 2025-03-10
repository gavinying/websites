import { PrismaClient } from '../generated/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.page.deleteMany({});

  // Create sample pages
  await prisma.page.createMany({
    data: [
      { name: 'Home' },
      { name: 'About' },
      { name: 'Contact' },
      { name: 'Blog' },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
