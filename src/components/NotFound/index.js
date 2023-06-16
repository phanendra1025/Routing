// Write your JS code here
import './index.css'

const NotFound = () => {
  console.log('notFound')
  return (
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png "
        alt="ot found"
        className="not-found-image"
      />
      <h1 className="not-found-text">Not Found</h1>
    </div>
  )
}

export default NotFound
