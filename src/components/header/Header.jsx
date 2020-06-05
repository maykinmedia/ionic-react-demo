import React from 'react';
import {
    IonButton,
    IonButtons,
    IonHeader,
    IonIcon,
    IonLabel,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {
    arrowBack,
    arrowForward,
    chevronBackOutline
} from 'ionicons/icons';
import {useHistory} from 'react-router';


const Header = (props) => {
    const history = useHistory();

    const renderBackButton = () => {
        if (!props.showBackButton) {
            return;
        }

        return (
            <IonButtons slot="start">
                <IonButton onClick={() => history.goBack()} routerDirection="back">
                    <IonIcon icon={chevronBackOutline}/>
                    <IonLabel>Vorige</IonLabel>
                </IonButton>
            </IonButtons>
        );
    };

    const renderDateToolbar = () => {
        if (!props.showDateToolbar) {
            return;
        }

        return (
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
        );
    };

    return (
        <IonHeader>
            <IonToolbar>
                {renderBackButton()}

                {props.children}

                <IonTitle>{props.title}</IonTitle>
            </IonToolbar>

            {renderDateToolbar()}
        </IonHeader>
    );
};
Header.defaultProps = {
    showBackButton: false,
    showDateToolbar: false,
    title: 'Nieuwe Pagina'
};

export default Header;
