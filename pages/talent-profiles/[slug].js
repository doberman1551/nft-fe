import React from 'react'
import getConfig from 'next/config'


const TalentProfile = ({talent}) => {
    console.log(talent)
    return (
        <main className="bg-backgroun1">
            <div class="container mx-auto">
            <div class="md:flex">
            <div class="md:shrink-0">
            <img src={talent.talent_picture[0].url}  className="h-48 w-full object-cover md:h-full md:w-48 rounded-full" alt=""/>
            </div>
            <div class="p-8">
            <h2 className="text-xl">

              {talent.name}
            </h2>
            <p dangerouslySetInnerHTML={{__html:talent.bio}}/>
            </div>
            </div>
            </div>
        </main>
    )
}
const {publicRuntimeConfig}=getConfig()

export async function getServerSideProps({ query: { slug }}){
   
    const {API_URL}=process.env
    const res=await fetch(`${API_URL}/talent-profiles?slug=${slug}`)
    const data=await res.json()

return{
    props:{
        talent:data[0]
    }
}
}

export default TalentProfile