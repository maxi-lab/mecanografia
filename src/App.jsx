import { useState } from 'react'
import './App.css'

function App() {
  const cadena='Hola como va Max?'
  const [texto, setTexto] = useState(cadena.split(''))
  const [user, setUser]=useState('')
  const [cantidad, setCantidad]=useState(0)
  const [errores,setErrores]=useState(0)
  const refresh=(e)=>{
    let i=0
    while (i<texto.length) {
      let caracter = e.target.value.slice(-1)
      console.log(caracter)
      if (caracter==texto[0]){
        console.log('found')
        setUser(e.target.value)
        setCantidad(e.target.value.length)
        texto.splice(i,1)   
        setTexto([...texto]) 
        if (texto.length==0) {
          alert('Felicidades')
        }
        return
      }else {
        setErrores(errores+1)
        console.log('detectado')
        
      }
      i++
    }
  }
  return (
    <>
      <p>{cadena}</p>
      <label htmlFor="">Texto</label>
      <textarea name="" id="caja"  onChange={refresh} ></textarea>
      <p>Errores en el tipeo: {errores}</p>
    </>
  )
}

export default App
