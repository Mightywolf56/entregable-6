import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, userLogOut } from '../store/slices/userInfo.slice' 


const Login = () => {

  const {register, handleSubmit, reset} = useForm()

  const { token, user: {firstName, lastName} } = useSelector(store => store.userInfo)
    console.log(user)
  const dispatch = useDispatch()

  const submit = (data) => {
    dispatch(loginUser(data))
    reset ({
      email: "",
      password: ""
    })
  }

  const handleLogOut = () => {
    dispatch(userLogOut())
  }





  return (
    <main>
      {
        token ? (
          <section>
            <i class='bx bxs-user-circle'></i>
            <h3>{firstName} {lastName}</h3>
            <button onClick={handleLogOut}>Log out</button>

          </section>
        ) : (
          <form onSubmit={handleSubmit(submit)} action="">
        <h3>Welcome! Enter your email and password to continue</h3>
        <div>
          <h4>Test Data</h4>
                <div>
                  <i class='bx bx-envelope'></i>john@gmail.com
                </div>
              <div>
                <i class='bx bx-lock-alt'></i>john1234
              </div>
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="text" {...register("email")} />
        </div>

        <div>
          <label htmlFor="">Password</label>
          <input type="password"  {...register("password")} />
        </div>

        <button>Login</button>

        <p>Don't have an account? <span>Sign up</span></p>
      </form>
        )
      }
    </main>
  )
}

export default Login