import React, { useContext, useEffect, useState } from 'react'
import CalendarioReservas from '../../components/molecules/CalendarioReservas'
import { CajaImagen, DetalleReserva, FormularioDatos, Formurario, Formurario2, Horario, FormularioHorario, Imagen, Titulo, DatosReserva, ReservaStyle, Header, Politicas, TituloPoliticas, CheckInOut, DatosProducto, BotonReserva } from '../../styles/ReservaStyle'
import Text from '../../components/atoms/Text'
import Button from '../../components/atoms/Button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Arrow from "../../assets/arrow.svg";
import { getProductById } from '../../services/Products'
import { UserContext } from '../../services/UserContext'
import { api } from '../../services/api/api'
import dayjs from "dayjs"; // ES 2015
import "../../styles/DetallesProducto.css"

export default function Reserva() {
    const { id } = useParams();
    const { dataProduct, setDataProduct, user, idProduct, dateValue } = useContext(UserContext)
    const [fechasOcupadas, setFechasOcupadas] = useState([]);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const formatDateApi = (date) => {
        return dayjs(date).format("YYYY-MM-DD");
    };

    const selectDate = (num) => {
        if(dateValue === null || dateValue === undefined) {
            return ""
        } else {
            return formatDateApi(dateValue[num]) 
        }
    }
    
    let checkInInfo = selectDate(0);
    let checkOutInfo = selectDate(1)

    const [reservation, setReservation] = useState({
        checkInTime: "14:00",
        checkInDate: checkInInfo,
        checkOutDate: checkOutInfo,
        product: null,
        bookingUser: null
    });

    const formatDate = (date) => {
        return dayjs(date).format("DD-MM-YYYY");
    };

    const getData = async () => {
        const resp = await getProductById(id);
        setDataProduct(resp);

        let dates = resp.bookings.map((item) => {
            return {
                checkIn: item.checkInDate,
                checkOut: item.checkOutDate,
            };
        });
        setFechasOcupadas(dates);
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    useEffect(() => {
        setReservation({
            ...reservation,
            product: {id: idProduct || id },
            bookingUser: {id: user.userData.id}
            // product: {id: 2},
            // bookingUser: {id: 9}
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    

    const handleReservation = async (e) => {
        e.preventDefault()
        setReservation({
            ...reservation,
            // product: {id: 3},
            // bookingUser: {id: 8}
        })

        try {
            const resp = await api.post("/bookings/add", JSON.stringify(reservation),
            {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`
                }
            }
            )

            if(resp.status === 200) {
                navigate("/reserva-exitosa")
            }
        } catch (error) {

        }
    }

  return (
    <ReservaStyle>
        <Header>
        <div>
            <Text
                type="h4"
                color="white"
                text={dataProduct?.category?.title}
            />
            <Text type="h1" color="white" text={dataProduct.title}/>
        </div>
        <div>
            <Link to={`/products/${id}`}>
                <img style={{width: "30px"}} src={Arrow} alt="arrow" />
            </Link>
        </div>
        </Header>
    <DatosReserva>
        <Text style={{gridColumn: "1 / 3", marginBottom: "15px"}} type="h1" color='secondary' text="Completá tus datos"/>
        <FormularioDatos>
            <div>
            <label>
            <Text type="p1" color='secondary' text="Nombre"/>
            </label>
            <Formurario type="text" defaultValue={user ? user.userData.name : ""} disabled/>
            </div>

            <div>
            <label>
            <Text type="p1" color='secondary' text="Apellido"/>
            </label>
            <Formurario type={"text"} defaultValue={user ? user.userData.lastName : ""} disabled/>
            </div>

            <div>
            <label>
            <Text type="p1" color='secondary' text="Correo electronico"/>
            </label>
            <Formurario type={"email"} defaultValue={user ? user.userData.email : ""} disabled/>
            </div>
            
            <div>
            <label>
            <Text type="p1" color='secondary' text="Ciudad"/>
            </label>
            <Formurario2 type={"text"} placeholder="Ciudad"/>   
            </div>
            
        </FormularioDatos>

        <div style={{marginTop: "15px", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div>
                <Text type="h1" color='secondary' text="Seleccioná tu fecha de reserva"/>
            </div>
            <CalendarioReservas
                fechasOcupadas={fechasOcupadas}
            />
        </div>

        <Text type="h1" color='secondary' text="Tu horario de llegada"/>
        <Horario>
            <Text type="h4" color='secondary' text="Tu habitación va estar lista para el check-in entre las 10:00 AM y las 11:00 PM"/><br />
           <div>
           <label htmlFor="">Indicá tu horario estimado de llegada</label><br />
            <FormularioHorario type={"time"} />
           </div>
        </Horario>


        <DetalleReserva>
            <Titulo>
                <Text type="h1" color='secondary' text="Detalle de la reserva"/>
            </Titulo>
            <CajaImagen>
                <Imagen src={dataProduct.mainPictureUrl} alt="{dataProduct.title}"/>
            </CajaImagen>
            <div>
            <DatosProducto>
                <Text type="h2" color='secondary' text={dataProduct?.category?.title}/>
                <Text style={{marginBottom: "10px"}} type="h1" color='secondary' text={dataProduct.title}/>
                <Text type="p1" color="secondary" text={dataProduct.address}/>
                <Text type="p1" color='secondary' text={`${dataProduct?.city?.name}, ${dataProduct?.city?.country?.name}`}/>
            </DatosProducto>
            <CheckInOut>
                <Text type="h3" color='secondary' text="Check in"/>
                <Text type="p1" color='secondary' text={formatDate(dateValue[0])}/>
            </CheckInOut>
            <CheckInOut>
                <Text type="h3" color='secondary' text="Check out"/>
                <Text type="p1" color='secondary' text={formatDate(dateValue[1])}/>
            </CheckInOut>
            <BotonReserva>
                <Button text="Confirmar reserva" click={handleReservation} fullwidth />
            </BotonReserva>
            </div>
        </DetalleReserva>
    </DatosReserva>

    <Politicas>
        <TituloPoliticas>
            <Text type="h1" color="secondary" text="Qué tenes que saber" />
        </TituloPoliticas>
        <div className="BloqueDePoliticas">
            <div>
                <div className="politicas">
                <Text
                type="h3"
                color="secondary"
                text="Normas de la casa"
                />
                </div>
                <ul>
                    {dataProduct?.policiesXProducts
                        ?.filter(
                            (item) =>
                                item?.policy?.policyType?.name ===
                                "Normas de la casa"
                            )
                        .map((item) => (
                            <li className="listaPoliticas" key={item.id}>
                                {item?.policy?.description}
                            </li>
                        ))}
                </ul>
            </div>
            <div>
                <div className="politicas">
                <Text
                type="h3"
                color="secondary"
                text="Política de cancelación"
                />
                </div>
                <ul>
                    {dataProduct?.policiesXProducts
                        ?.filter(
                            (item) =>
                                item?.policy?.policyType?.name ===
                                "Política de cancelación"
                        )
                        .map((item) => (
                            <li className="listaPoliticas" key={item.id}>
                                {item?.policy?.description}
                            </li>
                    ))}
                </ul>
            </div>
            <div>
                <div className="politicas">
                <Text
                type="h3"
                color="secondary"
                text="Salud y seguridad"
                />
                </div>
                <ul>
                    {dataProduct?.policiesXProducts
                        ?.filter(
                            (item) =>
                                item?.policy?.policyType?.name ===
                                "Salud y seguridad"
                            )
                        .map((item) => (
                            <li className="listaPoliticas" key={item.id}>
                                {item?.policy?.description}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    </Politicas>

    </ReservaStyle>
  )
}
