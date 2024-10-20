import { wait } from '@/helpers/functions'
import React from 'react'

const Page = async () => {

  await wait (3000)

  return (
    <div>
      Contact Page 
    </div>
  )
}

export default Page
