import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
  return (<div className='hero'>
      <div className='text-center hero-content'>
          <div className='max-w-lg'>
              <h1 className='text-8xl font-bold mb-8'>
                  Oops!
                
              </h1>
              <p className='text-5xl mb-8'>404 - Not found!</p>
              <Link to='/' className='btn btn-primary btn-lg' style={{backgroundColor:'#28004d'}} >
                  <FaHome className='mr-2' />Back to HOME
              </Link>
          </div>
      </div>

  </div>
  
  )
}

export default NotFound




/*
Today covered topics:-
UserList component
Spinner with functions 
Display Users from API 
Setup Github Context
CleanUP Fetch Users


*/



// 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