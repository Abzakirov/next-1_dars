import Sidebar from "./components/Sidebar";
import SwiperBanner from "./components/Baner";
import Products from "./components/Cards";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="hidden md:block w-64 h-screen sticky top-0 overflow-y-auto">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-x-hidden">
        <div className="max-w-7xl mx-auto p-4 md:p-6">
          <div className="mb-6">
            <SwiperBanner />
          </div>
          
          {/* Products section */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
          <Products/>
          </div>
        </div>
      </div>
    </div>
  );
}