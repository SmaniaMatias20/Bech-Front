import React from 'react';
import { Textarea } from "../ui/textarea";

interface InfoSectionProps {
    title: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title }) => {
    return (
        <section className="flex flex-col p-4 gap-4">
            <div className='flex justify-between items-center'>
                <h2 className='text-xl text-gray-500'>{title}</h2>
            </div>
            <div className="flex flex-col bg-white border-2 border-gray-200 rounded-xl p-4 gap-4 overflow-x-auto">
                <h3 className='text-gray-500 text-sm'>Descripcion</h3>
                <Textarea className='rounded-xl border-2 border-gray-100' />
            </div>
        </section>
    );
};

export default InfoSection;
