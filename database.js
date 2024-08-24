import Database from '@replit/database';

const db = new Database();

export async function getLastRequestTime(userId) {
    return await db.get(userId);
}

export async function setLastRequestTime(userId, currentTime) {
    return await db.set(userId, currentTime);
}
