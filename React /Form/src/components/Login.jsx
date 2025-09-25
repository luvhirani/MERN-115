import React from 'react'
import { useForm } from "react-hook-form"

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      function onSubmit(userData){
        console.log(userData)
      }

  return (
    <div className='bg-sky-200 border-4 m-3 p-3'>
            <h1 className='text-4xl' >Login Form </h1>

       <form onSubmit={handleSubmit(onSubmit)}>
            <label> Username:</label>
            <input className='border-2 bg-white'  type="text" {...register("username",{required:true, minLength:5})} />
            <br />
            {errors.username && <span style={{color:"red"}}> This field is required</span>}
            <br />
            <label> Password:</label>
            <input className='border-2 bg-white' type="text" {...register("password",{required:true})} />
            <br />
            {errors.password && <span style={{color:"red"}}>Password is required </span>}
            <br />
            <input className='border-2 bg-blue-900 text-white ' type="submit" />
       </form>
    </div>
  )
}

export default Login