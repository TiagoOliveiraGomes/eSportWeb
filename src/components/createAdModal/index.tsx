import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { InputForm } from '../inputForm'
import { GameController } from 'phosphor-react'

export function CreateAdModal() {
  return (
    <Dialog.Portal>
          <Dialog.Overlay className='dialog-Overlay' />

          <Dialog.Content className='dialog-container-content'>
            <Dialog.Title className='dialog-title'>Publique um anúncio</Dialog.Title>

              <form className='dialog-form'>
                <div className='container-form-dialog'>
                  <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                  <InputForm
                  id='game' 
                  placeholder='Selecione o game que deseja jogar'
                  className='dialog-input'
                  />
                </div>

                <div className='container-form-dialog'>
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <InputForm id='name' placeholder='Como te chamam dentro do game' />
                </div>

                <div className='dialog-grid-input'>
                  <div className='container-form-dialog'>
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <InputForm type="number" id='yearsPlaying' placeholder='Tudo bem ser Zero' />
                  </div>
                  <div className='container-form-dialog'>
                    <label htmlFor="discord">Qual seu discord?</label>
                    <InputForm id='discord' placeholder='Usuario#0000' />
                  </div>
                </div>

                <div className='flex gap-6'>
                  <div className='container-form-dialog'>
                    <label htmlFor="weekDays">Quando costuma jogar</label>
                    <div className='grid grid-cols-4 gap-2'>
                      <button 
                      title='Domingo'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        D
                      </button>
                      <button 
                      title='Segunda'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        S
                      </button>
                      <button 
                      title='Terça'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        T
                      </button>
                      <button 
                      title='Quarta'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        Q
                      </button>
                      <button 
                      title='Quinta'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        Q
                      </button>
                      <button 
                      title='Sexta'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        S
                      </button>
                      <button 
                      title='Sábado'
                      className='w-8 h-8 rounded bg-zinc-900'
                      >
                        S
                      </button>
                    </div>
                  </div>
                  <div className='container-form-dialog flex-1'>
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div className='grid grid-cols-2 gap-2'>
                      <InputForm id='hourStart' type="time" placeholder='De' />
                      <InputForm id='hourEnd' type="time" placeholder='Até' />
                    </div>
                  </div>
                </div>


                <div className='mt-2 flex gap-2 text-sm'>
                  <InputForm type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close 
                  type='button'
                  className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
                  <button 
                  type='submit'
                  className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                  >
                    <GameController size={24} />
                    Encontrar duo
                  </button>
                </footer>
              </form>

          </Dialog.Content>
        </Dialog.Portal>
  )
}
