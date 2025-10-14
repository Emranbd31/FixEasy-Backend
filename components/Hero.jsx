
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const images = [
  {src:'/hero/plumber.jpg', alt:'Professional plumber repairing sink'},
  {src:'/hero/cleaner.jpg', alt:'Cleaner polishing window glass'},
  {src:'/hero/electrician.jpg', alt:'Electrician testing wiring and sockets'},
  {src:'/hero/painter.jpg', alt:'Painter rolling interior wall'}
]

export default function Hero(){
  const [index, setIndex] = useState(0)
  useEffect(()=>{
    const timer = setInterval(()=> setIndex(i => (i+1)%images.length), 5000)
    return ()=> clearInterval(timer)
  }, [])
  return (
    <div className="hero-wrap">
      <div className="hero-bg">
        {images.map((img, i)=> (
          <div key={img.src} className={i===index ? 'hero-slide active' : 'hero-slide'}>
            <Image src={img.src} alt={img.alt} fill priority style={{objectFit:'cover'}} />
          </div>
        ))}
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <div>
          <h1 className="hero-title">FixEasy Ireland</h1>
          <p className="hero-sub">Real local pros. Upfront pricing. Book in minutes.</p>
          <Link href="/book"><button className="hero-btn">Book a Service</button></Link>
        </div>
      </div>
    </div>
  )
}
