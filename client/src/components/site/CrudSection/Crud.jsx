import React from 'react'
import './Crud.css'
import Card from '../Card/Card'
const Crud = () => {
  return (
    <div className="courses">
        <div className="container">
        <div className="row">
            <div className='courses-heading'>
                <h1>Popular Courses</h1>
            </div>
            <div>
                <Card/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Crud