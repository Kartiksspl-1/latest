import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import * as handPoseDetection from '@tensorflow-models/hand-pose-detection';


function App() {

  useEffect(()=>{
   
   async function myfunc(){
    const model = handPoseDetection.SupportedModels.MediaPipeHands;
    const detectorConfig = {
      runtime: 'tfjs',
      modelType: 'full'
    };
   let detector = await handPoseDetection.createDetector(model, detectorConfig);


   }
   async function videoget(){

    try{
     const stream=await navigator.mediaDevices.getUserMedia({video:true});
      document.getElementById('myvideo').srcObject=stream


    }
    catch(e){
      console.log(e)
    }
   }
   videoget()
   myfunc()
  })
  return (
    <div className="App">
 <video  width="250">



Sorry, your browser doesn't support embedded videos.
</video>
    </div>
  );
}

export default App;
