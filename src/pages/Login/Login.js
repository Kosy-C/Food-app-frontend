import React, {useState} from 'react'
import '../Register/Register.css'
import registerbg from '../../assets/registerbg.svg'
import Card from '../../components/card/Card'
import { useAuth } from '../../context/authcontext'


const Login = () => {
  const {LoginConfig} = useAuth();
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
      const{name, value} = e.target
      setFormData({...formData, [name]: value})
  }
// HANDLE SUBMIT, TO HELP US SUBMIT OUR DATA ON THE DATABASE
  const handleSubmit = (e) => {
      e.preventDefault()               /*THIS PREVENTS THE FORM FROM RE-LOADING */
      LoginConfig(formData)

      //setFormData({})
  }

  return (
    <div className='register-container'>
        <div className ="bg-background">
            <img src={registerbg} alt=" " />
        </div>

        <div className='form-style'>
            <Card >
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" onChange={handleChange}/>
                </div>
                <div>
                  <div></div>
                  <div className='btn-container'>
                    {/* <button type="submit"><Link to="/register" className="link">Register</Link></button> */}
                    <button type="submit">Login</button>
                  </div>
                </div>
                
              </form>
 

            </Card>
        </div>
    </div>
  )
}

export default Login