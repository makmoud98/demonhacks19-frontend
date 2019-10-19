import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon} from '@ionic/react';
import React from 'react';
const Login: React.FC = () => {
  return (
  	<IonPage>
      <IonContent className="ion-padding">
		
		<IonLabel>Email:</IonLabel>
		<IonInput type= "text" email= "email"></IonInput>
		<IonLabel>Password: </IonLabel>
		<IonInput type= "text" Password= "Password"></IonInput>
		<IonButton ="SignIn" </IonButton>



				
      </IonContent>
    </IonPage>
  );
};

export default Register;
