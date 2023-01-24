import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    // FormularioDatos,
    // Formurario,
    ReservaStyle,
} from "../../styles/ReservaStyle";
import { Formurario,TituloCP,ArrowHeader, ContenedorFormurarios, BloqueFormurario, FormurariosCP, BotonFormurario, FormularioAgregar } from "../../styles/CreacionProductoStyle.jsx";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import Arrow from "../../assets/arrow.svg";
import { getCategories } from "../../services/Categories";
import { getCities } from "../../services/Cities";
import { getCharacteristics } from "../../services/Characteristics";
import { getPoliciesType } from "../../services/Policies";
import { useFormik } from "formik";
import { api } from "../../services/api/api";
import CustomSelect from "../../components/molecules/CustomSelect";

export function CreacionProducto() {
  const [categorias, setCategorias] = useState([]);
  const [cities, setCities] = useState([]);
  const [policiesTypes, setPoliciesTypes] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);
  const [errMsgProd, setErrMsgProd] = useState("");
  const [errMsgCaract, setErrMsgCaract] = useState("");
  const [errMsgImg, setErrMsgImg] = useState("");
  const [errMsgPolitica, setErrMsgPolitica] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    try {
      getPoliciesType({ setPoliciesTypes });
    } catch (error) {
      // console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      getCities({ setCities });
    } catch (error) {
      // console.error(error);
    }
  }, []);

  useEffect(() => {
    getCharacteristics({ setCharacteristics });
  }, []);

  useEffect(() => {
    getCategories({ setCategorias });
  }, []);

  const optionsCharacteristics = characteristics.map((character) => ({
    label: character.description,
    value: character.id,
  }));

  const optionsCategories = categorias.map((categorie) => ({
    label: categorie.title,
    value: categorie.id,
  }));

  const optionsCity = cities.map((city) => ({
    label: city.name,
    value: city.id,
  }));

  const optionsPoliciesType = policiesTypes.map((politics) => ({
    label: politics.description,
    value: politics.id,
  }));

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      mainPictureUrl: "",
      address: "",
      longitude: 0.4,
      latitude: 0.6,
      price: 43.6,
      category: -1,
      city: -1,
    },
    onSubmit(values) {
      handleCrearProducto(values);
    },
  });

  const handleCrearProducto = async (values) => {
    const productData = {
      title: values.title,
      description: values.description,
      mainPictureUrl: values.mainPictureUrl,
      address: values.address,
      longitude: 0.4,
      latitude: 0.6,
      price: 43.6,
      category: { id: values.category },
      city: { id: values.city },
    };

    try {
      const resp = await api.post("/products/add", JSON.stringify(productData), {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      const idProducto = resp?.data?.id

      formik2.setFieldValue("product", idProducto)
      formik3.setFieldValue("product", idProducto)
      formik4.setFieldValue("product", idProducto)

      if(resp.status === 200) {
        setErrMsgProd("Producto creado exitosamente")
      }
    } catch (error) {
      setErrMsgProd("Producto no creado, vuelva a intentarlo")
    }
  };

  const formik2 = useFormik({
    initialValues: {
        characteristic: -1,
        product: -1
    },
    onSubmit(values) {
      handleAgregarCaracteristicas(values)
    },
  });

  const handleAgregarCaracteristicas = async (values) => {
    const caracteristicasData = {
        characteristic: {id: values.characteristic},
        product: {id: values.product}
    }

    try {
        const resp = await api.post("/product-characteristics/add", JSON.stringify(caracteristicasData),
        {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
              },
        })

        if(resp.status === 200) {
          setErrMsgCaract("Característica agregada exitosamente")
        }

    } catch (error) {
      setErrMsgCaract("Característica no agregada, vuelva a intentarlo")
    }
  }

  const formik3 = useFormik({
    initialValues: {
        title: "",
        url: "",
        product: -1
    },
    onSubmit(values) {
      handleAgregarImagenes(values)
    },
  });

  const handleAgregarImagenes = async (values) => {
    const imagenData = {
        title: values.title,
        url: values.url,
        product: {id: values.product}
    }

    try {
        const resp = await api.post("/images/add", JSON.stringify(imagenData),
        {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
              },
        })

        if(resp.status === 200) {
          setErrMsgImg("Imagen agregada exitosamente")
        }

    } catch (error) {
      setErrMsgImg("Imagen no agregada, vuelva a intentarlo")
    }
  }

  const formik4 = useFormik({
    initialValues: {
        policy: -1,
        product: -1
    },
    onSubmit(values) {
      handleAgregarPolitica(values)
    },
  });

  const handleAgregarPolitica = async (values) => {
    const politicasData = {
        policy: {id: values.policy},
        product: {id: values.product}
    }

    try {
        const resp = await api.post("/product-polices/add", JSON.stringify(politicasData),
        {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
              },
        })

        if(resp.status === 200) {
          setErrMsgPolitica("Política agregada exitosamente")
        }

    } catch (error) {
      setErrMsgPolitica("Política no agregada, vuelva a intentarlo")
    }
  }

  return (
    <>
      <ReservaStyle>
        <TituloCP>
        <Text type="h1" color="secondary" text="Administración de productos" />
        <ArrowHeader>
          <Link to={"/"}>
            <img className="arrow" src={Arrow} alt="arrow" />
          </Link>
        </ArrowHeader>
        </TituloCP>

        <ContenedorFormurarios>
          {/* Formulario de creacion de producto */}
          <Text type="h2" color="secondary" text="Crear producto" style={{textAlign: "center"}}/>
          <Text type="h4" color="secondary" text="1.- Ingresar los datos necesarios para generar un nuevo producto." style={{textAlign:"center", marginTop:"20px", color:"#FD866E"}}/>
          <BloqueFormurario onSubmit={formik.handleSubmit}>
          <FormurariosCP>
            <div>
              <label>
                <Text type="p1" color="secondary" text="Nombre del producto" />
              </label>
              <Formurario
                type={"text"}
                name="title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
            </div>

            <div>
              <label>
                <Text type="p1" color="secondary" text="Descripción" />
              </label>
              <Formurario
                type={"textarea"}
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </div>

            <div>
              <label>
                <Text type="p1" color="secondary" text="Url imagen principal" />
              </label>
              <Formurario
                type={"text"}
                name="mainPictureUrl"
                onChange={formik.handleChange}
                value={formik.values.mainPictureUrl}
              />
            </div>

            <div>
              <label>
                <Text type="p1" color="secondary" text="Dirección" />
              </label>
              <Formurario
                type={"text"}
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
            </div>

            <CustomSelect
              options={optionsCategories}
              placeholder="Seleccione una categoría"
              value={formik.values.category}
              onChange={(value) => formik.setFieldValue("category", value.value)}
            />
            {/* <label>{formik.values.category}</label> */}
            <CustomSelect
              options={optionsCity}
              placeholder="Seleccione una ciudad"
              value={formik.values.city}
              onChange={(value) => formik.setFieldValue("city", value.value)}
            />
            {/* <label>{formik.values.city}</label> */}
            </FormurariosCP>
            <p className={errMsgProd ? "errMesg" : "offscreen"}>{errMsgProd}</p>
            <BotonFormurario>
              <Button text="Enviar producto" fullwidth type="submit" />
            </BotonFormurario>
          </BloqueFormurario>
        
        {/* Formurario de creacion de caracteristicas */}

          <Text type="h4" color="secondary" text="2.- Luego de enviar los datos del nuevo producto se pueden agregar, uno por uno sus características, imágenes y políticas." style={{textAlign:"center", marginTop:"20px", color:"#FD866E"}}/>
          <Text style={{textAlign: "center"}} type="h2" color="secondary" text="Agregar características" />
          <BloqueFormurario onSubmit={formik2.handleSubmit}>
          <FormularioAgregar>
          <CustomSelect
              options={optionsCharacteristics}
              placeholder="Seleccione las características"
              value={formik2.values.characteristic}
              onChange={(value) => formik2.setFieldValue("characteristic", value.value)}
            />
          </FormularioAgregar>
          <p className={errMsgCaract ? "errMesg" : "offscreen"}>{errMsgCaract}</p>
          <BotonFormurario>
            <Button text="Agregar características" fullwidth type="submit"/>
          </BotonFormurario>
          </BloqueFormurario>

      {/* Formurario de creacion de imagenes */}
    
          <Text style={{textAlign: "center"}} type="h2" color="secondary" text="Agregar imágenes" />

          <BloqueFormurario onSubmit={formik3.handleSubmit}>
          <FormularioAgregar>
            <label>
              <Text type="p1" color="secondary" text="Titulo imagen" />
            </label>
            <Formurario
                type={"text"}
                name="title"
                onChange={formik3.handleChange}
                value={formik3.values.title} />
            <label>
              <Text type="p1" color="secondary" text="Url imagen" />
            </label>
            <Text type="h4" color="secondary" text="Se sugiere agregar un mínimo de cinco (5) imágenes." style={{textAlign:"center", marginTop:"20px", color:"#FD866E"}}/>
            <Formurario
                type={"text"}
                name="url"
                onChange={formik3.handleChange}
                value={formik3.values.url}
                />
          </FormularioAgregar>
          <p className={errMsgImg ? "errMesg" : "offscreen"}>{errMsgImg}</p>
          <BotonFormurario>
            <Button text="Agregar imagen" fullwidth type="submit"/>
          </BotonFormurario>
          </BloqueFormurario>
      
        {/* Formurario de creacion de politicas */}
        
          <Text style={{textAlign: "center"}} type="h2" color="secondary" text="Agregar políticas" />

          <BloqueFormurario onSubmit={formik4.handleSubmit}>
          <FormularioAgregar>
            <CustomSelect
              options={optionsPoliciesType}
              placeholder="Seleccione el tipo de política"
              value={formik4.values.policy}
              onChange={(value) => formik4.setFieldValue("policy", value.value)}
            />
          </FormularioAgregar>
          <p className={errMsgPolitica ? "errMesg" : "offscreen"}>{errMsgPolitica}</p>
          <BotonFormurario>
            <Button text="Agregar política" fullwidth type="submit" />
          </BotonFormurario>
          </BloqueFormurario>
        
        </ContenedorFormurarios>
      </ReservaStyle>
    </>
  );
}
