import React from "react";
import Searchbar from "@/components/search/Searchbar";
import TrendingList from "@/components/layout/TrendingList";
import FollowList from "@/components/layout/FollowList";


const WidgetsPanel = () => {
  return (
    // <div className="bg-white p-4 rounded-lg shadow-lg">
    <div className="flex items-center items-start flex-col space-y-4">
        <Searchbar />
        <TrendingList />
        <FollowList />
    </div>
  );
}


export default WidgetsPanel;