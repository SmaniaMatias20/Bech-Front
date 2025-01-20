import React from "react";
import { InfoSection } from "../sections/InfoSection";
import { HeadSection } from "../sections/HeadSection";
import { TableSection } from "../sections/TableSection";


const Home: React.FC = () => {
    return (
        <main className="flex flex-col w-full bg-gray-100">
            <HeadSection />
            <InfoSection />
            <TableSection />
        </main>
    );
};

export default Home;