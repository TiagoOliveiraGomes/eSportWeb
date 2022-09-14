import './styles/main.css'
import './styles/app.css'
import logoImg from './assets/Logo.svg'
import { GridAds } from './components/gridAds'
import { MagnifyingGlassPlus} from 'phosphor-react'

function App() {

  return (
    <div className="App">
      <img src={logoImg} alt="" />
      <h1 className='title'>Seu <span className='gradient'>duo</span> está aqui.</h1>

      <GridAds />
      <div className='gradientBorder'>
        <div className='container-PublishBox'>
          <div>
            <strong>Não encontrou seu duo?</strong>
            <span>Public um anúncio para encontrar  novos players!</span>
          </div>
          <button className='btn-publish'>
          <MagnifyingGlassPlus size={24} />
            Publicar anúncio
            </button>
        </div>
      </div>
    </div>
  )
}

export default App
