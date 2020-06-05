import React from 'react';
import {
    IonContent,
    IonPage,
} from '@ionic/react';
import Header from '../../components/header/Header';
import IFrame from '../../components/iframe/IFrame';
;

const DetailPage = () => {
    return (
        <IonPage>
            <Header title="Detail pagina" showBackButton={true}/>

            <IonContent>
                <IFrame src="https://www.nu.nl/politiek/6056140/kabinet-trekt-15-miljard-euro-uit-voor-steunpakket-openbaar-vervoer.html"/>
            </IonContent>
        </IonPage>
    );
};

export default DetailPage;
