// Write your JS code here
import './index.css'

const About = () => {
  console.log('about')
  return (
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
        alt="about"
        className="about-image"
      />
      <h1 className="about-text">About</h1>
      <p className="about">I love to create! I am a frontend web developer</p>
    </div>
  )
}

export default About
