import { useEffect, useState } from "react";
import Background from "./Components/Background/Background.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";


const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "indulge", text2: "you passio" },
    { text1: "dhddjdj", text2: "djdjdj" },
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

 //auto
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {return count===2?0:count+1})
    }, 3000);
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
    
  )
}

export default App
