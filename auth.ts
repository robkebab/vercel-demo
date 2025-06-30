import NextAuth from "next-auth";
// import { User } from "./lib/db/prisma/generated-client";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

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
  basePath: "/auth",
  providers: [GitHub, Google],
});
