import React from 'react'
import { IonLoading, IonContent } from '@ionic/react'

export function Loading() {
  return (
    <IonContent>
      <IonLoading isOpen={true} />
    </IonContent>
  )
}