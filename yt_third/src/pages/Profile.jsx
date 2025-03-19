import { useEffect, useState } from "react";

export default function Profile() {
    let [data, setData] = useState("Profile")
    let [name, setName] = useState("Nitesh")
    //useeffect is called by default for every render and rerender
    //if blank array is passed useeffect is called only once instead of everytime when the component rerenders
//if a state variable is provided in useeffect array then rerender of that particular state variable will invoke useeffect and only for that variable

    useEffect(() => {
        console.log("useeffect on work")
        return ()=>{
            console.log("component destoryed")
        }
    }, [name])
    return (
        <>
            <div className="profile">
                <h1>{data}{name}</h1>
                <button className="button" onClick={() => {
                    setData("Welcome")
                }}>Click</button>
                <button className="button m-2" onClick={() => {
                    setName("Welcome")
                }}>Name</button>
            </div>
        </>
    );
} 