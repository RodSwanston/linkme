import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
} from '@ionic/react'

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Search
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonSearchbar />

        <IonList>
          <IonItem button>
            <IonAvatar className="avatar-big" slot="start">
              <img src="https://picsum.photos/300" alt="connection" draggable={false} />
            </IonAvatar>
            <IonLabel>
              <h2>Han</h2>
              <h3>Great!</h3>
            </IonLabel>
          </IonItem>
          <IonItem button>
            <IonAvatar className="avatar-big" slot="start">
              <img src="https://picsum.photos/300" alt="connection" draggable={false} />
            </IonAvatar>
            <IonLabel>
              <h2>Solo</h2>
              <h3>Well...</h3>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Tab4
