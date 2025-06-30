import { prisma } from "./prisma/client";

async function main() {
  console.log("Seeding products...");
  await prisma.product.createMany({
    data: [
      {
        description: "A pizza with cheese and tomato",
        imageUrl: "https://via.placeholder.com/150",
        name: "Pizza",
        price: 100,
      },
    ],
  });

  console.log("Products seeded");
}

main();
