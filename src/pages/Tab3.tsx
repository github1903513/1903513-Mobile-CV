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


const Tab3: React.FC = () => {
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
                <IonCardHeader>
                    <IonCardSubtitle>Ping Zhang</IonCardSubtitle>
                    <IonCardTitle>Experience</IonCardTitle>
                </IonCardHeader>
                <IonCard>
                    <IonCardContent>
                        <b>Development Experience:</b><br></br>
                        •	Design and build hybrid mobile app using Ionic 5<br></br>
                        •	 Perform a wide array of front-end development tasks including deployment and testing, writing source code, writing CSS styles, testing code, deploying code etc.<br></br>
                        •	Work in an agile work environment that includes developers, UI/UX, project manager, and other stakeholders.<br></br>
                        <b>Technology Related Experience:</b><br></br>
                        Xing Tang Telecommunications Technology Co., Ltd.			2000.12-2009.06<br></br>
                        Software engineer<br></br>
                        •	As the person in charge of the sub-project, I participated in the development of several large-scale telecommunications service system projects. For example, China Unicom conference TV system, China Mobile Internet phone system<br></br>
                        •	Hosted several small telecommunications service systems, such as the telecommunications museum service system and small conference service system.<br></br>
                    </IonCardContent>
                </IonCard>
            </IonContent>

        </IonPage >
    );
};

export default Tab3;