import React, { useState } from 'react'
import FormInput from './components/FormInput'
import './app.css'

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character",
      label: 'Username',
      pattern: '^[A-Za-z0-9_]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'Invalid email address',
      label: 'Email',
      pattern: '^[w-.]+@([w-]+.)+[w-]{2,4}$',
      required: true,
    },
    {
      id: 3,
      name: 'age',
      type: 'number',
      errorMessage: 'Please enter your age',
      placeholder: 'Age',
      label: 'Age',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include atleast 1 letter,1 number and 1 special character',
      label: 'Password',
      pattern:
        '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      required: true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: 'Password does not match',
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ]

  function handleSubmit(e) {
    e.preventDefault()
  }
  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  console.log(values)
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          )
        })}

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
