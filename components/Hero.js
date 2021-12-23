import React from 'react'

export const Hero = () => {
    return (
    
        <section className="relative">

        {/* Illustration behind hero content */}
       
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
  
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
  
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-white" data-aos="zoom-y-out">Talent Platform <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradientbase1 to-accent1">for the NFT world</span></h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                  <div>
                    <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Find Jobs</a>
                  </div>
                  <div>
                    <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Post Job</a>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Hero image */}
            <div>
              <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
                <div className="flex flex-col justify-center">
                 
                  <svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="768" height="432" viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-ill-a">
                        <stop stopColor="#FFF" offset="0%" />
                        <stop stopColor="#EAEAEA" offset="77.402%" />
                        <stop stopColor="#DFDFDF" offset="100%" />
                      </linearGradient>
                      <linearGradient x1="50%" y1="0%" x2="50%" y2="99.24%" id="hero-ill-b">
                        <stop stopColor="#FFF" offset="0%" />
                        <stop stopColor="#EAEAEA" offset="48.57%" />
                        <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                      </linearGradient>
                      <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="hero-ill-e">
                        <stop stopColor="#4FD1C5" offset="0%" />
                        <stop stopColor="#81E6D9" offset="25.871%" />
                        <stop stopColor="#338CF5" offset="100%" />
                      </radialGradient>
                      <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                    </defs>
                   
                    
                  </svg>
                </div>
                
                <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg mt-12 text-base	"  aria-controls="modal" >
                 
                 
                  <span className="mr-3"> 👨‍🏫 New to NFTs? Upskill yourself with our resources</span>
                  <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12l-12-9v5h-12v8h12v5l12-9z"/>
                  </svg>
                </button>
                
              </div>
  
              {/* Modal */}
             
  
            </div>
  
          </div>
  
        </div>
      </section>   
    
    )
}
