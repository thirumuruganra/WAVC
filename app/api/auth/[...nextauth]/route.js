import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { users } from "@/lib/mock-data";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {  
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          //hd: "ssn.edu.in",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const existingUser = users.find(
          (dbUser) => dbUser.email === user.email
        );
        if (existingUser) {
          user.id = existingUser.id;
          user.role = existingUser.role;
        } else {
          user.isNewUser = true;
        }
      }
      return true;
    },
    async redirect({ url, baseUrl, token }) {
      if (token?.isNewUser) {
        return `${baseUrl}/dataform`;
      }
      if(url.startsWith(baseUrl)){
        return `${baseUrl}/profile`;
      }
      return url;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        const existingUser = users.find(
          (dbUser) => dbUser.email === user.email
        );
        if (existingUser) {
          token.id = existingUser.id;
          token.role = existingUser.role;
        } else {
          token.isNewUser = true;
        }
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
