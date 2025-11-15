import React from "react";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";





const TrendingList = () => {

    const trends = [
        { name: "React 18 Release", href: "/trends/react-18" },
        { name: "Next.js 13 Features", href: "/trends/nextjs-13" },
        { name: "JavaScript Tips", href: "/trends/javascript-tips" }
    ];

    return (
        <div className="flex flex-col w-full bg-gray-300 p-2 rounded-lg">
            <h1 className="text-xl font-bold my-4">Trends for you</h1>
            <ul className="space-y-2">
                {trends.map((trend) => (
                    <li key={trend.name} className="flex items-center">
                        <Link
                            href={trend.href}
                            className="text-black hover:text-blue-500"
                        >
                            {trend.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default TrendingList;