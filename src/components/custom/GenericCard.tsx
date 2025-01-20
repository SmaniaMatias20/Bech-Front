import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

interface GenericCardProps {
    title: string
    value: string | number
}

export function GenericCard({ title, value }: GenericCardProps) {
    return (
        <Card className="bg-white rounded-lg shadow-sm flex flex-col justify-center items-center rounded-xl">
            <CardHeader>
                <CardTitle className="text-sm font-medium text-gray-500 text-center">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
                <p className="text-2xl font-bold text-gray-700">{value}</p>
            </CardContent>
        </Card>
    )
}
