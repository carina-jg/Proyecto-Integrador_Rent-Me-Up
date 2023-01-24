import React, { useContext, useEffect, useState } from 'react';
import Button from '../atoms/Button';
import Avatar from "../atoms/Avatar";
import { AvatarUser, BotonesIC, ContenedorMenu, Titulo } from '../../styles/MenuStyle';
import Text from '../atoms/Text';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../services/UserContext";

function Menu({showBtnRegister = true , setShowBtnRegister, showBtnSignIn, setShowBtnSignIn}) {
    const [ tablet, setTablet ] = useState(true);
    const {user, setUser, idProduct} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const responsive = () => window.innerWidth >= 768 ? setTablet(true) : setTablet(false)
        responsive();
        window.addEventListener("resize", ()=>responsive())
    }, [])

    const handleClickLogout = () => {
        setUser(null);
        localStorage.clear("token", idProduct)
        navigate("/");
        setShowBtnSignIn(true);
        setShowBtnRegister(true);
    }

  return (
    <ContenedorMenu>
        {
            tablet ? null
            : <Titulo>
                {
                    user === null ?
                    <Text type="h2" color="white" text="MENÚ" />
                    : <Avatar name={user.userData.name} lastName={user.userData.lastName} initials={`${user.userData.name[0]}${user.userData.lastName[0]}`}/>
                }  
            </Titulo>
        }

        {
            user === null ?
            <BotonesIC>
            {
                showBtnRegister ?
                <div>            
                {
                    tablet ? <Button
                    text="Crear cuenta"
                    type="Outline"
                    width="xs"
                    click={() => {
                        navigate("/sign-up")
                        setShowBtnRegister(false);
                        setShowBtnSignIn(true);
                    }}
                    />
                    : <Button
                    text="Crear cuenta"
                    type="text"
                    fullwidth
                    click={() => {
                        navigate("/sign-up")
                        setShowBtnRegister(false);
                        setShowBtnSignIn(true);
                    }}
                    />
                }
                </div> : null 
            }

            {
                showBtnRegister && showBtnSignIn ?
                <div>
                {
                    tablet ? null
                    : <hr
                    style={{
                    height: "1px",
                    width: "95%",
                    backgroundColor: "#545776",
                    margin: "auto",
                    }}
                    />
                }
                </div> : null
            }
            
            {
                showBtnSignIn ?
                <div>
                {
                    tablet ? <Button
                    text="Iniciar sesión"
                    type="Outline"
                    width="xs"
                    click={() => {
                        navigate("/sign-in")
                        setShowBtnSignIn(false);
                        setShowBtnRegister(true);
                    }}
                    />
                    : <Button
                    text="Iniciar sesión" 
                    type="text"
                    fullwidth
                    click={() => {
                        navigate("/sign-in")
                        setShowBtnSignIn(false);
                        setShowBtnRegister(true);
                    }}
                    />
                }
                </div> : null
            }
            </BotonesIC> :
            <AvatarUser>
            {
                user.userData.role.id === 2 ?
                <Button
                text="Administración"
                // type="Outline"
                width='xs'
                click={() => {
                navigate("/administracion")
                }}
                /> : null
            } 

                
            {
                tablet ? <Avatar name={`${user.userData.name} ${user.userData.lastName}`} initials={`${user.userData.name[0]}${user.userData.lastName[0]}`}/>
                : null
            }
        
            {
                tablet ? <Button
                text="Cerrar sesión"
                type="Outline"
                width="xs"
                click={handleClickLogout}
                />
                : <Button
                text="Cerrar sesión" 
                type="Outline"
                width="xs"
                // fullwidth
                click={handleClickLogout}
                /> 
            }            
            </AvatarUser>
        }
    </ContenedorMenu>
  )
}

export default Menu