
import React from "react";
// import columnsData from '../../../assets/data/columns.json';
// import tableData from '../../../assets/data/data.json';
// import GenericTable from "../GenericTable";
import SectorsSection from "../SectorsSection";
import CardSection from "../CardColorSection";
import InfoSection from "../InfoSection";

const Home: React.FC = () => {
    return (
        <main className="flex flex-col w-full bg-gray-100">
            <CardSection title="Quilmes / Cerveceria Quilmes" />
            <SectorsSection title="Sectores" />
            <InfoSection title="Info" />

        </main>
    );
};

export default Home;
