import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import * as firestoreFunctions  from "firebase/firestore"
import db from "../../../firebase";
export const authOptions = {

    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET,
        }),
      ],
      adapter: FirestoreAdapter({
            db: db,
            ...firestoreFunctions,
        }),
}

export default NextAuth(authOptions)