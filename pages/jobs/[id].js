import React from 'react'
import { table, minifyItems } from "../../utils/Airtable";
var Airtable = require('airtable');
const  details = ({res}) => {
    console.log(res)
    return (
        <div>
            <h1>Job Details</h1>
        </div>
    )
}




   export const getStaticPats=async()=>{
    const jobsDetails = await table.select({view: "Grid view"}).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            console.log('Retrieved', record.get('ProjectCompany'));
        });
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
    const paths = jobsDetails.map((jobDetail) => ({ params: { id: jobDetail.id } }));
    return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
    


   

      
}
export default details