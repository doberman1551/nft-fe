import React from 'react'

const HomeJobCard = ({jobitem}) => {
    return (
        <div className="flex flex-col bg-gray-200 rounded-lg p-2 m-2 ">
            <div  className=" flex justify-items-center items-center space-x-4 relative ">
            
            <img src={jobitem.fields.LogoImage[0].thumbnails.large.url}  className="w-24 h-24 sm:h-34 sm:w-full object-scale-down p-4"/>
           <div>
          
          
            </div>
            </div>
                <div className="flex flex-col  mt-2 justify-items-center items-center">
                    <span className="font-semibold text-base">{jobitem.fields.Position}</span>
                    <p className="text-sm">{jobitem.fields.Type}.</p>
                  
                </div>
              
                </div>
    )
}

export default HomeJobCard
