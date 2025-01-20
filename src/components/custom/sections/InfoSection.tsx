import { GenericCard } from "../GenericCard";
import data from "../../../assets/data/card.json"

export function InfoSection() {


    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {data.map((card, index) => (
                <GenericCard key={index} title={card.title} value={card.value} />
            ))}
        </section>
    );
}
