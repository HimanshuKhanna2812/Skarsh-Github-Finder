import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function UserItem({user: {login, avatar_url}}) {
  return (
    <div className='card shadow-md compact side bg-base-100' >
        <div className='flex-row items-center space-x-4 card-body'> {/*ye columns ko adjust aur fit krne ke use aata h"*/}
        

            <div>
                <div className='avatar'>{/*ye class avatar mtlb profile pic ki trh  liye use hota h*/}
                    <div className='rounded-full shadow w-14 h-14'> {/*ye class pic ko round krne ke lie*/}
                        <img src={avatar_url} alt='Profile'/>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='card-title'>{login}</h2> {/* profile name  */}
                <Link className='text-base-content text-opacity-80' to = 
                {`/user/${login}`}>
                    visit Profile

                </Link>
            </div>
        </div>



    </div>
  )

}
UserItem.propTypes={
    user: PropTypes.object.isRequired
}


export default UserItem