import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { prisma } from "./lib/db/prisma/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { mergeCarts } from "@/lib/service/bag";

export const { auth, signIn, signOut, handlers } = NextAuth({
  adapter: PrismaAdapter(prisma),
  basePath: "/auth",
  providers: [GitHub, Google],
  events: {
    async signIn({ user }) {
      if (user.id) {
        return mergeCarts(user.id);
      }
    },
  },
});
