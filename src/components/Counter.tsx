import React, { useState } from 'react'
import { Button } from './Button'
import { Header } from './Header'

export const Counter = () => {

    const [count, setCount] = useState(0)

    const handleClick = (value: number) => {
        setCount(count + value)
    }


  return (
    <div>
     {/* <Header label = "Counter"/>    */}
        <Header label='Counter'>
            <div>Child Counter Header</div>
        </Header>


       <div>
       <Header label = {`${count}`}/> 
        <Button label = "Add" handleClick ={() => handleClick(1)} />
        <Button label = "Reduce" handleClick ={() => handleClick(-1)}/>
       </div>
    </div>
  )
}
