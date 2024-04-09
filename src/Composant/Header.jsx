import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom ';
export default function Header() {
  return (
    <header className='bg-purple-600 shadow-md'> 
    <div className='flex justify-between items-center max-w-7 mx-auto p-3'>
      <Link to='/'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-600'>Dari</span>
        <span className='text-slate-800'>Hna</span>
      </h1>
      </Link>
      </div>
    <div className='flex justify-between place-items-center max-w-7 mx-auto p-3'>

      <form className='bg-slate-100 p-3 rounded-lg flex items-start' >
        <input type="text"placeholder="Search..." className='bg-transparent focus:outline-none w-24 sm:w-64'/>
          Search
          <FaSearch className='text-slate-50-600'/>
            <span className='sr-only'>Search</span>
          
    
      </form>
      <ul className='flex gap-4 '>
        <Link to='  /home'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
        </Link>
        <Link to='/Login'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>Login</li>
        </Link>
        <Link to='/SingUp'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>Sing Up</li>
        </Link>


      </ul>
    </div>  
   </header>
  )
}
