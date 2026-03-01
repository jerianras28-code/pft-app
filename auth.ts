import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db/index";
import { accountsTable, usersTable } from "./db/schema";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: usersTable,
    accountsTable: accountsTable,
  }),
  callbacks: {
    session({ session, token }) {
      session.user.id = token.sub as string;
      return session;
    },
    authorized: async ({ auth }) => {
      // logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
  },
  session: { strategy: "jwt" },
  providers: [Google],
});
