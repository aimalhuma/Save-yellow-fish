import React ,{useEffect}from 'react';
import './App.css';
// import img from './bkk.gif'
import useWebAnimations from "@wellyshen/use-web-animations";




function App() {
  const { ref, playState ,getAnimation,animate} = useWebAnimations
  ({
    keyframes: [       
      
      {transform: 'rotate(360deg)'},
      {transform: 'rotate(0deg)'},
   
    ],
    timing: {
      delay: 20, // Start with a 500ms delay
      duration: 8500, // Run for 1000ms
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
      {transform: 'translate(0px,0px)'},
     
     
    ],
    timing: {
      delay: 1, // Start with a 500ms delay
      duration: 5500, // Run for 1000ms
      iterations: 1, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "linear", // Use a fancy timing function
      // fill: "forwards"
      
      
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
      delay: 50, // Start with a 500ms delay
      duration: 1200, // Run for 1000ms
      iterations: 1, // Repeat once
      // direction: "reverse", // Run the animation forwards and then backwards
      easing: "linear", // Use a fancy timing function
      
      
    },
}, [])
const grp2 = useWebAnimations
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
      delay: 50, // Start with a 500ms delay
      duration: 4200, // Run for 1000ms
      iterations: 1, // Repeat once
      // direction: "reverse", // Run the animation forwards and then backwards
      easing: "linear", // Use a fancy timing function
      
      
    },
}, [])
const yellowgrp = useWebAnimations
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
const yellowfish= useWebAnimations
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
const nemo = useWebAnimations
   ({
    keyframes: [       
      
      
      {transform: 'translate(0px,-400px)'},
      {transform: 'translate(600px,-100px)'},
      {transform: 'translate(1000px,200px)'},
      {transform: 'translate(200px,800px)'},
      {transform: 'translate(100px,300px)'},
   
    ],
    timing: {
      delay: 2, // Start with a 500ms delay
      duration: 7500, // Run for 1000ms
      iterations: 1, // Repeat once
      // direction: "reverse", // Run the animation forwards and then backwards
      easing: "linear", // Use a fancy timing function
      
    },
}, [])
const bublesfish = useWebAnimations
({
  keyframes: [       
    
    
    {transform: 'translate(0px)'},
    {transform: 'translate(2400px)'},
   
   
  ],
  timing: {
    delay: 2, // Start with a 500ms delay
    duration: 7500, // Run for 1000ms
    iterations: 1, // Repeat once
    // direction: "reverse", // Run the animation forwards and then backwards
    easing: "linear", // Use a fancy timing function
    fill: "forwards"
    
  },
}, [])
const  diverfish= useWebAnimations
   ({
    keyframes: [       
      
      
      {transform: 'translate(20px,0px)'},
      {transform: 'translate(600px,-500px)'},
      {transform: 'translate(1000px,200px)'},
      // {transform: 'translate(200px,800px)'},
      // {transform: 'translate(100px,300px)'},
   
    ],
    timing: {
      delay: 2, // Start with a 500ms delay
      duration: 3500, // Run for 1000ms
      iterations: 1, // Repeat once
      // direction: "reverse", // Run the animation forwards and then backwards
      easing: "linear", // Use a fancy timing function
      
    },
}, [])
useEffect(() => {
  document.addEventListener("click", (e) => {
    // The target will follow the mouse cursor
    animate({
      keyframes: [       
      
        {transform: 'rotate(360deg)'},
      {transform: 'rotate(0deg)'},
      {transform: 'translate(0px,-400px)'},
      {transform: 'translate(600px,200px)'},
      {transform: 'translate(1000px,200px)'},
      {transform: 'translate(200px,800px)'},
      
     
      ],
      timing: { duration: 3500, fill: "forwards" },
    });
  });
}, [animate]);


  return (
    <div className="container"  style={{ backgroundImage: "url('./images/bakgrndimg.gif')" } } >
      <div className="fish1">
        {/* <img src="./bakgrndimg.gif" height="100%" width="100%" /> */}
       <img src="./images/fish1.gif" className="target" ref={fish1.ref}/> 
       </div >
       <div className="frightfish">
         <img src="./images/frightingfish.gif" className="target" ref={ref}/>
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
         <img src="./images/groupp.gif" height="80%" width="150%"  ref={groupfish.ref}/>
         </div>
         <div className="reef2" >
         <img src="./images/fish7.gif" height="10%" width="10%" ref={yellowfish.ref}/>
         </div>
         <div className="yellowfish" >
         <img src="./images/fish2.gif" height="10%" width="10%" className="target" ref={yellowgrp.ref}/>
         </div>
         <div className="nemo" >
         <img src="./images/fish10.gif" height="10%" width="10%" className="target" ref={nemo.ref}/>
         </div>
         <div className="diverfish" >
         <img src="./images/fish6.gif" height="10%" width="10%" className="target" ref={diverfish.ref}/>
         </div>
         <div className="bublefish" >
         <img src="./images/fish12.gif" height="10%" width="10%" className="target" ref={bublesfish.ref}/>
         </div>
         <div className="grpp2" >
         <img src="./images/groupp.gif" height="80%" width="150%"  ref={grp2.ref}/>
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
