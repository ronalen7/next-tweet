import Sidebar from "@/components/layout/Sidebar";
import WidgetsPanel from "@/components/layout/WidgetsPanel";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-center max-w-7xl mx-auto min-h-screen">
            <aside className="hidden md:flex md:w-1/4 border-r border-gray-800 p-4">
                <Sidebar />
            </aside>

            <main className="flex-1 border-r border-gray-800">
                {children}
            </main>

            <aside className="hidden lg:block lg:w-1/4 p-4">
                <WidgetsPanel />
            </aside>
        </div>
    );
};


export default MainLayout;