import React from 'react';
import {
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonImg,
    IonListHeader,
    IonMenuButton,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './HomePage.css';

const HomePage = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Ionic React Demo</IonTitle>
                </IonToolbar>
            </IonHeader>


            <IonContent>
                <IonListHeader>Uitgelicht</IonListHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCard routerLink="/theme">
                                <IonImg src="http://placekitten.com/801/600"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>Persactua</IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonCard routerLink="/theme">
                                <IonImg src="http://placekitten.com/802/600"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                        Social
                                    </IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>

                        <IonCol>
                            <IonCard routerLink="/theme">
                                <IonImg src="http://placekitten.com/803/600"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                        Kalender
                                    </IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>


                <IonListHeader>Bewindslieden en organisatie</IonListHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCard routerLink="/theme">
                                <IonImg src="http://placekitten.com/801/600"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                        Binnen & Buiten OCW
                                    </IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonCard routerLink="/theme">
                                <IonImg src="http://placekitten.com/802/600"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                        Ingrid van Engelshoven
                                    </IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>

                        <IonCol>
                            <IonCard routerLink="/theme">
                                <IonImg src="http://placekitten.com/803/600"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                        Arie Slob<br/>&nbsp;
                                    </IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>


                <IonListHeader>Thema's</IonListHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCard routerLink="/theme">
                                <IonImg src="http://placekitten.com/800/601"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                        Coronavirus
                                    </IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>

                        <IonCol>
                            <IonCard routerLink="/theme">
                                <IonImg src="http://placekitten.com/806/602"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                        PO&VO
                                    </IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>


                    <IonRow>
                        <IonCol>
                            <IonCard routerLink="/theme">
                                <IonImg src="http://placekitten.com/800/603"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                        MBO
                                    </IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>

                        <IonCol>
                            <IonCard routerLink="/theme">
                                <IonImg src="http://placekitten.com/806/604"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                        HO&W
                                    </IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>


                    <IonRow>
                        <IonCol>
                            <IonCard routerLink="/theme">
                                <IonImg src="http://placekitten.com/800/605"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                        Media
                                    </IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>

                        <IonCol>
                            <IonCard routerLink="/theme">
                                <IonImg src="http://placekitten.com/806/606"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                        Cultuur
                                    </IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>


                    <IonRow>
                        <IonCol>
                            <IonCard routerLink="/theme">
                                <IonImg src="http://placekitten.com/800/607"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>
                                        Emancipatie
                                    </IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>

                        <IonCol>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};


export default HomePage;
