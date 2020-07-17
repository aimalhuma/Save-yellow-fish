import React from 'react';
import './App.css';
// import img from './bkk.gif'
import useWebAnimations from "@wellyshen/use-web-animations";




function App() {
  const { ref, playState } = useWebAnimations
   ({
    keyframes: [          
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' },
    //   { transform: 'translate(0,50px)' },
    // { transform: 'translate(550px,80px)' },
    { transform: 'translate(100VW,20px)' },
    // { transform: 'translate(550px,80px)' },
    // { transform: 'translate(0,20px)' },
    ],
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 2000, // Run for 1000ms
      iterations: 4, // Repeat once
      direction: "reverse", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
      
    },
  //   onReady: ({ playState, animate, animation }) => {
  //     // Triggered when the animation is ready to play (Google Chrome: available in v84+)
  //   },
  //   onUpdate: ({ playState, animate, animation }) => {
  //     // Triggered when the animation enters the running state or changes state
  //   },
  //   onFinish: ({ playState, animate, animation }) => {
  //     // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
  
  //   // More useful options...
  // });
}, [])
  return (
    <div className="container"  style={{ backgroundImage: "url('./images/bakgrndimg.gif')" } } >
      <div >
        {/* <img src="./bakgrndimg.gif" height="100%" width="100%" /> */}
     
        
       
        
       <img src="./images/fish1.gif" className="target" ref={ref}/> 
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


    </div>
  );
}

export default App;
