import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { users } from "@/lib/mock-data";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
          return true;
        }
        // This is a new user, but we need their details.
        // The pages.newUser option will redirect them to /signup
        return true;
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
        // If the user is new, they will be redirected to the newUser page.
        // We need to allow this redirect.
        if (url.startsWith(baseUrl + "/signup")) {
            return url;
        }
        // If login is successful, redirect to profile
        if (url === baseUrl) {
            return baseUrl + "/profile";
        }
        return baseUrl;
    },
    async session({ session, token }) {
      // Add custom properties to session
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
        if (user) {
            const existingUser = users.find(dbUser => dbUser.email === user.email);
            if (existingUser) {
                token.id = existingUser.id;
                token.role = existingUser.role;
            } else if (isNewUser) {
                // For new users, we don't have role or id yet.
                // This will be added after they sign up.
                token.isNewUser = true;
            }
        }
        return token;
    },
  },
  pages: {
    signIn: "/login",
    newUser: "/signup", // New users will be directed here
  },
};

export default NextAuth(authOptions);
