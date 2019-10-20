import { IonContent, IonPage, IonButton, IonInput, IonLabel} from '@ionic/react'
import React from 'react'
import axios from 'axios'

class Login extends React.Component {
  state : any;

  constructor() {
    super({});
    this.state = {'email': '', 'password': ''};
  }
  
  onClick = () => {
    axios.post("https://vps258740.vps.ovh.ca/api/auth/login", this.state).then(res => {
      if(res.status === 200){
        console.log('success!')
        var type = res.data.type;
        if(type == 'consumer'){
          return <Redirect to='/target' />
        }
        else if(type == 'business'){

        }
        else{

        }
      }
    })
  }

  onInputChange = (e) => {
    var key = e.target.id
    var val = e.target.value
    this.setState({[key]: val})
    console.log(this.state)
  }

  render() {
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <IonLabel>E-mail:</IonLabel>
          <IonInput 
            id="email"
            onIonChange={this.onInputChange}
            placeholder="email"/>
          <IonLabel>Password: </IonLabel>
          <IonInput 
            id="password"
            onIonChange={this.onInputChange}
            placeholder="password"/>
          <IonButton size="large" color="tertiary" shape="round" fill="outline" onClick={this.onClick}>Sign In </IonButton> 
        </IonContent>
      </IonPage>
    )
  }
}

export default Login;