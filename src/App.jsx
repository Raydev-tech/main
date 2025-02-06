import React from 'react'
import './App.css'

function App() {
  return (
    <div className='main'>
      <nav>
        <div className='logo'>Cristiano Blog
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
        <div className='content'>
          <h1><i>Welcome To Cristiano <br />Ronaldo Blog </i></h1>
          <p>Professional footballer also a Legend</p>
          <p className='info'>I'm Cristiano Ronaldo.five-time Ballon d'or winner,five-time UEFA Champion league,a record three UEFA Men's Player of the Year Awards, four European Golden Shoes, and was named five times the world's best player by FIFA,the most by a European player. He has won 33 trophies in his career,. This Portfolio showcase my remarkable journey, achievement, and passion.</p>
          <div className='btn'>
            <button><a href="/Join.jsx">Join me</a></button>
            <button className='sbtn'><a href="#">Let's talk</a></button>
          </div>
          <div className='social'>
            <i><img src="Fb.png" alt="" /></i>
            <i><img src="X.png" alt="" /></i>
            <i><img src="youtube.png" alt="" /></i>
          </div>
        </div>

      <div className='profile'></div>
    </div>
  )
}

export default App