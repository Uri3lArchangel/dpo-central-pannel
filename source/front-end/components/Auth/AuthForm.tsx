import React, { ReactNode } from 'react'
import auth from '../../../../styles/auth/Form.module.css'

interface Props{

 children:ReactNode
}


function AuthForm({children}:Props) {
  return (
    <form className={auth.formContainer}>
      {children}

     </form>

  )
}

export default AuthForm