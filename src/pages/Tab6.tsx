import React from 'react'
import {
  IonContent,
  IonPage
} from '@ionic/react'

import Logo from '../assets/logo.png'
import './Tab6.css'

const Tab6: React.FC = () => {
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

          <div style={{ display: 'flex', placeContent: 'center', placeItems: 'center', placeSelf: 'center', marginTop: 20, textAlign: 'initial' }}>
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img className="google-icon" alt="GoogleLogo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
              </div>
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
            </div>
          </div>
        </div>

      </IonContent>
    </IonPage>
  )
}

export default Tab6
