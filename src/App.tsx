import React, { lazy } from 'react'
import { IonReactRouter } from '@ionic/react-router'
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonIcon,
  IonTabButton,
  IonAvatar,
} from '@ionic/react'
import {
  homeOutline,
  bookOutline,
  scanOutline,
  searchOutline
} from 'ionicons/icons'

import { useAuth } from './components/AuthProvider'

import { AuthProvider } from './components/AuthProvider'
import { LazySuspense } from './components/LazySuspense'
import { RouteView } from './components/RouteView'

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

const Login = lazy(() => import('./pages/login/login'))
const Home = lazy(() => import('./pages/home/Home'))
const Connections = lazy(() => import('./pages/connections/Connections'))
const Scan = lazy(() => import('./pages/scan/Scan'))
const Search = lazy(() => import('./pages/search/Search'))
const Profile = lazy(() => import('./pages/profile/Profile'))

const avatarStyle = {
  height: 30,
  width: 30,
  padding: 1,
  border: 'solid 1px'
}

function AppRouter() {
  const { token } = useAuth()

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <RouteView isPrivate={false} path="/" component={Login} exact={true} />
          <RouteView path="/home" component={Home} exact={true} />
          <RouteView path="/connections" component={Connections} exact={true} />
          <RouteView path="/scan" component={Scan} exact={true} />
          <RouteView path="/search" component={Search} exact={true} />
          <RouteView path="/profile" component={Profile} exact={true} />
        </IonRouterOutlet>
        
        {!token
          ? (<IonTabBar slot="bottom" />)
          : (
              <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home">
                  <IonIcon icon={homeOutline} />
                </IonTabButton>
                <IonTabButton tab="connections" href="/connections">
                  <IonIcon icon={bookOutline} />
                  {/*<IonBadge color="primary">3</IonBadge>*/}
                </IonTabButton>
                <IonTabButton tab="scan" href="/scan">
                  <IonIcon icon={scanOutline} />
                </IonTabButton>
                <IonTabButton tab="search" href="/search">
                  <IonIcon icon={searchOutline} />
                </IonTabButton>
                <IonTabButton tab="profile" href="/profile">
                  <IonAvatar style={avatarStyle}>
                    <img alt="user" src="https://picsum.photos/100" draggable={false} />
                  </IonAvatar>
                </IonTabButton>
              </IonTabBar>
          )
        }
      </IonTabs>
    </IonReactRouter>
  )
}

const App: React.FC = () => (
  <IonApp>
    <AuthProvider>
      <LazySuspense>
        <AppRouter />
      </LazySuspense>
    </AuthProvider>
  </IonApp>
)

export default App
