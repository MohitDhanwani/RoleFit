import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account, email, credentials, profile }) {
      if (account?.provider === "google") {
        const email = user.email;
        if (!email) {
          return false;
        }
      }
      return true;
    },
  },
});
