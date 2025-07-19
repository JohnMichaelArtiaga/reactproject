import AreaCharts from './Components/AreaCharts.jsx';
import BarCharts from './Components/BarChart.jsx';
import PieCharts from './Components/PieChart.jsx';
function Charts2(){
    return (
        <div class= "grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 ">
            <div class = "flex flex-col items-center justify-center p-4 border mt-20 border-slate-900 bg-slate-900/50 rounded-xl h-[500px] font-sans text-lg font-semibold ">Area Chart
            <AreaCharts/>
            </div>
            <div class = "flex flex-col items-center justify-center p-4 border mt-20 border-slate-900 bg-slate-900/50 rounded-xl h-[500px] font-sans text-lg font-semibold ">Bar Chart
            <BarCharts/>
            </div>
            <div class = "flex flex-col items-center justify-center p-4 border mt-20 border-slate-900 bg-slate-900/50 rounded-xl h-[500px] font-sans text-lg font-semibold ">Pie Chart
            <PieCharts/>
            </div>
         </div>
    );
}
export default Charts2;