import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  console.log(inter.className)
  return (
    <main className={inter.className}>

    </main>
  )
}
