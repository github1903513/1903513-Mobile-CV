//This is route file Ping.Zhang 1903513
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Preview from './pages/Preview';
import { Menu } from './components/Menu';
import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Submenu from './pages/Submenu'; //Tabs

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables <Route path="/tabs" render={() => <Submenu />} />
<Redirect from="/" to="/About" exact />
<Route path="/" component={Main} exact />
<Route path="/page/:name" component={Page} exact />
<Route exact path="/" render={() => <Redirect to="/About" />} />*/
import './theme/variables.css';

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />{/*--  the side menu  --*/}
          <IonRouterOutlet id="main">
            <Route path="/tabs" component={Submenu} />
            <Route path="/About" component={Tab1} exact={true} />
            <Route path="/Preview" component={Preview} exact={true} />
            <Route path="/Print" component={Tab3} exact={true} />
            <Route path="/page/Send" component={Tab4} exact={true} />
            <Redirect from="/" to="/tabs/profile" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
