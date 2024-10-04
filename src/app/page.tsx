import { Suspense } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ReforestationTool from './components/ReforestationTool'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">Reforestation Planning Tool</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ReforestationTool />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}