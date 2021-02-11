import React, { useState,useEffect } from 'react';
import Card from './Card'

const Cards=(props)=>{
    const [applets,setApplets]=useState([]);
    //This will be a fetch that returns cards based upon the props passed from App.js
    
    let testArray=[
        {
            name:"Factors of a Fraction",
            url:"https://www.geogebra.org/m/r43pvvcn",
            description:"Use this applet to engage in some pre-algorithmic thinking.  Enter any fraction, then use the sliders to see it arranged in various ways.  Make connections to multiplication, division, addition, and (perhaps) even subtraction.  Notice and describe patterns!",
            gif:""
        },
        {
            name:"Factors of a Fraction",
            url:"https://www.geogebra.org/m/r43pvvcn",
            description:"Use this applet to engage in some pre-algorithmic thinking.  Enter any fraction, then use the sliders to see it arranged in various ways.  Make connections to multiplication, division, addition, and (perhaps) even subtraction.  Notice and describe patterns!",
            gif:""
        },
        {
            name:"Factors of a Fraction",
            url:"https://www.geogebra.org/m/r43pvvcn",
            description:"Use this applet to engage in some pre-algorithmic thinking.  Enter any fraction, then use the sliders to see it arranged in various ways.  Make connections to multiplication, division, addition, and (perhaps) even subtraction.  Notice and describe patterns!",
            gif:""
        }
    ];
    useEffect(()=>setApplets(testArray),[]);
    return(
        <div className="all-cards-div">
        {applets.map((applet)=>(
            <Card applet={applet}/>
        ))}
        </div>
    )

}

export default Cards;