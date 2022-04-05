import { IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DispContacts from '../components/DispContacts';



const Home: React.FC<{props:any}> = (props) => {
  console.log(props)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle>Address Book</IonTitle>
          <IonButton>Sort Last Name A-Z</IonButton>
          <IonButton>Sort First Name Z-A</IonButton>
          <IonButton>Sort by Phone Number</IonButton>
          <IonButton>Sort Email A-Z</IonButton>
          <IonButton>Sort Email Z-A</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent color="primary" >
        <IonList>
          <DispContacts props={props}/>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
