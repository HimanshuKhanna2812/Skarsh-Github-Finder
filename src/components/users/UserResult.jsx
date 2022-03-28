import { useContext} from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'
import GithubContext from '../../context/github/GithubContext';

function UserResult() {

    const{users, loading}= useContext(GithubContext) 

        //All the things are good only all functions are wrap into context Hook


    
    if(!loading){  
   return (
     <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 gl:grid-cols-3 md:grid-cols-2'>
         {users.map((user)=>(
             <UserItem key={user.id} user={user}/>
         ))}

     </div>

   )
 }else{
     return (
         <Spinner/>
     )
 }
}
 export default UserResult
 /*
Topics covered today:-
Navbar component
Footer component
Use of pages & Routes
Github API &
Create Token

 */
//next Data fetch to API & Token