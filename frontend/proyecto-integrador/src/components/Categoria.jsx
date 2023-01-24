import React from "react";
import Text from "./atoms/Text";
import { ContenedorCtg, Imagen, Info } from "../styles/CategoriaStyle";

function Categoria({ image_url, title, description, setClickCat, setTitleCat, setIdCat, id}) {

  // const navigate = useNavigate();
  const clickear = () => {
    setTitleCat(title)
    setClickCat(true)
    setIdCat(id)
  }

  return (
    <ContenedorCtg onClick={() => (clickear())}>
      <div>
        <Imagen src={image_url} alt={title} />
      </div>
      <Info>
        <Text type="h2" color="secondary" text={title} />
        <Text type="h4" color="secondary" text={description} />
      </Info>
    </ContenedorCtg>
  );
}

export default Categoria;
