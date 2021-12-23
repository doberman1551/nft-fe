import React from 'react'
import { table, minifyItems } from "../../utils/Airtable";
import JobCard from '../../components/JobCard';
import Link from 'next/link';
import Select from 'react-select';

const jobs = ({initialJobs}) => {
    console.log(initialJobs)
    const handleCategory=values=>{
      console.log(values)
    }
    return (
        <main className="bg-background1"> 
     
        <div className="container mx-auto my-6 max-w-3xl ">

      
        <p className="text-2xl font-bold text-whiute-800 py-2">🛒 Job List</p>
        <p className="text-white">Filters go here</p>

      {/* ------------Filters---------------------- */}

        <Select  getOptionLabel={option=>`${option.fields.Category}`}  options={initialJobs} instanceId="category"
        getOptionValue={option=>option.id}
         isMulti placeholder="Filter by Category"
         onChange={values=>handleCategory(values)}
         /> 
       {/* ------------Listing---------------------- */}
        <div className="w-full" >
        {initialJobs.map(jobitem=>(
        
        <JobCard jobitem={jobitem} key={jobitem.id}/>
    
    ))}

            </div>
     
    </div>
    </main>
    )
}

export async function getServerSideProps(context) {
    try {
      const jobsData = await table.select({  maxRecords: 40, sort: [
        {field: 'Approved', direction: 'desc'},{field: 'Created time', direction: 'desc'}
       
    ]}).firstPage();
      return {
        props: {
          initialJobs: minifyItems(jobsData),
        },
      };
    } catch (error) {
      console.log(error);
      return {
        props: {
          err: "Something went wrong 😕",
        },
      };
    }
  }



export default jobs
