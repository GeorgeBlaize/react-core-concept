
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'

function App() {

  function handleClick(){
    alert("I am clicked.")
  }
 
   const handleClick3 = () =>{
    alert('clicked 3')
   }

   const handleAdd5 = (num) =>{
    const newNum = num +5;
    alert(newNum);
   }


  return (
    <>
      
      <h3>Vite + React</h3>
      
      <Batsman></Batsman>
      <Counter></Counter>
      {/* <button onClick="handleClick()">Click Me</button> */}


      <button onClick={handleClick()}>Click Me</button>
      <button onClick={function handleClick2(){
        alert('clicked 2')
      }}>Click Me 2</button>

      <button onClick={handleClick}>Click me 3</button>
      
      <button onClick={() => alert('click 4')}>Click me 4</button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  )
}

export default App
