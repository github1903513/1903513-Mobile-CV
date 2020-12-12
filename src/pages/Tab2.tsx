//This is CV content page Ping.Zhang 1903513
import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonGrid, IonItem, IonLabel, IonAvatar
} from '@ionic/react';
import { NavButtons } from '../components/NavButtons';

const Tab2: React.FC = () => {
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
                        <IonCardTitle>Qualification</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>

                        •	Experience in Hybrid Mobile app with IOS/Web App/ Android<br></br>
                        •	Experience with Java, PHP and Python<br></br>
                        •	Familiarity in Angular, React and Vue<br></br>
                        •	Familiarity in Ionic 5<br></br>
                        •	Familiarity in MEAN and MERN<br></br>
                        •	Familiarity in Git, Github.com<br></br>
                        •	Familiarity with UI/UX and/or app design<br></br>
                        •	Familiarity with RESTful APIs to connect mobile apps to backend service<br></br>

                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;