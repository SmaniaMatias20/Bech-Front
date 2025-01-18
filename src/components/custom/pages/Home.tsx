import React from "react";
import GenericCard from "../GenericCard";
import { AlertTriangle, CheckCircle, Droplet, Wrench } from "lucide-react"; // Íconos válidos de lucide-react

const Home: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
            {/* Tarjeta de Incidentes */}
            <GenericCard
                bgColor="from-red-300 via-white to-white"
                fgColor="text-red-500"
                title="Incidentes"
                Icon={AlertTriangle}
                value1={5}
                value2={20}
            />
            {/* Tarjeta de Tareas */}
            <GenericCard
                bgColor="from-yellow-300 via-white to-white"
                fgColor="text-yellow-500"
                title="Tareas"
                Icon={CheckCircle}
                value1={12}
                value2={50}
            />
            {/* Tarjeta de Análisis de Aceite */}
            <GenericCard
                bgColor="from-green-300 via-white to-white"
                fgColor="text-green-500"
                title="Análisis de Aceite"
                Icon={Droplet}
                value1={8}
                value2={30}
            />
            {/* Tarjeta de Equipos */}
            <GenericCard
                bgColor="from-blue-300 via-white to-white"
                fgColor="text-blue-500"
                title="Equipos"
                Icon={Wrench}
                value1={15}
                value2={40}
            />
        </div>
    );
};

export default Home;
