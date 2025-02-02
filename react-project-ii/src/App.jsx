
import './App.css'
import Box from './components/home/Home'

function App() {
  

  return (
    <div className='body'>
     <Box 
      serial="First box"
      name="Johnmary"
      phone="070 0000000000"
      email="johnmary@gmail.com"
      address="Nsukka"
    />
     <Box 
      serial="Second box"
      name=" Peter"
      phone="080 111111111"
      email="peter@gmail.com"
      address="Anambra"
     />
     <Box 
      serial="Third box"
      name="James"
      phone="090 22222222"
      email="james@gmail.com"
      address="Abia"
     />
     <Box 
      serial="Fourth box"
      name="Mathew"
      phone="071 33333333"
      email="mathew@gmail.com"
      address="Abuja"
     />
    </div>
  )
}

export default App
