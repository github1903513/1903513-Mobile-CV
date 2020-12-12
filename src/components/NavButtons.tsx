//This is side-menu button file Ping.Zhang 1903513
import { IonButton, IonMenuButton } from "@ionic/react";
import React, { useEffect } from "react";

//export Menu when the screen size is small ;
export const NavButtons = () => {
    const [mQuery, setMQuery] = React.useState<any>({
        matches: window.innerWidth > 768 ? true : false,
    });

    useEffect(() => {
        let mediaQuery = window.matchMedia("(min-width: 768px)");
        mediaQuery.addListener(setMQuery);

        return () => mediaQuery.removeListener(setMQuery);
    }, []);

    // MediaQueryListEvent { isTrusted: true, media: "(min-width: 768px)", matches: true ...}
    console.log(mQuery.matches);


    return (
        <div>
            {mQuery && !mQuery.matches ? (
                <IonMenuButton />
            ) : (
                    <>
                        <IonButton routerLink={"/About"}>About </IonButton>
                        <IonButton routerLink={"/Preview"}>Preview </IonButton>
                        <IonButton routerLink={"/Print"}>Print</IonButton>
                    </>
                )}
        </div>
    );
};