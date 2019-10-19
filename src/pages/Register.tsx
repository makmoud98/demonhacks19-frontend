import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon} from '@ionic/react';
import React from 'react';

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
		<IonButton href="CustomerRegister">
		Customer
		</IonButton>
			<br></br>
		<IonButton>
		Business
		</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
