import React from 'react';
import CardSector from './CardSector';
import sectors from '../../assets/data/sectors.json';

interface SectorsSectionProps {
    title: string;
}

const SectorsSection: React.FC<SectorsSectionProps> = ({ title }) => {
    return (
        <section className="">
            <h2>{title}</h2>
            <div className="flex border-2 border-gray-300 rounded-xl p-4 gap-4 overflow-x-auto">
                {sectors.map((sector) => (
                    <CardSector
                        title={sector.title}
                        time={sector.time}
                        tasks={sector.tasks}
                        alerts={sector.alerts}
                    />
                ))}
            </div>
        </section>
    );
};

export default SectorsSection;
