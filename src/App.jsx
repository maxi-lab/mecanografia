import { useState } from 'react'
import './App.css'

function App() {
  const cadena='Hola como va Max?'
  const a=cadena.split('')
  const [pila,setPila]=useState([])
  const [look,setLook]=useState(0)
  const [error,setError]=useState(0)

  

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

  const errores=()=>{
    let e =0
    for (let i = 0; i < pila.length; i++) {
      if (a[i]!=pila[i]) {
        e++
      }
      
    }
    return e
  }
  const refresh=(e)=>{
    let i = 0
    while(i<a.length){
      if (look==1 && e.target.value.slice(-1)==a[i]) {
        apilar(e.target.value.slice(-1))
        if(a.length==pila.length){
          alert('felicidades')
          setError(error+errores())
        }
        return
      }
      i++
    }
    if (look!=0) {
      setError(error+1)
    }
  }

  return (
    <>
      <p>{cadena}</p>
      <label htmlFor="">Texto</label>
      <textarea name="" id="caja" onKeyDown={borrar} onChange={refresh} ></textarea>
      <p>Errores en el tipeo: {error}</p>
    </>
  )
}

export default App
