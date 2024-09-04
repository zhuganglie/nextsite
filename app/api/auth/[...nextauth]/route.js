import NextAuth from "next-auth";                         
import CredentialsProvider from "next-auth/providers/credentials";                        
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const res = await fetch('http://localhost:3000/auth/login', { // Adjust the URL as needed
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: credentials.username, password: credentials.password })
                });
                const user = await res.json();

                if (res.ok && user.token) {
                    return { id: user.user.id, name: user.user.username, token: user.token };
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
                token.token = user.token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.token = token.token;
            return session;
        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
