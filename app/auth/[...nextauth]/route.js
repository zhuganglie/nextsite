import fs from 'fs';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const usersFilePath = 'data/users.json';
const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret

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

function generateToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
}

export async function POST(request) {
    const { username, password } = await request.json();

    const user = await authenticateUser(username, password);
    if (user) {
        const token = generateToken(user);
        return NextResponse.json({ message: 'Authentication successful', user, token });
    } else {
        return NextResponse.json({ message: 'Authentication failed' }, { status: 401 });
    }
}
