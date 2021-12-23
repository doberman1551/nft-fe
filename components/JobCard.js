import React from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

const JobCard = ({jobitem}) => {
    return (
        <div tabindex="0" className={jobitem.fields.PremiumJobPost==='yes' ?"bg-gradient-to-r from-gradientbase1 to-accent1 m-5 rounded":"bg-white collapse  m-5 rounded"}>
        <div  className=" w-full flex justify-items-start space-x-4 relative ">
            
            <img src={jobitem.fields.LogoImage[0].thumbnails.large.url}  className="w-20 h-20 sm:h-32 sm:w-32 object-scale-down p-4"/>
            <div>
            <p className="pt-4 font-semibold text-lg" > {jobitem.fields.Position}</p>
            <p> {jobitem.fields.ProjectCompany}</p>
            <p className="text-sm pt-2"> {jobitem.fields.Type}</p>
            </div>
            <p className="py-2 right-2 absolute">{jobitem.fields.Category[0]}</p>
            <Link href={`/jobs/${jobitem.id}`}><a className="text-button">Find out More</a></Link>

            </div>
     
            <div class="collapse-content"> 
            <ReactMarkdown children={jobitem.fields.Description}/>
            
            <p></p>

                
        
        </div>
        </div>
         
            
    
    )
}

export default JobCard
