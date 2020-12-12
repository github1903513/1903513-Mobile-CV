//This is CV content page Ping.Zhang 1903513
import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonGrid,
    IonImg,
    IonAvatar,
    IonChip,
    IonLabel,
    IonItem,
    IonIcon,
    IonRow,
    IonCol, IonTabs, IonTabBar, IonTabButton, IonBadge
} from '@ionic/react';
import { NavButtons } from '../components/NavButtons';

const Tab4: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>CV</IonTitle>
                    <IonButtons slot="start">
                        <NavButtons />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <IonGrid >
                    <img src="assets/icon/titlebg.jpg" />
                </IonGrid>
                <IonItem>
                    <IonAvatar slot="start">
                        <img src="assets/icon/photo.jpg" />
                    </IonAvatar>
                    <IonLabel><h2><b>Web/Mobile Developer</b></h2></IonLabel>
                </IonItem>
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>Ping Zhang</IonCardSubtitle>
                        <IonCardTitle>Education</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        •	<b>Laurea ammattikorkeakoulu</b>						2019.08-<br></br>
                Tietojenkäsittely<br></br>

                        •	<b>Peking University</b>							1996.09-1999.09<br></br>
                Bachelor of Science<br></br>

                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage >
    );
};

export default Tab4;