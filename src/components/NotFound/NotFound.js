import {Link} from 'react-router-dom'
import "./NotFound.css"
const NotFound = () => {
  return (
    <div className='not-found'>
        <h2><h1>404</h1> Page Not Found</h2>
        <p>This page cannot be Found</p>
        <Link to="/" className="btn btn-danger">Go Back to Homepage</Link>

    </div>
  )
}

export default NotFound;