import { Facebook, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import React from 'react'

export default function Head() {
  return (
    <div className='bg-[#031bb8] flex h-14 justify-between'>
        <div className='text-white flex gap-4 ml-3'>
            <span className='flex items-center gap-1'><Mail /> info@proservice.com</span> 
            <span className='flex items-center gap-1'><Phone /> +1 (555) 123-4567
</span> 
             
        </div>
        <div className='flex justify-between gap-4 items-center mr-4 text-white cursor-pointer  '>
            <Linkedin />
            <Twitter />
            <Facebook />
        </div>
      
    </div>
  )
}
