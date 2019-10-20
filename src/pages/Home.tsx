import { IonContent, IonPage, IonButton} from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
	  <IonButton size= "large" color="tertiary" shape="round" fill="outline" href="Login">Login</IonButton>
	  <br></br>
	   <IonButton size= "large" color="tertiary" shape="round" fill="outline" href="Register"> Register </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
