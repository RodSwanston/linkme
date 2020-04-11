import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonBadge,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react'
import { giftOutline, createOutline } from 'ionicons/icons'

import Logo from '../../assets/logo.png'
import QRImage from '../../assets/qr-test.png'
import './Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div style={{ display: 'flex'}}>
              <img alt="logo" style={{ height: 30, width: 30 }} src={Logo} draggable={false} />
              <span style={{ marginLeft: 4, marginTop: 4 }}>
                LinkMe
              </span>
            </div>
          </IonTitle>
          <IonButtons slot="secondary">
            <IonButton>
              <IonIcon slot="icon-only" color="primary" icon={giftOutline} />
              <IonBadge color="secondary">AD</IonBadge>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div style={{ marginTop: 30, marginBottom: 30, display: 'flex', placeContent: 'center' }}>
          <img
            src={QRImage} alt="QR" draggable={false}
            style={{ height: 200, width: 200, borderRadius: 20, boxShadow: '0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)' }}
          />
        </div>

        <IonToolbar>
          <IonTitle>Shareable Links</IonTitle>
          <IonButtons slot="secondary">
            <IonButton color="primary">
              <IonIcon slot="icon-only" icon={createOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>

        <IonList>
          <IonItem button>
            <IonLabel>Mail Campain</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Confirm First</IonLabel>
            <IonBadge color="primary">3</IonBadge>
          </IonItem>
          <IonItem button>
            <IonLabel>With Expiration Time</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Pac-Man</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Just get my info</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Home
