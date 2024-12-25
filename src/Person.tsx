import { useState } from "react";

interface PersonProps {
    name: string;
    age: number;
    IsMarried: boolean;
}

const Person = (props: PersonProps) => {
    const [isShowInfo, setIsShowInfo] = useState<boolean | null>(false)
    const [bio, setBio] = useState<string | null>(null)
    
    const toggleInfo = () => {
        setIsShowInfo(!isShowInfo)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setBio(event.target.value)
    }

    return (
        <div>
                <>
                    <p>Name: {props.name} </p>
                    <p>age: {props.age} </p>
                    <p>this person: {props.IsMarried ? "is Married" : "is single"} </p>
                </>
        

           {/*  <button onClick={toggleInfo}>Toggle Info</button> */}
           <p>{props.name} Bio : {!bio ? "No person Availble" : bio} </p>
           <input onChange={handleChange}  />
        </div>
    )
}

export default Person