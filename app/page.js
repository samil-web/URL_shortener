import Hero from '@/components/Hero'
import Form from '@/components/Form'
import Statistics from '@/components/Statistics'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
export default function Home() {
  return (
      <main className='w-full'>
      <div >
        <Hero/>
        <Form/>
        <Statistics/>
        <CallToAction/>
        <Footer/>
      </div>
      </main>
    )
}
