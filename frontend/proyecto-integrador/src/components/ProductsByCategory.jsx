import React, { useState, useEffect } from 'react'
import { ContenedorCard, Imagen, Info } from '../styles/CardStyle'
import Text from './atoms/Text'
import Button from './atoms/Button'
// import Card from './Card'

import { getProducts } from '../services/Products'

const ProductsByCategory = ({idCat}) => {
    const [productos, setProducts] = useState([]);
    
    useEffect(() => {
        getProducts({setProducts})
    }, [])

    
    let productosFiltrados = productos.filter( prod => prod.category.id === idCat)
    
    return (
        <>
            {
                productosFiltrados.map(item =>
                    <ContenedorCard key={item.id}>
                        <div>
                            <Imagen src={item.mainPictureUrl} alt={item.title}/>
                        </div>
                        <Info>
                            {/* <Score score={8}/> */}
                            <Text type="h4" color='secondary' text={item.category.title}/>
                            <Text type="h1" color='secondary' text={item.title}/>
                            <Text type="p1" color='secondary' text={item.address}/>
                            <Text type="p1" color='secondary' text={item.description}/>
                            <Button text="Ver más"  fullwidth />
                        </Info>
                    </ContenedorCard> 
                    // <p key={item.id} >{item.title}. {item.category.title}</p>
                )
            }
            
        </>
    )
}

export default ProductsByCategory







