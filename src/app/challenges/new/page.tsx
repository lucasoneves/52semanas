import React from 'react'

import styles from './new-challenge.module.scss';
import Input from '@/app/components/Input';

export default function NewChallenge() {
  return (
    <div>
      {/* <h2>Título do desafio</h2> */}
      {/* <h3>Descrição do desafio</h3> */}
      {/* <h2>Quanto quero</h2> */}

      <form action="" className='flex flex-col gap-4'>
        <label className='flex flex-col gap-2' htmlFor="title">
          <span className='block'>Título</span>
          <Input placeholder='Escolha um título para o desafio' type='text' />
        </label>

        <label className='flex flex-col gap-2' htmlFor="description">
          <span className='block'>Descrição</span>
          <textarea className='p-4 rounded-lg text-black' aria-label='description' placeholder='Escreva uma descrição para sua meta' id='description' />
        </label>

        <label className='flex flex-col gap-2' htmlFor="initialValue">
          <span className='block'>Valor inicial</span>
          <Input placeholder='Escolha um valor inicial' type='number' />
        </label>

        <button className='p-4 rounded-lg bg-[var(--success)] flex items-center justify-center'>Salvar</button>
      </form>
    </div>
  )
}
