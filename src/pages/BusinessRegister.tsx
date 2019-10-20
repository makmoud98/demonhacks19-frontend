import { IonInput, IonLabel, IonContent, IonPage, IonButton} from '@ionic/react';
import React from 'react';

const BusinessRegister: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
		<IonLabel>E-mail*</IonLabel>
		<IonInput placeholder="Enter Email"></IonInput>
		<IonLabel>Password*</IonLabel>
		<IonInput placeholder="Enter Password"></IonInput>
		<IonLabel>Company*</IonLabel>
		<IonInput placeholder="Enter Company Name"></IonInput>
		<IonLabel>Info*</IonLabel>
		<IonInput placeholder="Describe your Company"></IonInput>
		<IonLabel>Interests*</IonLabel>
		<IonInput placeholder="i.e (coffee shop, fast food, auto parts....)"></IonInput>
		<IonButton size="large" color="tertiary" shape="round" fill="outline" href="BusinessDash">
		Submit
		</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default BusinessRegister;