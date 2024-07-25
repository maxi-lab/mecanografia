import { useState } from 'react'
import './App.css'

function App() {
  const cadena='Hola como va Max?'
  const[a,setA]=useState(cadena.split(''))
  const [pila,setPila]=useState([])
  const [look,setLook]=useState(0)
  const apilar=(letra)=>{
    pila.push(letra)
    setPila([...pila])
  }
  const desapilar=()=>{
    pila.pop()
    setPila([...pila])
  }
  const borrar=(e)=>{
    if (e.key=='Backspace') {
      setLook(0)
      desapilar()
    }else{
      setLook(1)
    }
  }
  const refresh=(e)=>{
    let i = 0
    while(i<a.length){
      if (look==1 && e.target.value.slice(-1)==a[i]) {
        apilar(e.target.value.slice(-1))
        a.shift()
        setA([...a])
        
        return
      }
      i++
    }
  }

  return (
    <>
      <p>{cadena}</p>
      <label htmlFor="">Texto</label>
      <textarea name="" id="caja" onKeyDown={borrar} onChange={refresh} ></textarea>
      <p>Errores en el tipeo: </p>
    </>
  )
}

export default App
