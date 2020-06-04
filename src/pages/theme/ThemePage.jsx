import React from 'react';
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList, IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {arrowBack, arrowForward, chevronBackOutline} from 'ionicons/icons';


const ThemePage = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerLink="/home" routerDirection="back">
                            <IonIcon icon={chevronBackOutline}/>
                            <IonLabel>Vorige</IonLabel>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Thema pagina</IonTitle>
                </IonToolbar>

                <ion-toolbar>
                    <ion-buttons slot="start">
                        <IonButton>
                            <IonIcon icon={arrowBack}/>
                        </IonButton>
                    </ion-buttons>

                    <ion-title>
                        <ion-datetime value="2020-06-04T15:43:40.394Z" display-timezone="utc"></ion-datetime>
                    </ion-title>

                    <ion-buttons slot="end">
                        <IonButton>
                            <IonIcon icon={arrowForward}/>
                        </IonButton>
                    </ion-buttons>
                </ion-toolbar>
            </IonHeader>

            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel>
                            <h2>Lorem ipsum dolor site amet</h2>
                            <p>2020-06-04 | Lorem</p>
                        </IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            <h2>Lorem ipsum dolor site amet</h2>
                            <p>2020-06-04 | Lorem</p>
                        </IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            <h2>Lorem ipsum dolor site amet</h2>
                            <p>2020-06-04 | Lorem</p>
                        </IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            <h2>Lorem ipsum dolor site amet</h2>
                            <p>2020-06-04 | Lorem</p>
                        </IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            <h2>Lorem ipsum dolor site amet</h2>
                            <p>2020-06-04 | Lorem</p>
                        </IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            <h2>Lorem ipsum dolor site amet</h2>
                            <p>2020-06-04 | Lorem</p>
                        </IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            <h2>Lorem ipsum dolor site amet</h2>
                            <p>2020-06-04 | Lorem</p>
                        </IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            <h2>Lorem ipsum dolor site amet</h2>
                            <p>2020-06-04 | Lorem</p>
                        </IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            <h2>Lorem ipsum dolor site amet</h2>
                            <p>2020-06-04 | Lorem</p>
                        </IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            <h2>Lorem ipsum dolor site amet</h2>
                            <p>2020-06-04 | Lorem</p>
                        </IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            <h2>Lorem ipsum dolor site amet</h2>
                            <p>2020-06-04 | Lorem</p>
                        </IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            <h2>Lorem ipsum dolor site amet</h2>
                            <p>2020-06-04 | Lorem</p>
                        </IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            <h2>Lorem ipsum dolor site amet</h2>
                            <p>2020-06-04 | Lorem</p>
                        </IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            <h2>Lorem ipsum dolor site amet</h2>
                            <p>2020-06-04 | Lorem</p>
                        </IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonLabel>
                            <h2>Lorem ipsum dolor site amet</h2>
                            <p>2020-06-04 | Lorem</p>
                        </IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default ThemePage;
