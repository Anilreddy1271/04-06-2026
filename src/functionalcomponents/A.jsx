import React,{StrictMode} from 'react'
import B from './B'
function A(){
  let a={age:10}
  console.log(a)
  return (
    <StrictMode>
      <h1>This is A component 10</h1>
      <h1>{a}</h1>
      <B />
    </StrictMode>
  )
}

export default A