import { IonButton, IonGrid, IonRow, IonCol, IonMenuButton, IonTabBar } from "@ionic/react";
import React, { useEffect } from "react";

//export Menu when the screen size is small ;
export const TabButtons = () => {

    return (
        <IonGrid>
            <IonRow>
                <IonCol><IonButton routerLink={"/tabs/profile"}>Profile </IonButton></IonCol>
                <IonCol><IonButton routerLink={"/tabs/qualification"}>Qualification </IonButton></IonCol>
                <IonCol><IonButton routerLink={"/tabs/experience"}>Experience</IonButton></IonCol>
                <IonCol><IonButton routerLink={"/tabs/education"}>Education</IonButton></IonCol>
            </IonRow>

        </IonGrid>

    );
};