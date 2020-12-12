import React from 'react';
import { Route, Redirect } from 'react-router';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonApp } from '@ionic/react';
import { folder, school, receipt, key } from 'ionicons/icons';
import Profile from './Tab1';
import Qualification from './Tab2';
import Experience from './Tab3';
import Education from './Tab4';
import { IonReactRouter } from '@ionic/react-router';

//interface MainTabsProps { }

//const Submenu: React.FC<MainTabsProps> = () => {
const Submenu: React.FC = () => {

    return (
        <IonTabs>
            <IonRouterOutlet>
                <Redirect exact path="/tabs" to="/tabs/profile" />
                {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
           <Route
                    path="/tabs/profile"
                    component={Profile}
                    exact={true}
                />
        */}
                <Route path="/tabs/profile" render={() => <Profile />} exact={true} />
                <Route path="/tabs/qualification" render={() => <Qualification />} exact={true} />
                <Route path="/tabs/experience" render={() => <Experience />} exact={true} />
                <Route path="/tabs/education" render={() => <Education />} exact={true} />
            </IonRouterOutlet>
            {/*-- Tab bar --*/}
            <IonTabBar slot="bottom">
                <IonTabButton tab="profile" href="/tabs/profile">
                    <IonIcon icon={folder} />
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>
                <IonTabButton tab="qualification" href="/tabs/qualification">
                    <IonIcon icon={key} />
                    <IonLabel>Qualification</IonLabel>
                </IonTabButton>
                <IonTabButton tab="experience" href="/tabs/experience">
                    <IonIcon icon={receipt} />
                    <IonLabel>Experience</IonLabel>
                </IonTabButton>
                <IonTabButton tab="education" href="/tabs/education">
                    <IonIcon icon={school} />
                    <IonLabel>Education</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default Submenu;