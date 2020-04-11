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
  IonList,
  IonItem,
  IonLabel,
  IonAvatar
} from '@ionic/react'
import {
  settingsOutline,
  createOutline,
  globeOutline,
  mailOutline,
  logoWhatsapp,
  linkOutline,
  logoDribbble,
  logoFacebook,
  logoGithub,
  logoInstagram,
  logoLinkedin,
  logoPinterest,
  logoPlaystation,
  logoReddit,
  logoSkype,
  logoSlack,
  logoSnapchat,
  logoStackoverflow,
  logoSteam,
  logoTumblr,
  logoTwitch,
  logoTwitter,
  logoXbox,
  logoYoutube
} from 'ionicons/icons'

const linkIcons = [
  {
    icon: globeOutline,
    text: 'My Web'
  },
  {
    icon: mailOutline,
    text: 'Email'
  },
  {
    icon: logoWhatsapp,
    text: 'Phone Number'
  },
  {
    icon: linkOutline,
    text: 'Web Link'
  },
  {
    icon: logoDribbble,
    text: 'Dribbble'
  },
  {
    icon: logoFacebook,
    text: 'Facebook'
  },
  {
    icon: logoGithub,
    text: 'Github'
  },
  {
    icon: logoInstagram,
    text: 'Instagram'
  },
  {
    icon: logoLinkedin,
    text: 'LinkedIn'
  },
  {
    icon: logoPinterest,
    text: 'Pinterest'
  },
  {
    icon: logoPlaystation,
    text: 'PlayStation ID'
  },
  {
    icon: logoReddit,
    text: 'Reddit'
  },
  {
    icon: logoSkype,
    text: 'Skype'
  },
  {
    icon: logoSlack,
    text: 'Slack'
  },
  {
    icon: logoSnapchat,
    text: 'Snapchat'
  },
  {
    icon: logoStackoverflow,
    text: 'Stackoverflow'
  },
  {
    icon: logoSteam,
    text: 'Steam'
  },
  {
    icon: logoTumblr,
    text: 'Tumblr'
  },
  {
    icon: logoTwitch,
    text: 'Twitch'
  },
  {
    icon: logoTwitter,
    text: 'Twitter'
  },
  {
    icon: logoXbox,
    text: 'Xbox ID'
  },
  {
    icon: logoYoutube,
    text: 'Youtube'
  }
]

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            UserName
          </IonTitle>
          <IonButtons slot="secondary">
            <IonButton>
              <IonIcon slot="icon-only" color="primary" icon={settingsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div style={{ marginTop: 30, marginBottom: 10, display: 'flex', placeContent: 'center' }}>
          <IonAvatar style={{ height: 150, width: 150 }}>
            <img src="https://picsum.photos/200" alt="user" draggable={false} />
          </IonAvatar>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', placeItems: 'center' }}>
          <h2>UserName</h2>
          <p style={{  textAlign: 'center' }}>
            "For me, being self-taught and keeping abreast of new technologies is essential."
          </p>
        </div>

        <IonToolbar>
          <IonTitle>Links</IonTitle>
          <IonButtons slot="secondary">
            <IonButton color="primary">
              <IonIcon slot="icon-only" icon={createOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>

        <IonList>
          {
            linkIcons.map(({ icon, text }) => (
              <IonItem key={text} button>
                <IonIcon slot="start" color="primary" icon={icon} />
                <IonLabel>{text}</IonLabel>
              </IonItem>
            ))
          }
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Tab5
