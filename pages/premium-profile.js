import React from 'react'
import fetch from 'isomorphic-unfetch'

const premiumProfile = ({prprofiles, authData}) => {
    console.log(prprofiles, authData)
    return (
        <div>
           This is a hidden contnet 
        </div>
    )
}


export async function getServerSideProps(context){
    const loginInfo={
        indetifier:'test1@test.com',
        password:'123456'
    }
    const {API_URL}=process.env
    
    const {id}=context.query
    const login=await fetch(`${API_URL}/auth/local`,{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(loginInfo)
    })
    const loginResponse=await login.json()
    const res=await fetch(`${API_URL}/premium-profiles`)
    const data=await res.json()

return{
    props:{
        prprofiles:data,
        authData:loginResponse
    }
}
}


export default premiumProfile
