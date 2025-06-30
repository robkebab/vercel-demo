import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { prisma } from "./lib/db/prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

// async function getUser(email: string): Promise<User | null> {
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         email,
//       },
//     });
//     return user;
//   } catch (error) {
//     console.error("Failed to fetch user:", error);
//     throw new Error("Failed to fetch user.");
//   }
// }

export const { auth, signIn, signOut, handlers } = NextAuth({
  adapter: PrismaAdapter(prisma),
  basePath: "/auth",
  providers: [GitHub, Google],
});
