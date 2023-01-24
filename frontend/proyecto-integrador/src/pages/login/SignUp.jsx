// Esta es la hoja de Crear cuenta

import React, { useState } from "react";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../../styles/Form.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { api } from "../../services/api/api";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const formik = useFormik ({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      city: 1,
      role: 1
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Campo Requerido"),
      lastName: Yup.string().required("Campo Requerido"),
      email: Yup.string().email("Ingresar email valido").required("Campo Requerido"),
      password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Campo Obligatorio")
      .matches(
        /^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{6,}$/,
        "La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial"
      ),
      password2: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Campo Obligatorio")
      .oneOf([Yup.ref('password'), null], "La constraseña no coincide")
      .matches(
        /^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{6,}$/,
        "La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial"
      )
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit(values){
      handleRegistration(values);
    }
  });

  const handleRegistration = async (values) => {
    const userData = {
      name: values.name,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      city: {id: values.city},
      role: {id: values.role}
    }

    try{
      const resp = await api.post("/auth/register", JSON.stringify (userData),
      {
        headers: {'Content-Type': 'application/json'}
      }
      )

      if(resp.status === 200) {
        setErrMsg("El email ya existe")
      } else if(resp.status === 201) {
        navigate("/sign-in");
      }
      
    } catch (error) {
      if(error.response.status === 400) {
        setErrMsg("El usuario ya se encuentra registrado")
      } else {
      setErrMsg("Lamentablemente no ha podido registrarse. Por favor intente más tarde")
      }
    }

  };

return (
    <section className="formurarios" >
        <div style={{ padding: "100px 10px" }}>
        <p className={errMsg ? "errMesg" : "offscreen"}>{errMsg}</p>
        <div className="titulo">
          <Text type="h1" color="primary" text="Crear cuenta" />
        </div>

        <form onSubmit={formik.handleSubmit}>
        <div className="nombre">
            <div>
              <div className="label">
              <Text type="p2" color="secondary" text="Nombre" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name='name'
                  onChange={formik.handleChange}
                  value={formik.values.name}  
                />
                { formik.errors.name && <p className="msg-error">{formik.errors.name}</p>}
              </div>
            </div>
            <div>
              <div className="label">
              <Text type="p2" color="secondary" text="Apellido" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name='lastName'
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                { formik.errors.lastName && <p className="msg-error">{formik.errors.lastName}</p>}
              </div>
            </div>
        </div>
        <div>
            <div className="label">
                <Text
                    type="p2"
                    color="secondary"
                    text="Correo electrónico"
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && (
                    <p className="msg-error">
                        {formik.errors.email}
                    </p>
                )}
            </div>
        </div>
        <div className="password">
            <div className="label">
                <Text
                    type="p2"
                    color="secondary"
                    text="Contraseña"
                />
            </div>
            <div>
            <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.errors.password && (
                <p className="msg-error">
                    {formik.errors.password}
                </p>
            )}
            {showPassword === false ? (
                <VisibilityOffIcon
                className="visibility"
                onClick={() => {
                    setShowPassword(!showPassword);
                }}
                />
            ) : (
                <VisibilityIcon
                className="visibility"
                onClick={() => {
                setShowPassword(!showPassword);
                }}
                />
            )}
            </div>
        </div>
            <div>
                <div className="label">
                    <Text
                        type="p2"
                        color="secondary"
                        text="Confirmar contraseña"
                    />
                </div>
                <div>
                <input
                    type={showPassword ? "text" : "password"}
                    name="password2"
                    onChange={formik.handleChange}
                    value={formik.values.password2}
                />
                {formik.errors.password2 && (
                    <p className="msg-error">
                        {formik.errors.password2}
                    </p>
                )}
                </div>
            </div>
                <div className="boton">
                    <Button text="Crear cuenta" width="s" type="submit" />
                </div>
        </form>
        <div className="texto-cuenta">
            <p>
                ¿Ya tienes una cuenta?{" "}
                <Link to={"/sign-in"}>Iniciar sesión</Link>
            </p>
        </div>
        </div>
    </section>
    );
}

export default SignUp;
