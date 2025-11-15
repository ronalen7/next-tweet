"use client";

import React from "react";
import FollowItem from "@/components/layout/FollowItem";
import FollowButton from "@/components/shared/FollowButton";



const FollowList = () => {

    const suggestions = [
        { name: "React 18 Release", href: "dummy" },
        { name: "Next.js 13 Features", href: "dummy" },
        { name: "JavaScript Tips", href: "dummy" }
    ];

    return (
        <div className="flex flex-col w-full bg-gray-300 p-2 rounded-lg">
            <h1 className="text-xl font-bold my-4">You might like</h1>
            <ul className="space-y-2">
                {suggestions.map((suggestedUser) => (
                    <li key={suggestedUser.name} className="flex items-center">
                        <div className="text-black hover:text-blue-500 flex items-center justify-between w-full">
                            <FollowItem 
                            name={suggestedUser.name}
                            href={suggestedUser.href}/>
                            <FollowButton
                                isFollowing={false}
                                onClick={() => {
                                    // handle follow button click here
                                    console.log(`Follow clicked for ${suggestedUser.name}`);
                                }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default FollowList;