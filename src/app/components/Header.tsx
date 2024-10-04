import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/placeholder.svg?height=40&width=40" alt="CABRA Logo" width={40} height={40} className="mr-2" />
          <span className="text-xl font-semibold">CABRA</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}