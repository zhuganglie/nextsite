import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/utils/prisma";
import { compare } from "bcrypt";

export const authOptions = {
    providers: [
      CredentialsProvider({
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          const { email, password } = credentials ?? {}
          if (!email || !password) {
            throw new Error("Missing username or password");
          }
          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });
          // if user doesn't exist or password doesn't match
          type user = {
            name: string;
            password: string;
          };
         if (!user || !compare(password, user.password)) {
            throw new Error("Invalid username or password");
          }
          return user;
         
        },
      }),
    ],
  };
  