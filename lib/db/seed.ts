import { prisma } from "./prisma/prisma";

async function main() {
  console.log("seeding product categories...");
  const categories = await prisma.productCategory.createManyAndReturn({
    data: [
      {
        name: "Combos",
      },
      {
        name: "5pc Wings",
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
  const fivePcWingsId = categories.find(
    (category) => category.name === "5pc Wings",
  )?.id;
  const fourPcBonelessWingsId = categories.find(
    (category) => category.name === "4pc Boneless Wings",
  )?.id;
  const friesAndTotsId = categories.find(
    (category) => category.name === "Fries & Tots",
  )?.id;
  const saucesId = categories.find(
    (category) => category.name === "Sauces",
  )?.id;

  const imgRoot = "/images/menu";
  console.log("Seeding products...");
  await prisma.product.createMany({
    data: [
      {
        categoryId: combosId,
        description:
          "Served with a side of fries or tots. Comes with dipping sauce.",
        imageUrl: `${imgRoot}/4-tender-combo.png`,
        name: "4pc Tender Combo",
        price: 1675,
      },
      {
        categoryId: combosId,
        description:
          "Served with a side of fries or tots. Comes with dipping sauce.",
        imageUrl: `${imgRoot}/5-wing-combo.png`,
        name: "5pc Wing Combo",
        price: 1568,
      },
      {
        categoryId: combosId,
        description:
          "Served with a side of fries or tots. Comes with dipping sauce.",
        imageUrl: `${imgRoot}/10-wing-combo.png`,
        name: "10pc Wing Combo",
        price: 2565,
      },
      {
        categoryId: combosId,
        description:
          "Comes with 10 × 5pc wings, 5 × 4pc tenders, 7 × sides, and 15 × dipping sauces.",
        imageUrl: `${imgRoot}/lay-off-me.png`,
        name: "Lay Off Me, I'm Starving!",
        price: 19071,
      },
      {
        categoryId: fivePcWingsId,
        description: "Traditional fried flavor w/ no sauce. Salt & pepper.",
        imageUrl: `${imgRoot}/5-naked.png`,
        name: "Naked - 5pc",
        price: 950,
      },
      // {
      //   categoryId: fivePcWingsId,
      //   description: "Garlic butter and Parmesan cheese.",
      //   imageUrl: `${imgRoot}/5-garlic-parmesan.png`,
      //   name: "Garlic Parmesan - 5pc",
      //   price: 950,
      // },
      {
        categoryId: fivePcWingsId,
        description: "Fresh lemon juice, salt, and pepper.",
        imageUrl: `${imgRoot}/5-lemon-pepper.png`,
        name: "Lemon Pepper - 5pc",
        price: 950,
      },
      // {
      //   categoryId: fivePcWingsId,
      //   description: "Fresh lime juice and Tajín seasoning.",
      //   imageUrl: `${imgRoot}/5-chile-limon.png`,
      //   name: "Chile Limón - 5pc",
      //   price: 950,
      // },
      {
        categoryId: fivePcWingsId,
        description: "Mostly sweet but with a kick 🔥",
        imageUrl: `${imgRoot}/5-sweet-chili.png`,
        name: "Sweet Chili - 5pc",
        price: 950,
      },
      // {
      //   categoryId: fivePcWingsId,
      //   description: "Sriracha based sauce. 50/50 hot and sweet 🔥🔥",
      //   imageUrl: `${imgRoot}/5-og.png`,
      //   name: "OG - 5pc",
      //   price: 950,
      // },
      {
        categoryId: fivePcWingsId,
        description: "Sriracha based sauce with pineapple blended in 🔥🔥🔥",
        imageUrl: `${imgRoot}/5-spicy-pineapple.png`,
        name: "Spicy Pineapple - 5pc",
        price: 950,
      },
      {
        categoryId: fivePcWingsId,
        description: "Dry rub, hot, and salty flavor 🔥🔥🔥🔥🔥",
        imageUrl: `${imgRoot}/5-ranch-on-fire.png`,
        name: "Ranch On Fire - 5pc",
        price: 950,
      },
      {
        categoryId: fivePcWingsId,
        description: "Traditional flavor but on the hot side 🔥🔥🔥🔥🔥",
        imageUrl: `${imgRoot}/5-buffalo.png`,
        name: "Buffalo - 5pc",
        price: 950,
      },
      {
        categoryId: fivePcWingsId,
        description: "Warning: Painfully hot! 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥",
        imageUrl: `${imgRoot}/5-holy-schnikes.png`,
        name: "Holy Schnikes - 5pc",
        price: 950,
      },
      {
        categoryId: fourPcBonelessWingsId,
        description: "Traditional fried flavor w/ no sauce",
        imageUrl: `${imgRoot}/4-naked.png`,
        name: "Naked - 4pc Boneless Wings",
        price: 975,
      },
      // {
      //   categoryId: fourPcBonelessWingsId,
      //   description: "Garlic butter and Parmesan cheese",
      //   imageUrl: `${imgRoot}/4-garlic-parmesan.png`,
      //   name: "Garlic Parmesan - 4pc Boneless Wings",
      //   price: 975,
      // },
      {
        categoryId: fourPcBonelessWingsId,
        description: "Fresh lemon juice, salt, and pepper",
        imageUrl: `${imgRoot}/4-lemon-pepper.png`,
        name: "Lemon Pepper - 4pc Boneless Wings",
        price: 975,
      },
      // {
      //   categoryId: fourPcBonelessWingsId,
      //   description: "Fresh lime juice and Tajín seasoning",
      //   imageUrl: `${imgRoot}/4-chile-limon.png`,
      //   name: "Chile Limón - 4pc Boneless Wings",
      //   price: 975,
      // },
      {
        categoryId: fourPcBonelessWingsId,
        description: "Mostly sweet but with a kick 🔥",
        imageUrl: `${imgRoot}/4-sweet-chili.png`,
        name: "Sweet Chili - 4pc Boneless Wings",
        price: 975,
      },
      // {
      //   categoryId: fourPcBonelessWingsId,
      //   description: "Sriracha based sauce with pineapple blended in 🔥🔥🔥",
      //   imageUrl: `${imgRoot}/4-spicy-pineapple.png`,
      //   name: "Spicy Pineapple - 4pc Boneless Wings",
      //   price: 975,
      // },
      {
        categoryId: fourPcBonelessWingsId,
        description: "Sriracha based sauce. 50/50 hot and sweet 🔥🔥",
        imageUrl: `${imgRoot}/4-og.png`,
        name: "OG - 4pc Boneless Wings",
        price: 975,
      },
      // {
      //   categoryId: fourPcBonelessWingsId,
      //   description: "Dry rub, hot, and salty flavor 🔥🔥🔥🔥🔥",
      //   imageUrl: `${imgRoot}/4-ranch-on-fire.png`,
      //   name: "Ranch On Fire - 4pc Boneless Wings",
      //   price: 975,
      // },
      {
        categoryId: fourPcBonelessWingsId,
        description: "Traditional Flavor but on the hot side 🔥🔥🔥🔥🔥",
        imageUrl: `${imgRoot}/4-buffalo.png`,
        name: "Buffalo - 4pc Boneless Wings",
        price: 975,
      },
      // {
      //   categoryId: fourPcBonelessWingsId,
      //   description: "Warning: Painfully Hot! 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥",
      //   imageUrl: `${imgRoot}/4-holy-schnikes.png`,
      //   name: "Holy Schnikes - 4pc Boneless Wings",
      //   price: 975,
      // },
      {
        categoryId: friesAndTotsId,
        description: "Crispy, Grated and deep-fried potatoes",
        imageUrl: `${imgRoot}/tots.png`,
        name: "Tots",
        price: 775,
      },
      {
        categoryId: friesAndTotsId,
        description: "Seasoned French Fries",
        imageUrl: `${imgRoot}/fries.png`,
        name: "French Fries",
        price: 800,
      },
      {
        categoryId: friesAndTotsId,
        description: "Garlic butter and Parmesan cheese",
        imageUrl: `${imgRoot}/tots.png`,
        name: "Garlic Tots",
        price: 875,
      },
      {
        categoryId: friesAndTotsId,
        description: "Dry rub, hot, and salty flavor 🔥🔥🔥",
        imageUrl: `${imgRoot}/tots.png`,
        name: "Ranch On Fire Tots",
        price: 875,
      },
      {
        categoryId: friesAndTotsId,
        description: "Garlic butter and Parmesan cheese",
        imageUrl: `${imgRoot}/fries.png`,
        name: "Garlic Fries",
        price: 875,
      },
      {
        categoryId: friesAndTotsId,
        description: "Dry rub, hot, and salty flavor 🔥🔥🔥",
        imageUrl: `${imgRoot}/fries.png`,
        name: "Ranch On Fire Fries",
        price: 875,
      },
      {
        categoryId: friesAndTotsId,
        description:
          "Crispy, tangy, thin-cut dill pickles coated in batter & deep fried.",
        imageUrl: `${imgRoot}/pickle-fries.png`,
        name: "Pickle Fries",
        price: 800,
      },
      {
        categoryId: saucesId,
        description:
          "creamy, tangy flavor with prominent notes of buttermilk, garlic, onion, and fresh herbs like dill and parsley",
        imageUrl: `${imgRoot}/ranch.png`,
        name: "Ranch",
        price: 200,
      },
      {
        categoryId: saucesId,
        description: "sharp, tangy, and slightly salty",
        imageUrl: `${imgRoot}/blue-cheese.png`,
        name: "Bleu Cheese",
        price: 200,
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
