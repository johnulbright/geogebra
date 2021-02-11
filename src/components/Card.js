import React from 'react';
import  Flippy,{FrontSide,BackSide} from 'react-flippy';

const Card =(props)=>{
    return(
        <div className="card-div">
        <a href={props.applet.url} target="_blank"><Flippy  
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: '#41669d',
          }}
        >
          <h1>{props.applet.name}</h1>
        </FrontSide>
        <BackSide
          style={{ backgroundColor: '#175852'}}>
          <p>{props.applet.description}</p>
        </BackSide>
      </Flippy>
      </a>
      </div>
    )
}

export default Card;