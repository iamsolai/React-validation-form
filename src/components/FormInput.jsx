import { useState } from 'react'
import './formInput.css'

function FormInput(props) {
  const [focus, setFocus] = useState(false)
  const { label, onChange, errorMessage, id, ...inputProps } = props

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        required
        onBlur={() => setFocus(true)}
        onFocus={() => inputProps.name === 'confirmPassword' && setFocus(true)}
        focused={focus.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
