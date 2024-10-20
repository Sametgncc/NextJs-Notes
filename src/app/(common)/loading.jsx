import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className='mt-5 text-center'>
      <Spinner size='lg' animation="border" />
    </div>
  )
}

export default Loading
