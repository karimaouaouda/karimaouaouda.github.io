import Image from 'next/image'
import Link from "next/link";
import About from './about/page';
import { HeaderComponent } from '@/Components/Header/Component';
import Header from '@/Components/Header/Header';
import Navbar from '@/Components/Navbar/Navbar';
import Background from '@/Components/Background/Background'

import './globals.css'

export default function Home() {
  return (
   <div className='app w-screen min-h-screen'>
    <Background/>
    <Navbar/>
    {/* <Header/>
    <Projects/>
    <About/>
    <Social/>
    <ToTop/> */}
   </div>
  )
}
