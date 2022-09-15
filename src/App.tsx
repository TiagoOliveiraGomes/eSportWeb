import './styles/main.css'
import './styles/app.css'
import logoImg from './assets/Logo.svg'
import { GridAds } from './components/gridAds'
import { MagnifyingGlassPlus} from 'phosphor-react'
import { CreateAdBanner } from './components/createAdBanner'
import { useEffect, useState } from 'react'
import { CardAds } from './components/cardAds'

interface Game {
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number
  }
}
function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(()=>{
    async function getGames () {
      const response = await fetch('http://localhost:3333/games')
      const data = await response.json()
      setGames(data)
    }
    getGames()
  }, [])

  return (
    <div className="App">
      <img src={logoImg} alt="" />
      <h1 className='title'>Seu <span className='gradient'>duo</span> está aqui.</h1>
      <div className='cards-grid'>
        {games?.map(game => {

          return(
            <CardAds
            key={game.id}
            title={game.title}
            quantAds={game._count.ads}
            imgSrc={game.bannerUrl}
            />
          )
        })}
        
      </div>
      <CreateAdBanner />
    </div>
  )
}

export default App
