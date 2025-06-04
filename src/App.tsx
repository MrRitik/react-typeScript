import './App.css'
import Annoucement from './components/Annoucement'
import Button from './components/Button'
import Greet from './components/Greet'
import Heading from './components/Heading'

function App() {

const personName = {
  fName: "Ritik",
  lName: "Singh"
}

const personList = [
  {
    fName: "Ritik",
    lName: "Singh"
  },
  {
    fName: "Sahil",
    lName: "Singh"
  }
]
  return (
    <>
    <Greet name="Ritik" age={24} islogin={false} person={personName} list = {personList} status='error'/>
    <Heading>This is Heading</Heading>
    <Annoucement>
      <Heading>This is an Announcemet</Heading>
    </Annoucement>
    <Button handleClick={(e) => {console.log("Clicked",e)}} />
    </>
  )
}

export default App
