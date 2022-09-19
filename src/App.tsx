import './styles/main.css'
import './styles/app.css'
import logoImg from './assets/Logo.svg'
import { CreateAdBanner } from './components/createAdBanner'
import { useEffect, useState } from 'react'
import { CardAds } from './components/cardAds'
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdModal } from './components/createAdModal'


export interface Game {
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
    let isMount = true
    async function getGames () {
      const response = await fetch('http://localhost:3333/games')
      const data = await response.json()
      isMount && setGames(data)
    }
    getGames()

    return () => {
      isMount = false
    }
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

      <Dialog.Root>

        <CreateAdBanner />

        <CreateAdModal />

      </Dialog.Root>
    </div>
  )
}

export default App
