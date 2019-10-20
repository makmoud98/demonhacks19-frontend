import { IonContent, IonPage, IonButton, IonInput, IonLabel} from '@ionic/react'
import { Redirect } from 'react-router-dom'
import React from 'react'
import axios from 'axios'

class BusinessRegister extends React.Component {
  state : any;

  constructor() {
    super({});
    this.state = {'email': '', 'password': ''};
  }
  
  onClick = () => {
    axios.post("https://vps258740.vps.ovh.ca/api/auth/register/business", this.state).then(res => {
      if(res.status === 200){
        console.log('success!')
        return <Redirect to='/businessdash'/>
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
          <IonLabel>Company*</IonLabel>
          <IonInput 
            id="name"
            onIonChange={this.onInputChange}
            placeholder="Enter Company Name"></IonInput>
          <IonLabel>Info*</IonLabel>
          <IonInput 
            id="info"
            onIonChange={this.onInputChange}
            placeholder="Describe your Company"></IonInput>
          <IonLabel>Interests*</IonLabel>
          <IonInput 
            id="interests"
            onIonChange={this.onInputChange}
            placeholder="i.e (coffee shop, fast food, auto parts....)"></IonInput>
          <IonButton size="large" color="tertiary" shape="round" fill="outline" href="BusinessDash" onClick={this.onClick}>
            Submit
          </IonButton>
        </IonContent>
      </IonPage>
    )
  }
}

export default BusinessRegister;