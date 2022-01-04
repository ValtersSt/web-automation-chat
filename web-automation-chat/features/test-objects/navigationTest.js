import {pages} from '../support/pages'
import {loopLog} from '../support/helperFunctions'
import {data} from '../support/data'
import { expect as chaiExpect } from 'chai';

export class NavigationTest {
    openChatPage() {
        browser.maximizeWindow();
        pages.user1.chatPage.openPage();
        pages.user2.chatPage.openPage();
    }

    assertConnectionSuccess() {
        // const finalLogUserOne = [];
        // const finalLogUserTwo = [];
        // const connectedSucces = ['Connected to the MQTT.Cool server'];
        
        // browser.pause(5000);

        // const successMessageLogUserOne = pages.user1.chatPage.getInfoMessages();
        // const successMessageLogUserTwo = pages.user2.chatPage.getInfoMessages();

        

        // expect(loopLog(successMessageLogUserOne, finalLogUserOne)).toEqual(connectedSucces);

        // expect(loopLog(successMessageLogUserTwo, finalLogUserTwo)).toEqual(connectedSucces);

        browser.pause(4000);
        chaiExpect(pages.user1.chatPage.getInfoMessages()).toString().includes('Connected to the MQTT.Cool server');
        chaiExpect(pages.user2.chatPage.getInfoMessages()).toString().includes('Connected to the MQTT.Cool server');


    }

    inputName() {
        pages.user1.chatPage.fillInputField(data.userData.user1.firstName);

        pages.user2.chatPage.fillInputField(data.userData.user2.firstName);
    }

    connectToChat() {
        pages.user1.chatPage.clickConnectToChat();
        pages.user2.chatPage.clickConnectToChat();
    }

// Kind of long way to do this, but anyway... if it works it works.
    assertUserList() {
        const finalLogUserOne = [];
        const finalLogUserTwo = [];

        browser.pause(2000);
//      ------------- Getting the strings to look for ----------------------
        const userOneInHisBrowser = `${data.userData.user1.firstName} (you)`;
        const userTwoInHisBrowser = `${data.userData.user2.firstName} (you)`;

        const userOneConnected = data.userData.user1.firstName;
        const userTwoConnected = data.userData.user2.firstName;

//      ------------- Array of the needed strings ----------------------
        const expectedLogUserOne = [userOneInHisBrowser, userTwoConnected];
        const expectedLogUserTwo = [userTwoInHisBrowser, userOneConnected];

//      ------ Getting the user log from browser and pushing them into an array --------
        const userLogOne = pages.user1.chatPage.getUserLog();
        const userLogTwo = pages.user2.chatPage.getUserLog();

        const log1 = loopLog(userLogOne, finalLogUserOne)
        const log2 = loopLog(userLogTwo, finalLogUserTwo)
//      ------------- Filter the array for needed values and compare both ----------------------
        const res1 = log1.filter(item => expectedLogUserOne.includes(item));
        const res2 = log2.filter(item => expectedLogUserTwo.includes(item));

        expect(res1).toEqual(expectedLogUserOne);
        expect(res2).toEqual(expectedLogUserTwo);

    }

    userDisconnect() {
        pages.user1.chatPage.clickDisconnectButton();
        pages.user2.chatPage.clickDisconnectButton();
    }

    assertDisconnectSuccess() {
        const finalLogUserOne = [];
        const finalLogUserTwo = [];
        const DcSucces = ['Connection to tcp://broker.mqtt.cool:1883 lost'];
        
        browser.pause(2000);

        const DcLogUserOne = pages.user1.chatPage.getDisconnectLog();
        const DcLogUserTwo = pages.user2.chatPage.getDisconnectLog();

        const log1 = loopLog(DcLogUserOne, finalLogUserOne)
        const log2 = loopLog(DcLogUserTwo, finalLogUserTwo)

        const res1 = log1.filter(item => DcSucces.includes(item));
        const res2 = log2.filter(item => DcSucces.includes(item));

        expect(res1).toEqual(DcSucces);
        expect(res2).toEqual(DcSucces);


    }

    
}
