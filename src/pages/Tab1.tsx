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
import { TabButtons } from '../components/TabButtons';
import { mail, call } from 'ionicons/icons';
import Submenu from './Submenu';

const Tab1: React.FC = () => {
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
                <IonGrid>
                    <IonRow>  <IonCol size-sm> <IonIcon icon={mail} /> Ping.Zhang@laurea.fi</IonCol></IonRow>
                    <IonRow>  <IonCol size-sm><IonIcon icon={call} /> 040-7491691</IonCol></IonRow>
                </IonGrid>
                <IonCardHeader>
                    <IonCardSubtitle>Ping Zhang</IonCardSubtitle>
                    <IonCardTitle>profile</IonCardTitle>
                </IonCardHeader>
                <IonCard>
                    <IonCardContent>
                        •	Junior Mobile/Web developer able to build a Mobile/Web presence from ground up – from concept, navigation, layout and programming to UI/UX.<br></br>
                        •	Skilled at writing well-designed and testable code using current best practices.<br></br>
                        •	Fast learner, hard worker and team player.<br></br>
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>

    );
};

export default Tab1;