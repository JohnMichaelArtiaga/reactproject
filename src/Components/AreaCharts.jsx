'use client'
import { AreaChart,Area,ResponsiveContainer,XAxis,YAxis,CartesianGrid,Tooltip,Legend } from "recharts";

const testdata = [
    { name: 'Day1', mcg: 4000, amt: 2400 },
    { name: 'Day2', mcg: 3000, amt: 2210 },
    { name: 'Day3', mcg: 2000, amt: 2290 },
    { name: 'Day4', mcg: 2780, amt: 2000 },
    { name: 'Day5', mcg: 1890, amt: 2181 },
    { name: 'Day6', mcg: 2390, amt: 2500 },
    { name: 'Day7', mcg: 3490, amt: 2100 },
];

    function AreaCharts () {
        return (
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={500} height={400} margin={{ right:30, bottom:5}} data={testdata}>
                <CartesianGrid strokeDasharray="5 5" />
                <Tooltip content={Customtooltip} />
                <Legend />
                <XAxis dataKey="name" />
                <YAxis />
                <Area type="monotone" dataKey="amt" stroke="#640092ff" strokeWidth={3} fill="#595788ff" stackId={1} />
                <Area type="monotone" dataKey="mcg" stroke="#0b8000ff" strokeWidth={3} fill="#467246ff" stackId={1} />
            </AreaChart>
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
    export default AreaCharts;