import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const email = user.email;
        if (!email) {
          return false;
        }
      }
      return true;
    },

    async jwt({ token, account }) {
      if (account?.provider === "google") {
        token.jwt = account.id_token
      }
      return token;
    },

    async session({ session, token }) {
      session.jwt = String(token.jwt);
      return session;
    },
  },
});
