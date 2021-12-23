import React from 'react'
import Card from '../../components/Card'
import Link from 'next/link'

const talentsPage = ({talents}) => {
    return (
        <div>
              <div className="mt-8 grid lg:grid-cols-3 gap-10" >
        {talents.map(talent=>(
        
            <Card talent={talent} key={talent.id}/>
            
        ))}
        </div>
        </div>
    )
}

export default talentsPage

export async function getServerSideProps(){
    const {API_URL}=process.env
     const res=await fetch(`${API_URL}/talent-profiles`)
     const data=await res.json()
 
     return{
       props:{
         talents:data
       }
     }
   }