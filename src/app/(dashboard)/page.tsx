import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import TodoList from "@/components/AppToDoList";
import CardList from "@/components/CardList";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-136px)] rounded-xl border border-dashed p-6 mb-4">
      <div className="mb-6 pb-4 ">
        <h1 className="text-3xl font-bold tracking-tight ">
          Dashboard
        </h1>
      </div>
      <div className="flex-1 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
          <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
            <AppBarChart />
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Latest Trasactions"/>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <AppPieChart />
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
            <TodoList />
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
            <AppAreaChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;