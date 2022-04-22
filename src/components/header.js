import cycle from './712.png';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <div>
            <div className='flex justify-between sm:justify-end items-center '>
                <img src={cycle} alt='logo' className='w-20 m-2 sm:hidden'></img>
                <div className="flex font-body justify-end text-base sm:text-[20px] md:text-xl">
                    <NavLink to='/' className="my-2 px-2 bg-yellow-900/25 rounded-sm hover:border-black hover:border-[1px] hover:scale-110 duration-300 hover:rounded-sm">
                        Entry
                    </NavLink>
                    <NavLink to='/profile' className="my-2 mx-4 px-2 bg-yellow-900/25 rounded-sm hover:border-black hover:border-[1px] hover:scale-110 duration-300 hover:rounded-sm">
                        Login and Upload
                    </NavLink>
                </div>
            </div>
            <div className="flex justify-start border-t-black border-t-[1px] items-center p-2">
                <img src={cycle} alt='cycle' className='w-44 sm:w-64 md:w-72 cursor-none hidden sm:block'></img>
                <div className="text-4xl font-logo ml-4 m-2 p-2 sm:text-5xl md:text-6xl">
                    <span className="text-yellow-900">Second</span>
                    <span className="text-yellow-900">Cycle</span>
                    <p className='font-body mt-2 text-base text-justify sm:text-[20px] md:text-xl'>
                        Facing problems in getting a bicycle at the institute?
                        Your worries end here.
                    </p>
                </div> 
            </div>
        </div>
    )
}

export default Header;