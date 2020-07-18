import React from 'react';
import './App.css';
// import img from './bkk.gif'
import useWebAnimations from "@wellyshen/use-web-animations";




function App() {
  const { ref, playState ,getAnimation} = useWebAnimations
  ({
    keyframes: [       
      
      {transform: 'translate(0px)'},
      {transform: 'translate(-2400px)'},
   
    ],
    timing: {
      delay: 2, // Start with a 500ms delay
      duration: 2500, // Run for 1000ms
      iterations: 1, // Repeat once
      // direction: "reverse", // Run the animation forwards and then backwards
      easing: "linear", // Use a fancy timing function
      
    },
}, [])
  const fish1= useWebAnimations
  ({
    keyframes: [       
      
      {transform: 'translate(0px)'},
      {transform: 'translate(-2400px)'},
   
    ],
    timing: {
      delay: 2, // Start with a 500ms delay
      duration: 2500, // Run for 1000ms
      iterations: 1, // Repeat once
      // direction: "reverse", // Run the animation forwards and then backwards
      easing: "linear", // Use a fancy timing function
      
    },
}, [])
const frightfish = useWebAnimations
   ({
    keyframes: [       
      
      {transform: 'rotate(360deg)'},
      {transform: 'rotate(0deg)'},
      {transform: 'translate(0px,-400px)'},
      {transform: 'translate(600px,-200px)'},
      {transform: 'translate(1000px,200px)'},
      {transform: 'translate(1200px,400px)'},
      {transform: 'translate(100px,300px)'},
     
     
    ],
    timing: {
      delay: 2, // Start with a 500ms delay
      duration: 2500, // Run for 1000ms
      iterations: 1, // Repeat once
      // direction: "reverse", // Run the animation forwards and then backwards
      easing: "linear", // Use a fancy timing function
      
    },
}, [])
const groupfish = useWebAnimations
   ({
    keyframes: [       
      
      {transform: 'rotate(360deg)'},
      {transform: 'rotate(0deg)'},
      {transform: 'translate(0px,-400px)'},
      {transform: 'translate(600px,-200px)'},
      {transform: 'translate(1000px,200px)'},
      {transform: 'translate(1200px,400px)'},
      {transform: 'translate(100px,300px)'},
     
     
    ],
    timing: {
      delay: 2, // Start with a 500ms delay
      duration: 2500, // Run for 1000ms
      iterations: 1, // Repeat once
      // direction: "reverse", // Run the animation forwards and then backwards
      easing: "linear", // Use a fancy timing function
      
    },
}, [])
const yellowgrp = useWebAnimations
   ({
    keyframes: [       
      
      {transform: 'rotate(360deg)'},
      {transform: 'rotate(0deg)'},
      {transform: 'translate(0px,-400px)'},
      {transform: 'translate(600px,-200px)'},
      {transform: 'translate(1000px,200px)'},
      {transform: 'translate(1200px,400px)'},
      {transform: 'translate(100px,300px)'},
     
     
    ],
    timing: {
      delay: 2, // Start with a 500ms delay
      duration: 2500, // Run for 1000ms
      iterations: 1, // Repeat once
      // direction: "reverse", // Run the animation forwards and then backwards
      easing: "linear", // Use a fancy timing function
      
    },
}, [])
const shark1 = useWebAnimations
   ({
    keyframes: [       
      
      {transform: 'translate(0px)'},
      {transform: 'translate(-2400px)'},
   
    ],
    timing: {
      delay: 2, // Start with a 500ms delay
      duration: 3500, // Run for 1000ms
      iterations: 1, // Repeat once
      // direction: "reverse", // Run the animation forwards and then backwards
      easing: "linear", // Use a fancy timing function
      
    },
}, [])
  return (
    <div className="container"  style={{ backgroundImage: "url('./images/bakgrndimg.gif')" } } >
      <div className="fish1">
        {/* <img src="./bakgrndimg.gif" height="100%" width="100%" /> */}
       <img src="./images/fish1.gif" className="target" ref={fish1.ref}/> 
       </div >
       <div className="frightfish">
         <img src="./images/frightingfish.gif" className="target" ref={frightfish.ref}/>
         </div>
       <div className="shark">
         <img src="./images/shark6.gif" height="60%" className="target" ref={shark1.ref}/>
         </div>
         <div className="reef">
         <img src="./images/reef3.png" height="80%" width="150%"/>
         </div>
         <div className="reef2" >
         <img src="./images/reef4.png" height="80%" width="150%"/>
         </div>
         <div className="reef2" >
         <img src="./images/groupp.gif" height="80%" width="150%" ref={groupfish.ref}/>
         </div>
         <div className="reef2" >
         <img src="./images/fish7.gif" height="10%" width="10%" ref={fish1.ref}/>
         </div>
         <div className="reef2" >
         <img src="./images/fish2.gif" height="10%" width="10%" ref={yellowgrp.ref}/>
         </div>
        {/* <img src="./images/groupp.gif" />
        <img src="./images/fish7.gif" />
        <img src="./images/fish2.gif" />
        <img src="./images/fish3.gif" />
        <img src="./images/fish6.gif" />
        <img src="./images/shark5.gif" />
        <img src="./images/shark2.gif" />
        <img src="./images/fish8.gif" />
        <img src="./images/fish9.gif" />
        <img src="./images/fish10.gif" /> */}
      
       
        
      
    


    </div>
  );
}

export default App;
