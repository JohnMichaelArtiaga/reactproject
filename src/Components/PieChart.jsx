'use client'
import { PieChart,Pie,ResponsiveContainer,Tooltip,Legend,Cell} from "recharts";

const testdata = [
    { name: 'Day1', mcg: 4000},
    { name: 'Day2', mcg: 3000},
    { name: 'Day3', mcg: 2000},
    { name: 'Day4', mcg: 2780},
    { name: 'Day5', mcg: 1890},
    { name: 'Day6', mcg: 2390},
    { name: 'Day7', mcg: 3490},
];

const colors = ['#9c0000ff', '#9c9a00ff', '#096900ff', '#00127aff', '#770081ff', '#720046ff', '#925f00ff'];
    function PieCharts () {
        return (
            <ResponsiveContainer width="100%" height="100%">
            <PieChart width={500} height={400}  data={testdata}>
                <Tooltip content={Customtooltip}/>
                <Legend />
                <Pie type="monotone" dataKey="mcg" stroke="#ffffffff"> 
                    {testdata.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors [index]} />
                    ))}
                </Pie>
            </PieChart>
            </ResponsiveContainer>
                
        );
    }
const Customtooltip = ({ active, payload}) => {
    if (active && payload && payload.length) {
        return (
            <div className="Custontooltip bg-gray-900 bg-slate-800 p-4 flex flex-col gap-2 rounded-lg">
                <p className="label font-medium text-lg text-white-800"></p>
                <p className="font-medium text-colors">
                    {payload[0].name}
                    <span className="ml-2">${payload[0].value}</span>
                </p>
            </div>
        );
    }}
    export default PieCharts;