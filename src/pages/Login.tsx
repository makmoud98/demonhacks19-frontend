import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonInput,IonLabel} from '@ionic/react';
import React from 'react';
const Login: React.FC = () => {
  return (
  	<IonPage>
      <IonContent className="ion-padding">
		<IonLabel>Email:</IonLabel>
		<IonInput placeholder= "email"></IonInput>
		<IonLabel>Password: </IonLabel>
		<IonInput placeholder= "Password"></IonInput>
		<IonButton>SignIn </IonButton>	
      </IonContent>
    </IonPage>
  );
};

export default Login;
