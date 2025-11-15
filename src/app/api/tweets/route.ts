import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// const prisma = new PrismaClient();

export async function GET() {
    try {
        const tweets = await prisma.tweet.findMany({
            orderBy: {
                createdAt: "desc"
            },
            include: {
                author: true
            }
        });
        return NextResponse.json(tweets, { status: 200 });
    } catch (error) {
        console.error("Error fetching tweets:", error);
        return NextResponse.json({ error: "Failed to fetch tweets" }, { status: 500 });
    }

}
