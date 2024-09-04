import { getToken } from "next-auth/jwt";
import { NextResponse } from 'next/server';

const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret

export async function middleware(req) {
    const token = await getToken({ req });
    
    if (!token) {
        return new Response("Unauthorized", { status: 401 });
    }
    
    try {
        jwt.verify(token.token, JWT_SECRET);
    } catch (error) {
        return new Response("Unauthorized", { status: 401 });
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/app/ai/:path*'], // Protect the /app/ai route
};
