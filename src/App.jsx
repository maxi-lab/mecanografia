import { useState } from 'react'
import './App.css'

function App() {
  const cadena='hola como va'
  const [texto, setTexto] = useState(cadena.split(''))
  const [user, setUser]=useState('')
  const [cantidad, setCantidad]=useState(0)
  const refresh=(e)=>{
    
    let i=0
    while (i<texto.length) {
      let caracter = e.target.value.slice(-1)
      console.log(caracter)
      if (caracter==texto[i]){
        console.log('found')
        setUser(e.target.value)
        setCantidad(e.target.value.length)
        texto.splice(i,1)   
        setTexto([...texto])
        return
      }else{
        e.target.value=user
      }
      i++
    }
  }
  return (
    <>
      <p>{cadena}</p>
      <label htmlFor="">Texto</label>
      <textarea name="" id="" onChange={refresh} ></textarea>
    </>
  )
}

export default App
