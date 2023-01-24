import Categoria from './Categoria'
import React, { useState, useEffect } from 'react'

import { getCategories } from '../services/Categories'

function ListaCategorias({setTitleCat, setCategoryData, setClickCat, setIdCat}) {
  const [categorias, setCategorias] = useState([]);
  
  useEffect(() => {
    getCategories({setCategorias})
  }, [])

  setCategoryData(categorias)

  return (
    <>
        {
            categorias.map(item =>
              <Categoria
                  key={item.id}
                  id={item.id}
                  image_url={item.imageUrl}
                  title={item.title}
                  description={item.description}
                  // categoryData={categoryData}
                  // setCategoryData={setCategoryData}
                  setClickCat={setClickCat} 
                  setTitleCat={setTitleCat}
                  setIdCat={setIdCat}
              />
            )
        }
    </>
  )
}

export default ListaCategorias