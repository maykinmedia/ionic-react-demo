import React from 'react';
import {
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonContent,
    IonHeader, IonIcon,
    IonListHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import CardGroup from '../../components/card-group/CardGroup';
import {
    newspaperOutline,
    chatbubblesOutline,
    calendarOutline,
    personCircleOutline,
    businessOutline, chatbubbleEllipsesOutline
} from 'ionicons/icons';
import Visual from '../../components/visual/Visual';

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
                <CardGroup>
                    <IonCard routerLink="/theme">
                        <Visual icon={newspaperOutline}>
                            <IonIcon color="light" icon={newspaperOutline}></IonIcon>
                        </Visual>
                        <IonCardHeader>
                            <IonCardSubtitle>Persactua</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>

                    <IonCard routerLink="/theme">
                        <Visual icon={newspaperOutline}>
                            <IonIcon color="light" icon={chatbubblesOutline}></IonIcon>
                        </Visual>
                        <IonCardHeader>
                            <IonCardSubtitle>Social</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>

                    <IonCard routerLink="/theme">
                        <Visual icon={newspaperOutline}>
                            <IonIcon color="light" icon={calendarOutline}></IonIcon>
                        </Visual>
                        <IonCardHeader>
                            <IonCardSubtitle>Kalender</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                </CardGroup>


                <IonListHeader>Bewindslieden en organisatie</IonListHeader>
                <CardGroup>
                    <IonCard routerLink="/theme">
                        <Visual icon={newspaperOutline} color="#01689b">
                            <IonIcon color="light" icon={businessOutline}></IonIcon>
                        </Visual>
                        <IonCardHeader>
                            <IonCardSubtitle>Binnen & Buiten OCW</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>

                    <IonCard routerLink="/theme">
                        <Visual icon={newspaperOutline} color="#01689b">
                            <IonIcon color="light" icon={personCircleOutline}></IonIcon>
                        </Visual>
                        <IonCardHeader>
                            <IonCardSubtitle>Ingrid van Engelshoven</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>

                    <IonCard routerLink="/theme">
                        <Visual icon={newspaperOutline} color="#01689b">
                            <IonIcon color="light" icon={personCircleOutline}></IonIcon>
                        </Visual>
                        <IonCardHeader>
                            <IonCardSubtitle>Arie Slob</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                </CardGroup>


                <IonListHeader>Thema's</IonListHeader>
                <CardGroup>
                    <IonCard routerLink="/theme">
                        <Visual icon={newspaperOutline} color="#d52b1e">
                            <IonIcon color="light" icon={chatbubbleEllipsesOutline}></IonIcon>
                        </Visual>
                        <IonCardHeader>
                            <IonCardSubtitle>Coronavirus</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>

                    <IonCard routerLink="/theme">
                        <Visual icon={newspaperOutline} color="#39870c">
                            <IonIcon color="light" icon={chatbubbleEllipsesOutline}></IonIcon>
                        </Visual>
                        <IonCardHeader>
                            <IonCardSubtitle>PO&VO</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>

                    <IonCard routerLink="/theme">
                        <Visual icon={newspaperOutline} color="#d52b1e">
                            <IonIcon color="light" icon={chatbubbleEllipsesOutline}></IonIcon>
                        </Visual>
                        <IonCardHeader>
                            <IonCardSubtitle>MBO</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                    <IonCard routerLink="/theme">
                        <Visual icon={newspaperOutline} color="#ca005d">
                            <IonIcon color="light" icon={chatbubbleEllipsesOutline}></IonIcon>
                        </Visual>
                        <IonCardHeader>
                            <IonCardSubtitle>HO&W</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>

                    <IonCard routerLink="/theme">
                        <Visual icon={newspaperOutline} color="#ffb612">
                            <IonIcon color="light" icon={chatbubbleEllipsesOutline}></IonIcon>
                        </Visual>
                        <IonCardHeader>
                            <IonCardSubtitle>Media</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>

                    <IonCard routerLink="/theme">
                        <Visual icon={newspaperOutline} color="#007bc7">
                            <IonIcon color="light" icon={chatbubbleEllipsesOutline}></IonIcon>
                        </Visual>
                        <IonCardHeader>
                            <IonCardSubtitle>Cultuur</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                    <IonCard routerLink="/theme">
                        <Visual icon={newspaperOutline} color="#42145f">
                            <IonIcon color="light" icon={chatbubbleEllipsesOutline}></IonIcon>
                        </Visual>
                        <IonCardHeader>
                            <IonCardSubtitle>Emancipatie</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                </CardGroup>

            </IonContent>
            <
            /IonPage>
            );
            };


            export default HomePage;
