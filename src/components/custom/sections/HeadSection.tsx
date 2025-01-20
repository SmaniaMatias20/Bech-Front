import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface EquipmentData {
    type: string
    description: string
    serialNumber: string
    manufacturer: string
    model: string
}

interface ComponentData {
    type: string
    description: string
    serialNumber: string
    manufacturer: string
    model: string
}

export function HeadSection() {
    const title = "Compresor K53100"
    const status = "No crítico"

    const equipmentData: EquipmentData = {
        type: "Compresor",
        description: "-",
        serialNumber: "K53100",
        manufacturer: "Howden",
        model: "WRV321132",
    }

    const componentData: ComponentData = {
        type: "Compresor de Gas",
        description: "-",
        serialNumber: "-",
        manufacturer: "-",
        model: "-",
    }

    return (
        <section className="p-4">
            <Card className="bg-white rounded-xl shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
                    <div className="flex items-center space-x-4">
                        <CardTitle className="text-xl font-medium text-gray-700">{title}</CardTitle>
                        <div className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg">
                            {status}
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="font-medium text-gray-900">Equipo</h3>
                            <div className="space-y-2">
                                <div className="flex flex-col space-y-1 py-2">
                                    <span className="text-sm text-gray-500">Tipo de equipo</span>
                                    <span className="text-sm">{equipmentData.type || "-"}</span>
                                </div>
                                <div className="flex flex-col space-y-1 py-2">
                                    <span className="text-sm text-gray-500">Descripción</span>
                                    <span className="text-sm">{equipmentData.description || "-"}</span>
                                </div>
                                <div className="flex flex-col space-y-1 py-2">
                                    <span className="text-sm text-gray-500">Número de serie</span>
                                    <span className="text-sm">{equipmentData.serialNumber || "-"}</span>
                                </div>
                                <div className="flex flex-col space-y-1 py-2">
                                    <span className="text-sm text-gray-500">Fabricante</span>
                                    <span className="text-sm">{equipmentData.manufacturer || "-"}</span>
                                </div>
                                <div className="flex flex-col space-y-1 py-2">
                                    <span className="text-sm text-gray-500">Modelo</span>
                                    <span className="text-sm">{equipmentData.model || "-"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-medium text-gray-900">Componente</h3>
                            <div className="space-y-2">
                                <div className="flex flex-col space-y-1 py-2">
                                    <span className="text-sm text-gray-500">Tipo de componente</span>
                                    <span className="text-sm">{componentData.type || "-"}</span>
                                </div>
                                <div className="flex flex-col space-y-1 py-2">
                                    <span className="text-sm text-gray-500">Descripción</span>
                                    <span className="text-sm">{componentData.description || "-"}</span>
                                </div>
                                <div className="flex flex-col space-y-1 py-2">
                                    <span className="text-sm text-gray-500">Número de serie</span>
                                    <span className="text-sm">{componentData.serialNumber || "-"}</span>
                                </div>
                                <div className="flex flex-col space-y-1 py-2">
                                    <span className="text-sm text-gray-500">Fabricante</span>
                                    <span className="text-sm">{componentData.manufacturer || "-"}</span>
                                </div>
                                <div className="flex flex-col space-y-1 py-2">
                                    <span className="text-sm text-gray-500">Modelo</span>
                                    <span className="text-sm">{componentData.model || "-"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
