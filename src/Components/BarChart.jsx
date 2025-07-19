'use client'
import { BarChart,Bar,ResponsiveContainer,XAxis,YAxis,CartesianGrid,Tooltip,Legend } from "recharts";

const testdata = [
    { name: 'Day1', mcg: 4000, amt: 2400 },
    { name: 'Day2', mcg: 3000, amt: 2210 },
    { name: 'Day3', mcg: 2000, amt: 2290 },
    { name: 'Day4', mcg: 2780, amt: 2000 },
    { name: 'Day5', mcg: 1890, amt: 2181 },
    { name: 'Day6', mcg: 2390, amt: 2500 },
    { name: 'Day7', mcg: 3490, amt: 2100 },
];

    function BarCharts () {
        return (
            <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={400} margin={{ right:30, bottom:5}} data={testdata}>
                <CartesianGrid strokeDasharray="5 5" />
                <Tooltip content={Customtooltip} />
                <Legend />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar type="monotone" dataKey="amt" fill="#595788ff" />
                <Bar type="monotone" dataKey="mcg" fill="#467246ff" />
            </BarChart>
            </ResponsiveContainer>
                
        );
    }
const Customtooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-900 bg-slate-800 p-4 flex flex-col gap-2 rounded-lg">
                <p className="font-medium text-lg text-white-800">{label}</p>
                <p className="font-medium text-green-700">
                    mcg:
                    <span className="ml-2">${payload[0].value}</span>
                </p>
                <p className="font-medium text-violet-700">
                    amt:
                    <span className="ml-2">${payload[1].value}</span>
                </p>
            </div>
        );
    }}
    export default BarCharts;