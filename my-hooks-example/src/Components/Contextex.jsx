import React from 'react'
import Child1 from './Child1'
const Contextex = () => {
    const student={
        name:"XYS",
        age:20
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <Child1 student={student}/>
    </div>
  )
}


export default Contextex