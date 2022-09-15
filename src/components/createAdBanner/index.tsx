import { MagnifyingGlassPlus } from 'phosphor-react'

export function CreateAdBanner() {
  return (
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
  )
}
