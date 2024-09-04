import { getToken } from "next-auth/jwt";

export async function middleware(req) {
    const token = await getToken({ req });
    
    if (!token) {
        return new Response("Unauthorized", { status: 401 });
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/app/ai/:path*'], // Protect the /app/ai route
};
