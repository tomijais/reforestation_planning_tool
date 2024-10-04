import { montserrat } from '@/app/fonts'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BarChart from '../components/BarChart'
import PieChart from '../components/PieChart'
import AreaChart from '../components/AreaChart'
import LineChart from '../components/LineChart'

// Sample data for the charts
const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 2780 },
  { month: 'May', sales: 1890 },
  { month: 'Jun', sales: 2390 },
]

const temperatureData = [
  { month: 'Jan', temperature: 5 },
  { month: 'Feb', temperature: 7 },
  { month: 'Mar', temperature: 10 },
  { month: 'Apr', temperature: 14 },
  { month: 'May', temperature: 18 },
  { month: 'Jun', temperature: 22 },
]

const marketShareData = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 300 },
  { name: 'Product D', value: 200 },
]

const websiteTrafficData = [
  { month: 'Jan', visitors: 4000, pageViews: 2400 },
  { month: 'Feb', visitors: 3000, pageViews: 1398 },
  { month: 'Mar', visitors: 2000, pageViews: 9800 },
  { month: 'Apr', visitors: 2780, pageViews: 3908 },
  { month: 'May', visitors: 1890, pageViews: 4800 },
  { month: 'Jun', visitors: 2390, pageViews: 3800 },
]

export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen ${montserrat.className}`}>
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Data Visualization Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Monthly Sales</h2>
            <p className="text-sm text-gray-500 mb-4">Source: Company Sales Report 2023</p>
            <div className="w-full h-[300px]">
              <BarChart data={salesData} />
            </div>
          </section>

          {/* Line Chart */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Average Monthly Temperature</h2>
            <p className="text-sm text-gray-500 mb-4">Source: National Weather Service</p>
            <div className="w-full h-[300px]">
              <LineChart data={temperatureData} />
            </div>
          </section>

          {/* Pie Chart */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Market Share by Product</h2>
            <p className="text-sm text-gray-500 mb-4">Source: Q2 2023 Market Analysis</p>
            <div className="w-full h-[300px]">
              <PieChart data={marketShareData} />
            </div>
          </section>

          {/* Area Chart */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Website Traffic</h2>
            <p className="text-sm text-gray-500 mb-4">Source: Google Analytics</p>
            <div className="w-full h-[300px]">
              <AreaChart data={websiteTrafficData} />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}