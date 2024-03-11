import { useState } from 'react'
import './assets/css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return( 
    <div>
      <div className='hero-container'>
        <div className='intro-container'>
          <div className='introduction'>
            <h1>Hello There, I'm</h1>
            <h2>Tyler Pittman<span>,</span></h2>
            <h3>and I build things for the web.</h3>
          </div>
          <div className='statement'>
            <p>I am dedicated to crafting clean, intuitive designs that prioritize your users needs.</p>
          </div>  
        </div>
        {/* <div className='space'></div> */}
      </div>
      <div className='scroll-container'>
        <h3>&darr;&nbsp; HERES SOME OF MY WORK &nbsp;&darr;</h3>
      </div>
      <div className='process'>
        <div className='card'>
          <img id="research" src="/src/assets/images/research.png" />
        </div>
        <div className='card'>
          <img id="design" src="/src/assets/images/design.png" />
          </div>
        <div className='card'>
          <img id="build" src="/src/assets/images/build.png" />
        </div>
        <div className='card'>
          <img id="test" src="/src/assets/images/test.png" />
        </div>
        <div className='card'>
          <img id="deploy" src="/src/assets/images/deploy.png" />
        </div>
      </div>
    </div>
  )
}

export default App
