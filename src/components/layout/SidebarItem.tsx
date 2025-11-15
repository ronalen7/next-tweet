import React from "react";
import { IconType } from "react-icons/lib";
import Link from "next/link";

export type SidebarItemProps = React.SVGProps<SVGSVGElement> & {
    itemName: string;
    itemHref: string;
    itemIcon: IconType;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
    itemName,
    itemHref,
    itemIcon: Icon,
}) => {
    return (
        <div>
            <Link
              href={itemHref}
              className="block hover:bg-gray-800 hover:text-white p-2 rounded-lg"
            >
            <Icon className="inline-block mr-2"></Icon>
            {itemName}
            </Link>
        </div>
    );
}

export default SidebarItem;