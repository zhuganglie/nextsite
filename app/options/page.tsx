import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/utils/prisma";
import { compare } from "bcrypt";

export const authOptions: AuthOptions = {
    providers: [
      CredentialsProvider({
        credentials: {
          email: { label: "Email", type: "string" },
          password: { label: "Password", type: "string" }
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
          if (!user || !compare(password, user.password)) {
            throw new Error("Invalid username or password");
          }
          return user;
         
        },
      }),
    ],
  };
  