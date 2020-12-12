//This is side-menu file Ping.Zhang 1903513
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

import React from 'react';

//export default Menu;
export const Menu = () => {
  return (
    <IonMenu contentId="main" >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="outer-content">
        <IonList>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/About"} routerDirection="none">
              <IonLabel>About</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/Preview"} routerDirection="none">
              <IonLabel>Preview</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/Print"} routerDirection="none">
              <IonLabel>Print</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

//export default withRouter(Menu);

/*interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'About',
    url: '/page/About',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Preview',
    url: '/page/Preview',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Print',
    url: '/page/Print',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Send',
    url: '/page/Send',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Logout',
    url: '/page/Logout',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  }
];



const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>CV App</IonListHeader>
          <IonNote>Ping.Zhang@laurea.fi</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;*/
