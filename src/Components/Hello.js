import React from 'react'

const Hello = (props) => {
    const {name, hobby} = props
  return (
    <div>
        <h1>
        Hello , {name}  my hobby is  {hobby}
        </h1>
    </div>
  )
}

export default Hello