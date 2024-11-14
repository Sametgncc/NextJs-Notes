"use client";


import Image from 'next/image';
import logo from '../../public/images/landScape.jpg';
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
        // raplace ile yaparsak redirect eder. yani geri geldigimizde ana sayfaya doner 
        
    }
  return (
    <div>

      <Image src={logo} alt="logo" />

      <Button onClick={handleClick}>Redirect</Button>
    </div>
  )
}

export default Redirect
