import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonAvatar,
  IonBadge
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { homeOutline, bookOutline, scanOutline, searchOutline } from 'ionicons/icons'

import Tab1 from './pages/Tab1'
import Tab2 from './pages/Tab2'
import Tab3 from './pages/Tab3'
import Tab4 from './pages/Tab4'
import Tab5 from './pages/Tab5'
import Tab6 from './pages/Tab6'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import './theme/global.css'

const avatarStyle = {
  height: 30,
  width: 30,
  padding: 1,
  border: 'solid 1px'
}

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Tab1} exact={true} />
          <Route path="/connections" component={Tab2} exact={true} />
          <Route path="/scan" component={Tab3} exact={true} />
          <Route path="/search" component={Tab4} exact={true} />
          <Route path="/profile" component={Tab5} exact={true} />
          <Route path="/login" component={Tab6} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
          </IonTabButton>
          <IonTabButton tab="connections" href="/connections">
            <IonIcon icon={bookOutline} />
            <IonBadge color="primary">3</IonBadge>
          </IonTabButton>
          <IonTabButton tab="scan" href="/scan">
            <IonIcon icon={scanOutline} />
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={searchOutline} />
          </IonTabButton>
          <IonTabButton tab="login" href="/login">
            <IonIcon icon={searchOutline} />
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonAvatar style={avatarStyle}>
              <img alt="user" src="https://picsum.photos/100" draggable={false} />
            </IonAvatar>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)

export default App
