import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import credentialsConfig from "./credentials-config";
import googleConfig from "./google-config";
import clientPromise from "./mongo-client";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise) as Adapter,
  providers: [Credentials(credentialsConfig), Google(googleConfig)],
  callbacks: {
    async signIn({ user }) {
      console.log({ user });
      //   const db = (await clientPromise).db("eco-friendly");
      //   const users = db.collection("users");
      //   users.insertOne(user);
      return true;
    },
  },
};
