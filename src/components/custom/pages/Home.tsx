
import React from "react";
// import columnsData from '../../../assets/data/columns.json';
// import tableData from '../../../assets/data/data.json';
// import GenericTable from "../GenericTable";
import SectorList from "../SectorList";
import SectionCard from "../SectionCard";

const Home: React.FC = () => {
    return (
        <main className="flex flex-col w-full">
            <SectionCard title="Quilmes / Cerveceria Quilmes" />
            <section>
                <h2>Sectores</h2>
                <SectorList />
            </section>
        </main>
    );
};

export default Home;
