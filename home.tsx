import React, { useState } from "react"
import Button from "./components/Button"

export default function HomePage({ title }) {
  const [count, setCount] = useState<number>(0);
  
  function increment() {
    setCount(count => count + 1);
  }
  return (
    <>
      <h1>{title}</h1>
      <button onClick={increment}>{'Count: ' + count}</button>
    </>
  )
}