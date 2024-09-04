import NextAuth from "next-auth";                         
import CredentialsProvider from "next-auth/providers/credentials";                        
                                                           
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Replace this with your own logic to find the user
                const user = { id: 1, name: "User", email: "user@example.com" };
                
                if (credentials.username === "user" && credentials.password === "password") {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',  // Custom sign-in page
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            return session;
        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
