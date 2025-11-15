"use client";

import React, { useState, useEffect } from "react";
import TweetFeed from "@/components/tweet/TweetFeed";


const Home = () => {

  const [tweets, setTweets] = useState<any[]>([]);

  useEffect(() => {
    // Fetch tweets from the Tweet Table
    const fetchTweets = async () => {
      try {
        const response = await fetch('/api/tweets');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        console.log('Fetched tweets:', data);

        const formattedTweets = data.map((tweet: any) => ({
          id: tweet.id,
          userName: tweet.author.name,
          userId: `@${tweet.author.username}`,
          content: tweet.content,
          imageUrl: tweet.image,
          createdAt: tweet.createdAt
        }));

        setTweets(formattedTweets);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <div>
      <TweetFeed tweets={tweets} />
    </div>
  );
};


export default Home;