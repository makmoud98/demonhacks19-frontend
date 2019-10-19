import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon} from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
	  <IonButton size= "large">
	  Login
	  </IonButton>
	  <br></br>
	   <IonButton size= "large">
	  Register
	  </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
