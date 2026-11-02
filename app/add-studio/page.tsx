import AddStudioForm from '@/components/studio/AddStudio'
import React from 'react'

const AddStudioPage = () => {
    const user = {
        name: 'user name',
        email: 'user email'
    }
  return (
    <div className='py-5'>
      <AddStudioForm user = {user}/>
    </div>
  )
}

export default AddStudioPage
