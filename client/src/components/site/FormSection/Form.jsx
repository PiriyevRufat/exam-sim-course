import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div className='form-sect'>
                <div className="col-6">
                    <div className='form-desc'>
                        <div className='form-desc-text'>
                            <h1>Register now and get a discount <span>50% </span>discount until 1 January</h1>
                            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
                            <div><button className='btn btn-dark'>REGISTER NOW</button></div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className='form-form'>
                        <img src="https://preview.colorlib.com/theme/course/images/search_background.jpg.webp" alt="" />
                    </div>
                </div>
    </div>
  )
}

export default Form