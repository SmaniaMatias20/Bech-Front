import { AlertCircle, CheckSquare, Droplet, Wrench } from "lucide-react";
import CardColor from './CardColor';

interface CardColorSectionProps {
    title: string;
}

const CardColorSection: React.FC<CardColorSectionProps> = ({ title }) => {
    return (
        <section className="flex flex-col p-4">
            <h2 className="font-bold border-b-2 border-gray-200 pb-2">{title}</h2>
            <div className="flex flex-wrap justify-between p-2 rounded-xl">
                {/* Tarjeta de Incidentes */}
                <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                    <CardColor
                        bgColor="from-red-300 via-red-100 to-white"
                        fgColor="text-red-700"
                        title="Incidentes"
                        subTitle="Abiertos"
                        Icon={AlertCircle}
                        value1={0}
                        value2={32}
                    />
                </div>
                {/* Tarjeta de Tareas */}
                <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                    <CardColor
                        bgColor="from-yellow-300 via-yellow-100 to-white"
                        fgColor="text-yellow-700"
                        title="Tareas"
                        subTitle="Vencidas"
                        Icon={CheckSquare}
                        value1={44}
                        value2={44}
                    />
                </div>
                {/* Tarjeta de Análisis de Aceite */}
                <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                    <CardColor
                        bgColor="from-green-300 via-green-100 to-white"
                        fgColor="text-green-700"
                        title="Aceite"
                        subTitle="En progreso"
                        Icon={Droplet}
                        value1={1}
                        value2={4}
                    />
                </div>
                {/* Tarjeta de Equipos */}
                <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                    <CardColor
                        bgColor="from-blue-300 via-blue-100 to-white"
                        fgColor="text-blue-700"
                        title="Equipos"
                        subTitle="Componentes"
                        Icon={Wrench}
                        value1={791}
                        value2={236}
                    />
                </div>
            </div>
        </section>
    );
};

export default CardColorSection;
