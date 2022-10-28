import { useCallback, useState } from 'react'
import './App.css'
import { useCreation } from 'ahooks'
import List from './List'
import Button from './Button'

function App() {
  const [elements, setElements] = useState<String[]>([])
  const arr = useCreation(() => ['creation'] as String[], [])

  const addElemetToCreation = useCallback(
    () => {
      arr.push('creation' + arr.length)
    },
    [],
  )

  const addElementToState = useCallback(() => {
    setElements((el => [...el, 'state' + arr.length]))
  }, [])


  return (
    <div className="App">
      <h1>Creation</h1>
      <List elements={arr} />
      <Button name="Add to Creation" onClick={addElemetToCreation} />
      <h1>State</h1>
      <List elements={elements} />
      <Button name="Add to State" onClick={addElementToState} />
    </div>
  )
}

export default App
