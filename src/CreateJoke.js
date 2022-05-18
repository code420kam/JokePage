import {React, useState, useEffect} from "react";

const CreateJoke = () => {
    const headers = {Accept: "application/json"}
    const [joke, setJoke] = useState("");
    const [click, setClick] = useState(false)
    
    useEffect(() => {
    const getJokes = async() => {
    const fetchJoke = await fetch("https://icanhazdadjoke.com",{headers}).then((res) => res.json())
    const newJoke = await fetchJoke    
    setJoke(newJoke.joke)
        }

        if(click===true)
          {
              return setClick(false);
          } 
       getJokes()
    },[click])
    
      return (
        <div>
            <div className="jokeFrame">Our new Joke is
              <p>{joke}</p>
            </div>
        <button className="refreshButton" onClick={()=>{setClick(true)}}>Refresh Me</button>
        </div>
      )
}

  export default CreateJoke
  