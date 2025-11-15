"use client";

import React from "react";
import Link from "next/link";

export type FollowItemProps = {
    name: string;
    href: string;
};


const FollowItem = ({
    name,
    href
}: FollowItemProps) => {

    return (
        <div className="flex flex-col w-full bg-gray-300 p-2 rounded-lg">
            <Link href={href}>
                {name}
            </Link>
        </div>
    );
}


export default FollowItem;