
import { GenericTable } from "../GenericTable"
import data from "../../../assets/data/table.json";

export function TableSection() {


    return (
        <section className="space-y-8">
            <section className="p-4 space-y-8">
                <GenericTable {...data.physicalPropertiesData} />
                <GenericTable {...data.wearMetalsData} />
                <GenericTable {...data.contaminantsData} />
            </section>
        </section>
    )
}

