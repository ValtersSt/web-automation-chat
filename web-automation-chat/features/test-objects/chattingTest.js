import {pages} from '../support/pages'
import {data} from '../support/data'

export class ChattingTest {
    inputMessageUser1() {
        pages.user1.chatPage.fillMessageField(data.userData.message1.lorem);
    }

    inputMessageUser2() {
        pages.user2.chatPage.fillMessageField(data.userData.message2.lorem);
    }

    sendMessageUser1() {
        pages.user1.chatPage.clickReplyButton();
    }

    sendMessageUser2() {
        pages.user2.chatPage.clickReplyButton();
    }

    assertMessageReceivedFromUserOne() {
        const chatLog = [];
        const sentMessage = [];
        const expectedMessage = [`${data.userData.user1.firstName}: ${data.userData.message1.lorem}`];

        browser.pause(2000);

        const chatLogLinks = pages.user2.chatPage.getChatLog();

        for (const link of chatLogLinks) {
            chatLog.push(link.getText());
        }

        for (const receivedMessage of chatLog) {
            sentMessage.push(receivedMessage);
        }

        expect(sentMessage).toEqual(expectedMessage);

    }

    assertMessageReceivedFromUserTwo() {
        const chatLog = [];
        const sentMessage = [];
        const expectedMessage = [`${data.userData.user2.firstName}: ${data.userData.message2.lorem}`];

        browser.pause(2000);

        const chatLogLinks = pages.user1.chatPage.getChatLog();

        for (const link of chatLogLinks) {
            chatLog.push(link.getText());
        }

        for (const receivedMessage of chatLog) {
            sentMessage.push(receivedMessage);
        }

        expect(sentMessage).toEqual(expectedMessage);

    }
}