import { IonInput, IonItem, IonLabel,IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon} from '@ionic/react';
import React from 'react';

const CustomerRegister: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
		<IonLabel>E-mail*</IonLabel>
		<IonInput type="email" placeholder="Enter Email"></IonInput>
		<IonLabel>Password*</IonLabel>
		<IonInput type="text" placeholder="Enter Password"></IonInput>
		<IonLabel>Age*</IonLabel>
		<IonInput type="number" placeholder="Enter Age"></IonInput>
		<IonLabel>Gender</IonLabel>
		<IonInput type="text" placeholder="Enter Gender"></IonInput>
		<IonButton>
		Submit
		</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CustomerRegister;
