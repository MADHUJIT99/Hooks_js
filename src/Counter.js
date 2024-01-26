// import React from 'react'
// import{ useState } from 'react'

// export default function Counter() {
//     const[count,setCount] = useState(0);
//     let[minus,setMinus] = useState(0);
//     let[mul,setMul] = useState(0);
    
//   return (
//     <div>
//         <p>{count}  </p>
//         <p>{minus}</p>
//         <p>{mul}</p>
//         <button onClick={()=> setCount(count + 25)}>click</button>
//         <button onClick={()=> setMinus(minus=count-10)}>click</button>
//         <button onClick={()=> setMul(mul=count*minus)}>click</button>
//     </div>
//   )
// }

import React from 'react'
import{ useState } from 'react'
import './Container.css'

export default function Counter() {
    const[count ,setCount]=useState(0);
    
    const incrementCount =()=>{
      setCount(count+1);
    };
    
    const decrementCount =()=>{
      setCount(count-1);
    };

    const resetCount =()=>{
      setCount(0);
    };
    
  
  return (
    <div>
      <div className='container'>
        <h1>Counter:{count}</h1>
        <div className='button-container'>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={decrementCount}>Decrement</button>
          <button onClick={resetCount}>Reset</button>


        </div>

      </div>
        

    </div>
  )
}