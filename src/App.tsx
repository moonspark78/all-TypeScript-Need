import './App.css'
import Person from './Person';

/* let name:string = 'John Doe';
let age:number = 25;
let isMarried:boolean = false;
let ages: number[] = [25, 30, 35];
let person: any=3; */

function App() {

  return (
    <>
      <Person name={"Alii"} age={24} IsMarried={false}/>
      <Person name={"marie"} age={34} IsMarried={true}/>
    </>
  )
}

export default App
