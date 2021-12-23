import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Card = ({talent}) => {
    const {API_URL}=process.env
    return (
        <div className="bg-white rounded overflow-hidden shadow-md">
            
            <img src={talent.talent_picture[0].url}  className="w-full h-32 sm:h-64 object-cover" alt=""/>
         
            <div className="m-2">
                <h3 className="font-bold mt-2 pb-2 border-b">{talent.name}</h3>
                <p dangerouslySetInnerHTML={{__html:talent.bio}}/>
                <Link href={`/talent-profiles/${talent.slug}`}><a className="text-button">Find out More</a></Link>
            </div>
        </div>
            
        
    )
}



export default Card
