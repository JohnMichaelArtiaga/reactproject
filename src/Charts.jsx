export default function Charts() {
  return (
    
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
        <GridItem title="Area Chart"></GridItem>

        <GridItem title="Bar Chart"></GridItem>

        <GridItem title="Line Chart"></GridItem>
      </div>
    
  );
}
function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}