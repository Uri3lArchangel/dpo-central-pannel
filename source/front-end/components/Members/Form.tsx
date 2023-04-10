import React, { ReactNode } from 'react'
import f from '../../../../styles/Form.module.css'

interface Props{
    children:ReactNode,

}

function Form({children}:Props) {
  return (
    <form className={f.formContainer}>{children} </form>
  )
}

export default Form