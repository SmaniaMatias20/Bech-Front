import React from "react";
import ColorCard from "../ColorCard";
import columnsData from '../../../assets/data/columns.json';
import tableData from '../../../assets/data/data.json';
import GenericTable from "../GenericTable";

import { AlertCircle, CheckCircle, Droplet, Wrench } from "lucide-react";

const Home: React.FC = () => {
    return (
        <main>
            <section className="flex flex-wrap justify-around gap-6 p-8">
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
            </section>
            <section className="flex flex-col bg-gray-200 p-8 space-y-12">
                {/* Tabla de Incidentes de Lubricación */}
                <div>
                    <GenericTable columns={columnsData.table1} data={tableData.table1} />
                </div>

                {/* Tabla de Tareas de Mantenimiento */}
                <div>
                    <GenericTable columns={columnsData.table2} data={tableData.table2} />
                </div>

                {/* Tabla de Análisis de Aceites */}
                <div>
                    <GenericTable columns={columnsData.table3} data={tableData.table3} />
                </div>
            </section>
        </main>
    );
};

export default Home;
