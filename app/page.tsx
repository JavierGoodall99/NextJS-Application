'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(
  
  () => import('./components/HeavyComponent'),
  {
    ssr: false,
     loading: () => <p>Loading...</p> 
    }) 

export default function Home() {
  const [isVisibile, setVisible] = useState(false)
  return (
    <main>
      <h1>Hello World</h1>
      <button onClick={() => setVisible(true)}>Show</button>
      {isVisibile && <HeavyComponent />}
    </main>
  )
}


// ------------------------------------------------------------------------------


// import Image from 'next/image'
// import Link from 'next/link'
// import ProductCard from './components/ProductCard'
// import { getServerSession } from 'next-auth'
// import { authOptions } from './api/auth/[...nextauth]/route'
// import { Metadata } from 'next'
// import HeavyComponent from './components/HeavyComponent'

// export default async function Home() {
//   const session = await getServerSession(authOptions)
//   return (
//     <main>
//       <h1>Hello World {session && <span>{session.user!.name}</span>}</h1>
//       <Link href="/users">Users</Link>
//       <ProductCard/>
//       <HeavyComponent />
//     </main>
//   )
// }


// ------------------------------------------------------------------------------


// SEO
// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('')

//   return {
//     title: "product.title",
//     description: "product.description",
//   }
// }

// export default async function Home() {
//   return (
//     <main>
//       <h1>Hello World </h1>
//     </main>
//   )
// }



// ------------------------------------------------------------------------------


// Images
// import Image from 'next/image'
// import coffee from '@/public/images/coffee.webp'

// export default function Home() {
//   return (
//     <main className='relative h-screen'>
//       <Image src="https://bit.ly/3HqqRQN" 
//       alt="coffee" 
//       fill
//       className='object-cover'
//       sizes='(max-width: 480) 100vw, (max-width: 768px) 50vw, 33vw'
//       quality={100} 
//       priority
//       />
//     </main>
//   )
// }
