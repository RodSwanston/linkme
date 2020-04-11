import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonButtons,
  IonButton
} from '@ionic/react'

import './Connections.css'

const Connections: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Connections
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonSearchbar />

        <IonToolbar >
          <IonTitle>
            Requests {' '}
            <IonText color="primary">3</IonText>
          </IonTitle>
        </IonToolbar>
        <IonList>
          <IonItem button>
            <IonAvatar className="avatar-big" slot="start">
              <img src="https://picsum.photos/200" alt="connection" draggable={false} />
            </IonAvatar>
            <IonLabel>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Link: Confirm First</p>
              <IonButtons slot="end">
                <IonButton fill="solid" size="small" color="primary">
                  Confirm
                </IonButton>
                <IonButton fill="solid" size="small">
                  Delete
                </IonButton>
              </IonButtons>
            </IonLabel>
          </IonItem>
          <IonItem button>
            <IonAvatar className="avatar-big" slot="start">
              <img src="https://picsum.photos/200" alt="connection" draggable={false} />
            </IonAvatar>
            <IonLabel>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Link: Confirm First</p>
              <IonButtons slot="end">
                <IonButton fill="solid" size="small" color="primary">
                  Confirm
                </IonButton>
                <IonButton fill="solid" size="small">
                  Delete
                </IonButton>
              </IonButtons>
            </IonLabel>
          </IonItem>
          <IonItem button>
            <IonAvatar className="avatar-big" slot="start">
              <img src="https://picsum.photos/200" alt="connection" draggable={false} />
            </IonAvatar>
            <IonLabel>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Link: Confirm First</p>
              <IonButtons slot="end">
                <IonButton fill="solid" size="small" color="primary">
                  Confirm
                </IonButton>
                <IonButton fill="solid" size="small">
                  Delete
                </IonButton>
              </IonButtons>
            </IonLabel>
          </IonItem>
        </IonList>

        <IonToolbar>
          <IonTitle>
            Connected
          </IonTitle>
        </IonToolbar>
        <IonList>
          <IonItem button>
            <IonAvatar className="avatar-big" slot="start">
              <img src="https://picsum.photos/200" alt="connection" draggable={false} />
            </IonAvatar>
            <IonLabel>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Link: Standar QR</p>
            </IonLabel>
          </IonItem>
          <IonItem button>
            <IonAvatar className="avatar-big" slot="start">
              <img src="https://picsum.photos/200" alt="connection" draggable={false} />
            </IonAvatar>
            <IonLabel>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Link: Standar QR</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Connections
