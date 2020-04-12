import React, { useState } from 'react'
import {
  IonContent,
  IonPage,
  IonInput,
  IonLabel,
  IonList,
  IonItem,
  IonButton,
  IonToast
} from '@ionic/react'

import { useAuth } from '../../components/AuthProvider'
import firebase from '../../utils/firebaseConfig'

import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Singup: React.FC = () => {
  const { setUser } = useAuth()
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const signup = async (e: any) => {
    e.preventDefault()
    if (password !== password2) {
      setError('Wrong Password')
      return
    }
    try {
      const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
      setUser(res.user || {})
    } catch (error) {
      setError(error.message || error)
    }
  }

  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <img
            src={Logo} alt="logo" draggable={false}
            style={{ height: 200, width: 200 }}
          />
          <br/>
          <strong>LinkMe</strong>
          <br/>
          <br/>
          <form onSubmit={signup} style={{ display: 'flex', flexDirection: 'column', placeItems: 'center', placeContent: 'center' }}>
            <IonList style={{ width: '70%', borderRadius: 4 }}>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput
                  required
                  color="primary"
                  type="email"
                  value={email}
                  onIonChange={e => setEmail(e.detail.value!)}
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput
                  required
                  color="primary"
                  type="password"
                  value={password}
                  onIonChange={e => setPassword(e.detail.value!)}
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Confirm Password</IonLabel>
                <IonInput
                  required
                  color="primary"
                  type="password"
                  value={password2}
                  onIonChange={e => setPassword2(e.detail.value!)}
                />
              </IonItem>
            </IonList>
            <div style={{ height: 20 }} />
            <IonButton type="submit" style={{ width: '70%' }} expand="block" color="primary">
              Singup
            </IonButton>
            <Link to="/" style={{ width: '70%' }}>
              <IonButton type="button" style={{ width: '100%' }} fill="clear" color="primary">
                Singin
              </IonButton>
            </Link>
          </form>
        </div>
        <IonToast
          isOpen={Boolean(error)}
          message={error}
          onDidDismiss={() => setError('')}
          duration={5000}
          position="top"
        />
      </IonContent>
    </IonPage>
  )
}

export default Singup
