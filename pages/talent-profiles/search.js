import React from 'react'
import Card from '../../components/Card'
import Link from 'next/link'
import qs from 'qs'

const searchPage = ({talents}) => {
    console.log(talents)
    return (
        <div>
              <div className="mt-8 grid lg:grid-cols-3 gap-10" >
       {/* {talents.map(talent=>(
        
            <Card talent={talent} key={talent.id}/>
            
        ))}*/}  

        </div>
        </div>
    )
}

export default searchPage

export async function getServerSideProps({query:{term}}){
    const {API_URL}=process.env
    const query = qs.stringify({
        where: {
            _or: [
              { name_contains: term },
              { bio_contains: term },
              
            ],
          },
        })
     const res=await fetch(`${API_URL}/talent-profiles?${query}`)
     const data=await res.json()
 
     return{
       props:{
         talents:data
       }
     }
   }