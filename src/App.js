import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonContent, IonRouterOutlet, IonSplitPane} from '@ionic/react';
import {IonReactHashRouter} from '@ionic/react-router';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';
import HomePage from './pages/home/HomePage';
import ThemePage from './pages/theme/ThemePage';
import SideBar from './components/sidebar/SideBar';
import DetailPage from './pages/detail/Detail';


const App = () => {
    return (
        <IonApp>
            <IonReactHashRouter id="main">
                <IonSplitPane contentId="main">
                    <SideBar/>
                    <IonContent id="main">
                        <IonRouterOutlet>
                            <Route path="/home" component={HomePage} exact={true}/>
                            <Route path="/theme" component={ThemePage} exact={true}/>
                            <Route path="/theme/detail" component={DetailPage} exact={true}/>
                            <Route exact path="/" render={() => <Redirect to="/home"/>}/>
                        </IonRouterOutlet>
                    </IonContent>
                </IonSplitPane>
            </IonReactHashRouter>
        </IonApp>
    );
};
export default App;
