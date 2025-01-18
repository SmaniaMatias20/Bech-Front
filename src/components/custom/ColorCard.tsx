import React from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
    bgColor: string;
    fgColor: string;
    title: string;
    subTitle: string;
    Icon: LucideIcon;
    value1: number;
    value2: number;
}

const GenericCard: React.FC<CardProps> = ({ bgColor, fgColor, title, subTitle, Icon, value1, value2 }) => {
    return (
        <div
            className={`rounded-lg shadow-md p-6 flex gap-10 items-center bg-gradient-to-r ${bgColor} rounded-xl shadow-2xl`}
        >

            <Icon className={`flex items-center justify-center w-12 h-12 rounded-full shadow-md ${fgColor}`} />

            <div className={`ml-4 flex flex-col justify-center`}>
                <span className="text-lg text-center text-gray-800">{title}</span>
                <div className="flex items-center mt-2">
                    <div className="flex flex-col items-center mr-4">
                        <span className={`text-xs ${fgColor}`}>{subTitle}</span>
                        <span className={`text-sm font-bold ${fgColor}`}>{value1}</span>
                    </div>
                    <span className={`text-4xl font-bold ${fgColor}`}>{value2}</span>
                </div>
            </div>
        </div>
    );
};

export default GenericCard;