import React from "react";
import TweetCard from "@/components/tweet/TweetCard";

type Tweet = {
    id: number,
    userName: string,
    userId: string,
    content: string,
    imageUrl: string,
    createdAt: string
}

type TweetFeedProps = {
    tweets: Tweet[];
}

const TweetFeed = ({
    tweets
}:TweetFeedProps
) => {
    return (
        <div className="flex flex-col">
            {tweets.length === 0 ? (
            <p className="text-gray-500">No tweets available.</p>
            ) : (
                tweets.map((tweet) => (
                    <TweetCard key={tweet.id} tweet={tweet} />
                ))
            )
        }
        </div>
    );
}


export default TweetFeed;