"use client";
import { Inter } from '@next/font/google'

import Form from './components/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <Form/>
   </div>
  )
}
