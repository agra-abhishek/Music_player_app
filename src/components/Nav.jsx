import { TiHome } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { RiPlayListLine } from "react-icons/ri";
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='w-full h-[100px] bg-black fixed bottom-0 md:top-0  text-white flex justify-around md:justify-center items-center gap-[50px] p-[20px]'>
            <Link to={"/"}><TiHome className='w-[30px] h-[30px]' /></Link>
            <Link to={"/search"}><IoSearch className='w-[30px] h-[30px]' /></Link>
            <Link to={"/playlist"}><RiPlayListLine className='w-[30px] h-[30px]' /></Link>
            <Link to={"/liked"}><IoMdHeart className='w-[30px] h-[30px]' /></Link>
             </div>
    )
}

export default Nav
