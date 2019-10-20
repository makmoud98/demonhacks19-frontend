import { IonInput, IonLabel, IonContent, IonPage, IonButton} from '@ionic/react';
import { Redirect } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
 


 
class CustomerRegister extends React.Component {
  state : any;

  constructor() {
    super({});
    this.state = {'email': '', 'password': ''};
  }
  
  onClick = () => {
    axios.post("https://vps258740.vps.ovh.ca/api/auth/register/customer", this.state).then(res => {
      if(res.status === 200){
        console.log('success!')
        return <Redirect to='/CustomerDashboard'/>
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
          <IonLabel>E-mail*</IonLabel>
          <IonInput 
            id="email"
            onIonChange={this.onInputChange}
            placeholder="Enter Email"></IonInput>
          <IonLabel>Password*</IonLabel>
          <IonInput 
            id="password"
            onIonChange={this.onInputChange}
            placeholder="Enter Password"></IonInput>
          <IonButton size="large" color="tertiary" shape="round" fill="outline" href="BusinessDash" onClick={this.onClick}>
            Submit
          </IonButton>
        </IonContent>
      </IonPage>
    )
  }
}

export default CustomerRegister;