import { AlertCircle, CheckCircle, Droplet, Wrench } from "lucide-react";
import ColorCard from './ColorCard';

interface SectionCardProps {
    title: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title }) => {
    return (
        <section className="flex flex-col p-2">
            <h2 className="font-bold border-b-2 border-gray-300 pb-2">{title}</h2>
            <div className="flex flex-wrap justify-between p-2 rounded-xl">
                {/* Tarjeta de Incidentes */}
                <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                    <ColorCard
                        bgColor="from-red-300 to-white"
                        fgColor="text-red-700"
                        title="Incidentes"
                        subTitle="Abiertos"
                        Icon={AlertCircle}
                        value1={5}
                        value2={20}
                    />
                </div>
                {/* Tarjeta de Tareas */}
                <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                    <ColorCard
                        bgColor="from-yellow-300 to-white"
                        fgColor="text-yellow-700"
                        title="Tareas"
                        subTitle="Vencidas"
                        Icon={CheckCircle}
                        value1={12}
                        value2={50}
                    />
                </div>
                {/* Tarjeta de Análisis de Aceite */}
                <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                    <ColorCard
                        bgColor="from-green-300 to-white"
                        fgColor="text-green-700"
                        title="Aceite"
                        subTitle="En progreso"
                        Icon={Droplet}
                        value1={8}
                        value2={30}
                    />
                </div>
                {/* Tarjeta de Equipos */}
                <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                    <ColorCard
                        bgColor="from-blue-300 to-white"
                        fgColor="text-blue-700"
                        title="Equipos"
                        subTitle="Componentes"
                        Icon={Wrench}
                        value1={15}
                        value2={40}
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionCard;
