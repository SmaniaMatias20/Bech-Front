import { AlertCircle, CheckCircle, Droplet, Wrench } from "lucide-react";
import ColorCard from './ColorCard';

interface SectionCardProps {
    title: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title }) => {
    return (
        <section className="flex flex-col gap-6 p-8">
            <h2>{title}</h2>
            <div className="flex flex-wrap gap-6 justify-between p-4 border-2 border-gray-300 rounded-xl">
                {/* Tarjeta de Incidentes */}
                <ColorCard
                    bgColor="from-red-300 to-white"
                    fgColor="text-red-700"
                    title="Incidentes"
                    subTitle="Abiertos"
                    Icon={AlertCircle}
                    value1={5}
                    value2={20}
                />
                {/* Tarjeta de Tareas */}
                <ColorCard
                    bgColor="from-yellow-300 to-white"
                    fgColor="text-yellow-700"
                    title="Tareas"
                    subTitle="Vencidas"
                    Icon={CheckCircle}
                    value1={12}
                    value2={50}
                />
                {/* Tarjeta de Análisis de Aceite */}
                <ColorCard
                    bgColor="from-green-300 to-white"
                    fgColor="text-green-700"
                    title="Aceite"
                    subTitle="En progreso"
                    Icon={Droplet}
                    value1={8}
                    value2={30}
                />
                {/* Tarjeta de Equipos */}
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
        </section>
    );
};

export default SectionCard;
