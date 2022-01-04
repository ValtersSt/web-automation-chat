import {BasePage} from '../page-objects/basePage'

export class ChatPage extends BasePage {

    // SELECTORS

    getMainLogo() {
       return this.browser.$('#main > a > img');
    }

    getInfoMessages() {
        return this.browser.$$('#messages > div[class="text-success"]');
    }

    getNameInputField() {
        return this.browser.$('#user');
    }

    getConnectButton() {
        return this.browser.$('#connectBtn');
    }

    getMessageInputField() {
        return this.browser.$('#sendMessage');
    }

    getUserLog() {
        return this.browser.$$('#usersList > li');
    }

    getReplyButton() {
        return this.browser.$('#replyBtn');
    }

    getChatLog() {
        return this.browser.$$('#messages .text-primary');
    }

    getDisconnectButton() {
        return this.browser.$('#disconnectBtn');
    }

    getDisconnectLog() {
        return this.browser.$$('#messages > div[class="text-info"]');
    }

    
    // ACTIONS WITH SELECTORS

    fillInputField(name) {
        this.getNameInputField().waitForEnabled();
        this.getNameInputField().click();
        this.getNameInputField().setValue(name);
    }

    clickConnectToChat() {
        this.getConnectButton().click();
    }

    fillMessageField(message) {
        this.getMessageInputField().click();
        this.getMessageInputField().setValue(message);
    }

    clickReplyButton() {
        this.getReplyButton().click();
    }

    clickDisconnectButton() {
        this.getDisconnectButton().click();
    }

    openPage() {
        this.browser.url('https://demos.mqtt.cool/chat');
    }

}