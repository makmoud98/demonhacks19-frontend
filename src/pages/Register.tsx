import { IonContent, IonPage, IonButton} from '@ionic/react';
import React from 'react';

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
		<IonButton size="large" color="tertiary" shape="round" fill="outline" href="CustomerRegister">
		Customer
		</IonButton>
			<br></br>
		<IonButton size="large" color="tertiary" shape="round" fill="outline" href="BusinessRegister">
		Business
		</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
