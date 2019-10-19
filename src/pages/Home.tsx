import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon} from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
      <ion-column>
      	<ion-col height-50 style ="text-align: top">
	  <IonButton size= "large">
	  Login
	  </IonButton>
	  </ion-col>
	  <br></br>
	   <IonButton href="Register"> Register </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
