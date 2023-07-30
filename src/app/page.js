
import Header from '@/components/headerBar/header'
import './style.css'
import MainSection from '@/components/mainSection/main'
import Shortner from '@/components/shortnerUrlsection/shortner'

export default function Home() {
  return (
    <main className='main'>
      <Header/>
      <MainSection/>
      <Shortner/>
    </main>
  )
}
