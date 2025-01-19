
import React from "react";
// import columnsData from '../../../assets/data/columns.json';
// import tableData from '../../../assets/data/data.json';
// import GenericTable from "../GenericTable";
import SectorsSection from "../SectorsSection";
import CardSection from "../CardColorSection";

const Home: React.FC = () => {
    return (
        <main className="flex flex-col w-full">
            <CardSection title="Quilmes / Cerveceria Quilmes" />
            <SectorsSection title="Sectores" />

        </main>
    );
};

export default Home;
