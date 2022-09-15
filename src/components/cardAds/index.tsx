import React from 'react'
import './styles.css'

interface CardsAdsProps {
    title?: string,
    imgSrc: string,
    quantAds: string
}

export function CardAds(props: CardsAdsProps) {
    const {title, imgSrc, quantAds} = props
  return (
    <a className='container-CardAds'>
        <img src={imgSrc} alt="" />

        <div className='text-Box'>
            <strong>{title}</strong>
            <span>{quantAds} anúncio(s)</span>
        </div>
    </a>
  )
}
