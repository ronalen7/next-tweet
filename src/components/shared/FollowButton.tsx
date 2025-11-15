"use client";

import React from "react";

const FollowButton: React.FC<{ 
    isFollowing: boolean; 
    onClick: () => void }> = ({ isFollowing, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-lg text-white ${isFollowing ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
            {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
    );
}


export default FollowButton;