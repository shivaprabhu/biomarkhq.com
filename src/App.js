import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const[state, setState] = useState('screen me for diabetes, it runs in my family')

  useEffect(()=>{
    const prompts = [
      "screen me for diabetes, it runs in my family.",
      "what's the minimum i should test this year?",
      "what should i test for brain fog?",
      "build me a panel for  \u20B910k"
    ]

    let index = 0
    const interverID = setInterval(()=>{
      setState(prompts[index])
      index = (index +1) % prompts.length
    },3000)

    return () => interverID
  },[])

  return (
    <div className="flex flex-col">      
      <nav className="flex flex-row m-15">
        <div className="basis-1/3 justify-start">
          <a href='/'>BiomarkHQ</a>
        </div>
        <div className="flex basis-2/3 gap-6 justify-end">
          <a href=''>About</a>
          <a href=''>Login</a>
          <a href=''>Sign up</a>
        </div>
      </nav>
      <div className="hero flex flex-row">
        <div className="flex flex-col gap-10 w-130 m-15">
          <div className='flex flex-row px-4 py-2 w-120 rounded-full justify-between' style={{ backgroundColor: '#000', opacity: '0.3', color: 'white' }} >
            <span className=''/>
            <input type='text' value={state} placeholder='' className='outline-0 roboto-bold w-full' style={{ }} />
            <button className='rounded-full text-xl hover:cursor-pointer' style={{ backgroundColor: '#fff', opacity: '0.7', color: '#000',padding: '5px 11px' }}>&uarr;</button>
          </div>
          <p>
            BioMarkHQ fuses executive-grade longevity medicine with always-on clinical intelligence. Drop in your existing lab reports to instantly map your healthspan and activate your personal health copilot
          </p>
          <a href="" className="w-26 roboto-bold button rounded-4xl">Get started</a>
        </div>
      </div>  
      <div className="flex flex-col w-full p-15 text-center border-box">
        <h2 className="my-10">How it works</h2>
        <div className="flex flex-row gap-6 my-15">
          <div className="flex flex-col basis-1/4">
            <img src=""/>
            <h3>Upload Medical History</h3>
            <p>Upload past & current bloodwork, wearable data and watch your trends over time. Every marker and report lives in one longitudinal record.</p>
          </div>
          <div className="flex flex-col basis-1/4">
            <img src=""/>
            <h3>Results Explained</h3>
            <p>Get a complete picture of your health data in one secure location</p>
          </div>
          <div className="flex flex-col basis-1/4">
            <img src=""/>
            <h3>Personalised Protocol</h3>
            <p>AI co-pilot builds evidence-backed protocol - diet, lifestyle, supplements, based off of your data</p>
          </div>
          <div className="flex flex-col basis-1/4">
            <img src=""/>
            <h3>Always-on Clinical Intelligence</h3>
            <p>Talk to your personal health copilot anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
