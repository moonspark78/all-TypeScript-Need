interface PersonProps {
    name: string;
    age: number;
    IsMarried: boolean;
  }

const Person = ({ name, age, IsMarried }:PersonProps) => {
  return (
    <div>
        <p>Name: {name} </p>
        <p>age: {age} </p>
        <p>this person: {IsMarried ? "is Married" : "is single"} </p>
    </div>
  )
}

export default Person