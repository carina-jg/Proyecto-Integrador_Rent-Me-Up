import React from 'react'
import { ContenedorCard, Imagen, Info,TituloCard, Descripcion } from '../styles/CardStyle'
import Text from './atoms/Text'
import Button from './atoms/Button'
import { useNavigate } from 'react-router-dom'

// import Score from './molecules/Score'

function Card({ id, mainPictureUrl, category, title, address, description }) {
  const navigate = useNavigate();
  return (
      <ContenedorCard>
            <div style={{borderRadius: "8px 8px 0px 0px"}}>
              <Imagen src={mainPictureUrl} alt={title}/>
            </div>
            <Info>
              {/* <Score score={8}/> */}
              <Text type="h4" color='secondary' text={category} style={{opacity:"0.5"}}/>
              <TituloCard>
              <Text type="h1" color='secondary' text={title}/>
              </TituloCard>
              <Text type="p1" color='secondary' text={address}/>
              <Descripcion>
              <Text type="p1" color='secondary' text={description}/>
              </Descripcion>
              <Button click={() => navigate(`/products/${id}`)} text="Ver más"  fullwidth/>
            </Info>
      </ContenedorCard> 
  )
}

export default Card