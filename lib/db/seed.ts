import { prisma } from "./prisma/prisma";

async function main() {
  console.log("seeding product categories...");
  const categories = await prisma.productCategory.createManyAndReturn({
    data: [
      {
        name: "Combos",
      },
      {
        name: "Special offers",
      },
      {
        name: "4pc Boneless Wings",
      },
      {
        name: "Fries & Tots",
      },
      {
        name: "Sauces",
      },
    ],
  });

  const combosId = categories.find(
    (category) => category.name === "Combos",
  )?.id;
  const specialOffersId = categories.find(
    (category) => category.name === "Special offers",
  )?.id;
  //   const fourPcBonelessWingsId = categories.find((category) => category.name === "4pc Boneless Wings")?.id;
  //   const friesAndTotsId = categories.find((category) => category.name === "Fries & Tots")?.id;
  //   const saucesId = categories.find((category) => category.name === "Sauces")?.id;

  console.log("Seeding products...");
  await prisma.product.createMany({
    data: [
      {
        categoryId: specialOffersId,
        description:
          "Crispy, golden-fried lollipop wings tossed in your favorite flavor or served naked.",
        imageUrl:
          "https://cdn.outbites.com/p/8c509e9c-7326-4d6b-9838-b0ab6b54b62c.png",
        name: "$1 Wings",
        price: 500,
      },
      {
        categoryId: combosId,
        description:
          "Served with a side of fries or tots. Comes with dipping sauce.",
        imageUrl:
          "https://cdn.outbites.com/p/41440829-022b-4fe5-b6ea-e8e722d95b5e.jpg",
        name: "4pc Tender Combo",
        price: 1675,
      },
      {
        categoryId: combosId,
        description:
          "Served with a side of fries or tots. Comes with dipping sauce.",
        imageUrl:
          "https://cdn.outbites.com/p/41440829-022b-4fe5-b6ea-e8e722d95b5e.jpg",
        name: "5pc Wing Combo",
        price: 1568,
      },
      {
        categoryId: combosId,
        description:
          "Served with a side of fries or tots. Comes with dipping sauce.",
        imageUrl:
          "https://cdn.outbites.com/p/6c2845cb-24f1-44d2-bb36-42d67a034dc2.jpg",
        name: "10pc Wing Combo",
        price: 2565,
      },
      {
        categoryId: combosId,
        description:
          "Comes with 10 x 5pc wings, 5 x 4pc tenders, 7 x sides, and 15 x dipping sauces",
        imageUrl:
          "https://cdn.outbites.com/p/79b09158-b710-4f2e-9434-7f045c228094.jpg",
        name: "Lay Off Me, I'm Starving!",
        price: 19071,
      },
    ],
  });

  console.log("Products seeded");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
