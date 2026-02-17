import { songsData } from "../songs"
import musicImg from "../assets/musicanim.webp"
import { useContext } from "react";
import { CgPlayTrackPrev } from "react-icons/cg";
import { IoIosPlay } from "react-icons/io";
import { CgPlayTrackNext } from "react-icons/cg";
import { IoPauseOutline } from "react-icons/io5";
import  { datacontext } from "../context/UserContext";

const Home = () => {
    let {audioRef ,playingSong ,playSong ,pauseSong , nextSong} = useContext(datacontext);
    return (
        <div className="w-full h-screen bg-black flex">
            {/* Left div */}
            <div className="w-full md:w-[50%] h-full  flex flex-col justify-start items-center pt-[20px] md:pt-[120px] gap-[30px]" >
                <h1 className="text-white font-semibold text-[20px]"> Now Playing</h1>
                <div className="w-[80%] md:w-[250px] h-[300px] object-fill rounded-md overflow-hidden relative">
                    <img src={songsData[0].image} alt="song image" />
                    <div className="w-full h-full bg-black absolute top-0 opacity-[0.5] flex justify-center items-center">
                        <img src={musicImg} className="w-[50%]" alt="" />
                    </div>
                </div>
                <div>
                    <div className="text-white text-[30px] font-bold">{songsData[0].name}</div>
                    <div className="text-gray-400 text-[20px] text-center">{songsData[0].singer}</div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <input type="range" className="appearance-none w-[50%] h-[8px] rounded-md bg-gray-600  [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:h-5
                      [&::-webkit-slider-thumb]:w-5
                      [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-white
                      [&::-webkit-slider-thumb]:cursor-pointer"  id="range" />
                </div>
                <div className="text-white flex justify-center items-center gap-[20px] ">
                    <CgPlayTrackPrev className="w-[28px] h-[28px] hover:text-gray-600 transition-all cursor-pointer" />
                    {!playingSong ?  <div className="w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer" onClick={()=>playSong()}>
                        <IoIosPlay className="w-[20px] h-[20px]" /></div> 
                    :
                    <div className="w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer"
                    onClick={()=>pauseSong()}>
                        <IoPauseOutline  className="w-[20px] h-[20px]" /></div>}
                   
                     
                    <CgPlayTrackNext className="w-[28px] h-[28px] hover:text-gray-600 transition-all cursor-pointer" onClick={()=>nextSong()} />

                </div>
            </div>


            {/* Right Div */}
            <div className="w-[50%] h-full bg-slate-500 flex flex-col justify-start items-center pt-[120px] hidden md:flex" >
                <h1>Now Playing</h1>
            </div>
        </div>
    )
}

export default Home;
