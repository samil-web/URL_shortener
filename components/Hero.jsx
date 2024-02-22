import Image from "next/image"
import '../app/globals.css'
export default function Hero() {
  return (
    <main className="flex justify-between ml-20">
    <div className="space-y-4 mt-40">
    <h1 className="text-7xl font-bold text-left ">More than just shorter links</h1>
    <p className="text-2xl text-left w-4/5 mb-14">Build your brand's recognition and get detailed insights on how your links are performing.</p>
    <button className="bg-[#28D0CD] px-5 py-2 rounded-full text-white">Get Started</button>
    </div>
    <Image className="mt-20" alt ='logo' width='600' height='600' src='/images/illustration-working.svg'/>
    </main>
  )
}
