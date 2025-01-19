import React from 'react';
import SectorCard from './SectorCard';

const sectors = [
    { title: 'Línea 4', time: 31, tasks: 44, alerts: 0 },
    { title: 'Línea 1', time: 0, tasks: 0, alerts: 0 },
    { title: 'Línea 2', time: 0, tasks: 0, alerts: 0 },
    { title: 'Línea 3', time: 0, tasks: 0, alerts: 0 },
    { title: 'Línea 5', time: 0, tasks: 0, alerts: 0 },
];

const SectorList: React.FC = () => {
    return (
        <div className="p-4 border-2 border-gray-300 rounded-xl">
            <div className="flex gap-4 overflow-x-auto">
                {sectors.map((sector, index) => (
                    <SectorCard
                        key={index}
                        title={sector.title}
                        time={sector.time}
                        tasks={sector.tasks}
                        alerts={sector.alerts}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectorList;
