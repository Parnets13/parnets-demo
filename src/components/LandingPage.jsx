import React from 'react'
import { FlipWordsDemo } from './FlipWordsDemo'
import { AnimatedTooltipPreview } from './AnimatedTooltipPreview'
import { Button } from './ui/button'

const LandingPage = () => {
    return (
        <div>
            <div className="relative top-0 left-0 w-full px-4  mx-auto max-w-7xl md:py-0 flex flex-col justify-center items-center h-[80vh]">
                {/* <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold  text-[#363090]">Par<span className="text-[#f04c27]">Nets</span></h1> */}
                <h1 className="text-2xl font-bold md:text-5xl dark:text-white">
                    The Ultimate  <FlipWordsDemo />
                </h1>
                <p className="max-w-2xl mt-8 text-base md:text-xl dark:text-neutral-200">
                    Driven by passion, fueled by technology. Our team specializes in designing and developing
                    experiences that captivate and inspire.
                </p>
                <div className="mt-10"><AnimatedTooltipPreview /></div>
                <a href='/about'> <Button className='z-50 cursor-pointer'>Get Started</Button></a>
            </div>
        </div>
    )
}

export default LandingPage