import React from 'react';
import { Clock, CheckSquare, AlertTriangle } from 'lucide-react';

interface CardSectorProps {
    title: string;
    time: number;
    tasks: number;
    alerts: number;
}

const CardSector: React.FC<CardSectorProps> = ({ title, time, tasks, alerts }) => {
    return (
        <div className="w-full h-24 flex flex-col justify-center gap-4 bg-white rounded-xl shadow-sm p-2 border-2 border-gray-300">
            {/* Título */}
            <h3 className="text-sm text-left font-medium text-gray-700">{title}</h3>

            {/* Información */}
            <div className="flex w-full gap-2 text-gray-500 text-xs">
                <div className="flex items-center">
                    <Clock size={16} />
                    <span className="ml-1">{time}</span>
                </div>
                <div className="flex items-center">
                    <CheckSquare size={16} />
                    <span className="ml-1">{tasks}</span>
                </div>
                <div className="flex items-center">
                    <AlertTriangle size={16} />
                    <span className="ml-1">{alerts}</span>
                </div>
            </div>
        </div>
    );
};

export default CardSector;
