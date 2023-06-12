import React from 'react'

export default function Profile() {
    const red=()=>{
        alert("red function called")
    }
  return (
    <div>
      <h1 onClick={red}>Profile Component</h1>
    </div>
  )
}
