import React from "react";
import Text from "./Text";
import {Contenedor, UserInitials} from '../../styles/atoms/AvatarStyle';


function Avatar({name, initials}) {

  return (
    <>
      <Contenedor>
        <UserInitials>
          {/*TODO: Arreglar para traer las inicailes */}
          <Text type="h2" color="white" text={initials.toUpperCase()} />
        </UserInitials>
        <div>
            <Text type="h3" color="secondary" text="Hola," />
            <Text type="h3" color="secondary" text={name} />
        </div>
      </Contenedor>
    </>
  );
}

export default Avatar;
