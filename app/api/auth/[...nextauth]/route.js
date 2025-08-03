import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/lib/firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        const userRef = doc(db, "users", user.id);
        const userSnap = await getDoc(userRef);
        if (!userSnap.exists()) {
          await setDoc(userRef, {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image || null,
            onboardingComplete: false,
          });
        }
      }
      return true;
    },
    async session({ session, token }) {
      const userRef = doc(db, "users", token.sub);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();

      session.user.id = token.sub;
      session.user.onboardingComplete = userData?.onboardingComplete || false;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
