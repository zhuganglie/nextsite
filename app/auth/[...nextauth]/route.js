import fs from 'fs';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

const usersFilePath = 'data/users.json';

async function authenticateUser(username, password) {
    const usersData = fs.readFileSync(usersFilePath);
    const users = JSON.parse(usersData);

    const user = users.find(user => user.username === username);
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        return match ? user : null;
    }
    return null;
}

export async function POST(request) {
    const { username, password } = await request.json();

    const user = await authenticateUser(username, password);
    if (user) {
        return NextResponse.json({ message: 'Authentication successful', user });
    } else {
        return NextResponse.json({ message: 'Authentication failed' }, { status: 401 });
    }
}
