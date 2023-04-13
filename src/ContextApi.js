import React, { useContext } from 'react'
import {ExampleHooks} from './App'

const ContextApi = () => {
    const {AppColor} = useContext(ExampleHooks);
    console.log("appColor", AppColor)
    return (
    <div>
    <h1>
    Child Component
    </h1>
    </div>
  )
}

export default ContextApi