import './App.css'
// import { useState } from 'react'
import Card from './Card.jsx';
import Header from './Header.jsx';
import { rocksImg } from "../assets/index.js";

function App() {
  /* const [count, setCount] = useState(0)

  let myObj = {
    name: 'Azura',
    age: 25,
    address: {
      city: 'ABC',
      state: 'DEF',
      country: 'GHI'
    }
  } */

  let newArr = [1, 2, 3, 4, 5];

  return (
    <>
      <Header
        header='Azura'
        link1={{ text1: 'About', href1: '/about' }}
        link2={{ text2: 'Contact', href2: '/contact' }}
        link3={{ text3: 'Partner', href3: '/partner' }}
      />
      {/* <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1> */}
      <Card username="azura" myArr={newArr} />
      <Card username='Json' post='Staff Engineer' />
      <Card imageUrl={rocksImg} />
    </>
  )
}

export default App
