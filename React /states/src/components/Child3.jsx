import React, {useContext} from 'react'
import {NameContext} from '../App'

const Child3 = () => {
    // step3-> use provided Context
    const user = useContext(NameContext)
    console.log(user)
  return (
    <div>
        My name is : {user}
    </div>
  )
}

export default Child3