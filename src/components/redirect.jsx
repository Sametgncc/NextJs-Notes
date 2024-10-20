"use client";


import { useRouter } from 'next/navigation';
import React from 'react'
import { Button } from 'react-bootstrap'

const Redirect = () => {

    const router = useRouter()

    // ! event kullanimlarinda bulunan componente use clint yazilmali 
    const handleClick = () => {
        const res = confirm('Are you sure want to redirect?');
        if ( !res) {
            return ;
        }   

        router.push('/dashboard');
        
    }
  return (
    <div>
      <Button onClick={handleClick}>Redirect</Button>
    </div>
  )
}

export default Redirect
