import React, { useState, useEffect, JSXElementConstructor } from 'react';
import { IonItem } from '@ionic/react';
import Home from '../pages/Home';


function DispContacts(props:any)
{   console.log(props)
    return(
        props.map((x:any) => {
        return(
          <IonItem>
              {x}
          </IonItem>
        );})
        )
};


export default DispContacts;




