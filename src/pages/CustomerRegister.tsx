import { IonInput, IonLabel, IonContent, IonPage, IonButton} from '@ionic/react';
import React from 'react';

const CustomerRegister: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
		<IonLabel>E-mail*</IonLabel>
		<IonInput placeholder="Enter Email"></IonInput>
		<IonLabel>Password*</IonLabel>
		<IonInput placeholder="Enter Password"></IonInput>
		<IonLabel>Age*</IonLabel>
		<IonInput placeholder="Enter Age"></IonInput>
		<IonLabel>Gender</IonLabel>
		<IonInput placeholder="Enter Gender"></IonInput>
		<IonButton>
		Submit
		</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CustomerRegister;
