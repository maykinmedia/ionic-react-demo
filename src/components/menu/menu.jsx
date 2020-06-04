import {IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';


const Menu = () => {
    return (
        <IonMenu side="start" content-id="main">
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
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
