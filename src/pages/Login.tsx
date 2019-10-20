import { IonContent, IonPage, IonButton, IonInput, IonLabel} from '@ionic/react'
import React from 'react'
import axios from 'axios'

class Login extends React.Component {
  state : any;

  constructor() {
    super({});
    this.state = {email: '', password: ''};
  }
  
  onClick = () => {
    axios.post("https://vps258740.vps.ovh.ca/api/auth/login", {
      email: "test@test.com", password: "password"
    }).then(res => {
      if(res.status === 200){
        console.log('success!')
      }
    })
  }

  render() {
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <IonLabel>E-mail:</IonLabel>
          <IonInput placeholder= "email"></IonInput>
          <IonLabel>Password: </IonLabel>
          <IonInput placeholder= "password"></IonInput>
          <IonButton size="large" color="tertiary" shape="round" fill="outline" onClick={this.onClick}>Sign In </IonButton> 
        </IonContent>
      </IonPage>
    )
  }
}

export default Login;