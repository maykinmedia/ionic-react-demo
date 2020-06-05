import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import {useLocation, useRouteMatch} from 'react-router';
import ThemePage from '../../pages/theme/ThemePage';
import HomePage from '../../pages/home/HomePage';


const SideBar = () => {
    const location = useLocation();
    const routerMatch = useRouteMatch(location.pathname);


    const renderContent = () => {
        if (routerMatch.path === '/theme/detail') {
            return <ThemePage/>;
        }

        if (routerMatch.path === '/theme') {
            return (
                <>
                    {renderMenu()}
                    <HomePage/>
                </>
            )
        }

        return renderMenu();
    };

    const renderMenu = () => {
        return (
            <>
                <IonHeader>
                    <IonToolbar translucent>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonList>
                        <IonItem routerLink="/home">
                            <IonIcon name="mail" slot="start"></IonIcon>
                            <IonLabel>Home pagina</IonLabel>
                        </IonItem>

                        <IonItem routerLink="/theme">
                            <IonIcon name="mail" slot="start"></IonIcon>
                            <IonLabel>Thema pagina</IonLabel>
                        </IonItem>

                        <IonItem routerLink="/theme/detail">
                            <IonIcon name="mail" slot="start"></IonIcon>
                            <IonLabel>Detail pagina</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </>
        );
    };

    return (
        <IonMenu side="start" content-id="main">
            {renderContent()}
        </IonMenu>
    );
};

export default SideBar;
