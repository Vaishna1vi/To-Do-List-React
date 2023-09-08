import React, { useState } from 'react'

const Task = () => {

const intial = {
  value: '',
  id: '',
}

  const [data, setData] = useState(intial);

const addData = () => {

}

  return (
    <>
    <div className="container d-flex justify-content-center align-items-center bg-gray-500" style={{height: '100vh'}}>
        Task
    </div>
    </>
  )
}

export default Task