import React, { use } from "react";
import Link from "next/link";
import { FaRegComment, FaRetweet, FaRegHeart, FaShareSquare } from "react-icons/fa";

type TweetCardProps = {
    tweet: {
        id: number,
        userName: string,
        userId: string,
        content: string,
        imageUrl?: string,
        createdAt: string
    }
}

const TweetCard = ({
    tweet
}: TweetCardProps) => {



    return (
        <div className="flex flex-justify bg-white p-4 border-b-1 border-gray-300">
            <div className="flex flex-justify items-start font-bold mb-2 overflow-hidden">
                <Link href="/compose/tweet" className="bg-blue-500 text-white px-4 py-4 rounded-full hover:bg-blue-600 transition">
                    DP
                </Link>
            </div>
            <div className="ml-4 w-8/10">
                <div className="flex gap-x-2 text-lg">
                    <h2 className="font-semibold">{tweet.userName}</h2>
                    <h2 className="text-gray-500">{tweet.userId}</h2>
                </div>
                <p className="text-gray-800">{tweet.content}</p>
                <div className="flex justify-between max-w-md mt-2">
                    <button className="text-gray-500 hover:text-blue-500">
                        <FaRegComment />
                    </button>
                    <button className="text-gray-500 hover:text-green-500">
                        <FaRetweet />
                    </button>
                    <button className="text-gray-500 hover:text-pink-500">
                        <FaRegHeart />
                    </button>
                    <button className="text-gray-500 hover:text-blue-500">
                        <FaShareSquare />
                    </button>
                </div>
            </div>
        </div>
    );
}


export default TweetCard;