import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      authorize(credentials, req) {
        /* Perform database operations
        async this.authorize(credentials, req){
          const res = await fetch("/your/endpoint", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers:{"Content-Type":"application/json"}
          })
          const user = await res.json()
       }
       if(resizeBy.ok && user){
        return user
       }
       return null
       */
        if (
          credentials?.email === "admin@example.com" &&
          credentials.password === "admin"
        ) {
          return {
            id: "1",
            email: "admin@example.com",
          };
        }

        return null;
      },
    }),
  ],
};