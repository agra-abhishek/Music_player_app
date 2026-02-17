import { createContext, useEffect, useRef, useState } from "react"
import { songsData } from "../songs"

export const datacontext = createContext()

const UserContext = ({ children }) => {
  let audioRef = useRef(new Audio());
  let [index, setIndex] = useState(0)
let [playingSong , setPlayingSong] = useState(false)
  useEffect(() => {
    audioRef.current.src = songsData[index].song
    audioRef.current.load()
   if(playingSong){
    playSong()
   }
  }, [index]);
  function playSong(){
    setPlayingSong(true)
    audioRef.current.play()
  }
  function pauseSong(){
    setPlayingSong(false)
    audioRef.current.pause()
  }
  function nextSong(){
    setIndex(prev=> prev+1 % songsData.length)
    console.log(songsData[index].song)
  }
  let value = {
    audioRef , playSong , pauseSong , playingSong , setPlayingSong , nextSong
  }
  return (
    <div>
      <datacontext.Provider value={value}>
        {children}
      </datacontext.Provider>

    </div>
  )
}

export default UserContext;
