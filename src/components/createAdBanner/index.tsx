import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
  return (
    <div className='gradientBorder'>
        <div className='container-PublishBox'>
          <div>
            <strong>Não encontrou seu duo?</strong>
            <span>Public um anúncio para encontrar  novos players!</span>
          </div>
          <Dialog.Trigger className='btn-publish'>
          <MagnifyingGlassPlus size={24} />
            Publicar anúncio
            </Dialog.Trigger>
        </div>
      </div>
  )
}
