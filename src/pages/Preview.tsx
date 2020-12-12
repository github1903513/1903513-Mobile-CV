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
    IonCol, IonTabs, IonTabBar, IonTabButton, IonBadge, IonList
} from '@ionic/react';
import { NavButtons } from '../components/NavButtons';
import { TabButtons } from '../components/TabButtons';
import { mail, call } from 'ionicons/icons';

const Preview: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Ping Zhang</IonTitle>
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
                {/*-- List of CV Items --*/}
                <IonList>
                    <IonItem>
                        <IonLabel>
                            <IonIcon icon={mail} /> Ping.Zhang@laurea.fi<br></br>
                            <IonIcon icon={call} /> 040-7491691<br></br>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel><b>Profile:</b><br></br>
                        •	Junior Mobile/Web developer able to build a Mobile/Web presence from ground up – from concept, navigation, layout and programming to UI/UX.<br></br>
                        •	Skilled at writing well-designed and testable code using current best practices.<br></br>
                        •	Fast learner, hard worker and team player.<br></br>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel><b>Qualification:</b><br></br>
                        •	Experience in Hybrid Mobile app with IOS/Web App/ Android<br></br>
                        •	Experience with Java, PHP and Python<br></br>
                        •	Familiarity in Angular, React and Vue<br></br>
                        •	Familiarity in Ionic 5<br></br>
                        •	Familiarity in MEAN and MERN<br></br>
                        •	Familiarity in Git, Github.com<br></br>
                        •	Familiarity with UI/UX and/or app design<br></br>
                        •	Familiarity with RESTful APIs to connect mobile apps to backend service<br></br>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel><b>Experience:</b><br></br>
                            <b>Development Experience:</b><br></br>
                        •	Design and build hybrid mobile app using Ionic 5<br></br>
                        •	 Perform a wide array of front-end development tasks including deployment and testing, writing source code, writing CSS styles, testing code, deploying code etc.<br></br>
                        •	Work in an agile work environment that includes developers, UI/UX, project manager, and other stakeholders.<br></br>
                            <b>Technology Related Experience:</b><br></br>
                        Xing Tang Telecommunications Technology Co., Ltd.			2000.12-2009.06<br></br>
                        Software engineer<br></br>
                        •	As the person in charge of the sub-project, I participated in the development of several large-scale telecommunications service system projects. For example, China Unicom conference TV system, China Mobile Internet phone system<br></br>
                        •	Hosted several small telecommunications service systems, such as the telecommunications museum service system and small conference service system.<br></br>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel><b>Education:</b><br></br>
                         •	<b>Laurea ammattikorkeakoulu</b>						2019.08-<br></br>
                Tietojenkäsittely<br></br>

                        •	<b>Peking University</b>							1996.09-1999.09<br></br>
                Bachelor of Science<br></br>

                        </IonLabel>
                    </IonItem>
                </IonList>

            </IonContent>
        </IonPage>
    );
};

export default Preview;