import React ,{useState,useCallback}from 'react';

const Callbacks = () =>{
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log('Button clicked.count:${count}');
    },[count]);
}

export default function Callbacks() {
  return (
    <div></div>
  )
}
