<<<<<<< HEAD
import { useState } from "react";

function Home() {

    let [name, setName] = useState("You are brown");
    let [color, setColor] = useState("antiquewhite");
    let [counter, setCounter] = useState(0);

    function colorChange() {
        setColor("tomato")
        setCounter(counter + 1)
    }
    function printSomething() {
        setName("You are a Nigga")
    }
    function backChange() {
        setColor("antiquewhite")
    }
    return (
        <>
            <div className="home" onMouseEnter={colorChange} onMouseLeave={backChange} style={{ backgroundColor: color }}>
                <div>
                   <p>Hover over me={counter}</p> 
                </div>
                <div>
                   <p>{name}</p> 
                    <button className="button" onClick={printSomething}>Change my type</button>
                </div>
            </div>
=======
function Home(){
    return(
        <>
        <div className="home">Home</div>
>>>>>>> cb75d3519d25e094614b187ef392ab230b9a7105
        </>
    )
}
export default Home