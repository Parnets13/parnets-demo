import React from 'react'
import { ImagesSliderDemo } from './ImagesSliderDemo'
import { AnimatedTestimonialsDemo } from './AnimatedTestimonialsDemo'
import { CardHoverEffectDemo } from './CardHoverEffectDemo'
import { AnimatedPinDemo } from './AnimatedPinDemo'

const Home2 = () => {
  return (
    <div>
      <ImagesSliderDemo />

      <div>
        <h1 className="font-bold text-xl md:text-6xl text-center text-black mt-10">What our Client say !</h1>
        <AnimatedTestimonialsDemo />
      </div>

      <div className='px-[5vw]'>
        <h1 className="font-bold text-xl md:text-6xl text-center text-black mt-10">Why Choose Us?</h1>
       <div className='flex justify-center items-center mt-3'> <p className='w-[60%] text-center'>With a deep understanding of the business area, Parnets is backed by technical professionals that are skilled at producing high-quality solutions.</p></div>

        <CardHoverEffectDemo/>
      </div>

      <div className='px-[5vw]'>
        <h1 className="font-bold text-xl md:text-6xl text-center text-black mt-10">Our Projects</h1>
        <AnimatedPinDemo/>
      </div>


    </div>
  )
}

export default Home2