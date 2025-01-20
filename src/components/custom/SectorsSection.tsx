import React from 'react';
import CardSector from './CardSector';
import sectors from '../../assets/data/sectors.json';
import { Button } from '../ui/button';

interface SectorsSectionProps {
    title: string;
}

const SectorsSection: React.FC<SectorsSectionProps> = ({ title }) => {
    return (
        <section className="flex flex-col p-4 gap-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl text-gray-500">{title}</h2>
                <Button className="bg-sky-800 hover:bg-sky-900 text-white rounded-xl">
                    Explorar sectores
                </Button>
            </div>

            <div className="flex bg-white border-2 border-gray-200 rounded-xl p-4 gap-4 overflow-x-auto md:flex-row flex-col">
                {sectors.map((sector, index) => (
                    <CardSector
                        key={index}
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
