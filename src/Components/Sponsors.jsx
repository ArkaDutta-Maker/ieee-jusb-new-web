import React from 'react'
import capg from '../assets/sponsors/webp/capg.webp'
import cisco from '../assets/sponsors/webp/cisco.webp'
import eds from '../assets/sponsors/webp/eds.webp'
import fb from '../assets/sponsors/webp/fb.webp'
import global from '../assets/sponsors/webp/global.webp'
import hl from '../assets/sponsors/webp/hl.webp'
import ieee_cs from '../assets/sponsors/webp/ieee-cs.webp'
import ieee_kol from '../assets/sponsors/webp/ieee-kol.webp'
import ieee_stud from '../assets/sponsors/webp/ieee-stud.webp'
import intel from '../assets/sponsors/webp/intel.webp'
import mw from '../assets/sponsors/webp/MW.webp'
import nitd from '../assets/sponsors/webp/nitd.webp'
import simoco from '../assets/sponsors/webp/simoco.webp'
import ts from '../assets/sponsors/webp/ts.webp'
import webel from '../assets/sponsors/webp/webel.webp'
import xelp from '../assets/sponsors/webp/xelp.webp'
import yplogo from '../assets/sponsors/webp/yplogo.webp'

export default function Sponsors() {
  return (
    <div className='py-[90px] bg-[rgba(0,0,0,0.15)] dark:bg-gradient-to-b from-[#002238] to-[#002238ca] text-center'>
      <h1 className="font-Josefin font-bold text-white text-4xl uppercase drop-shadow-md my-4">Past Sponsors</h1>
      <div className='bg-white w-24 h-1 mx-auto'/>
      <div className="flex flex-row flex-wrap mt-16 gap-8 md:gap-16 justify-center mx-8">
        <img src={capg} className='h-12 md:h-16'/>
        <img src={cisco} className='h-12 md:h-16'/>
        <img src={eds} className='h-12 md:h-16'/>
        <img src={fb} className='h-12 md:h-16'/>
        <img src={global} className='h-12 md:h-16'/>
        <img src={hl} className='h-12 md:h-16'/>
        <img src={ieee_cs} className='h-12 md:h-16'/>
        <img src={ieee_kol} className='h-12 md:h-16'/>
        <img src={ieee_stud} className='h-12 md:h-16'/>
        <img src={intel} className='h-12 md:h-16'/>
        <img src={mw} className='h-12 md:h-16'/>
        <img src={nitd} className='h-12 md:h-16'/>
        <img src={simoco} className='h-12 md:h-16'/>
        <img src={ts} className='h-12 md:h-16'/>
        <img src={webel} className='h-12 md:h-16'/>
        <img src={xelp} className='h-12 md:h-16'/>
        <img src={yplogo} className='h-12 md:h-16'/>
      </div>
    </div>
  )
}
