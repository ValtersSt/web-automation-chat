import {BasePage} from '../page-objects/basePage'
import { ChatPage } from '../page-objects/chatPage'

class Pages {
    constructor() {
        this.basePage = new BasePage();
        this.user1 = {
            chatPage: new ChatPage('user1')
        },
        this.user2 = {
            chatPage: new ChatPage('user2')
        }
    }
}

export const pages = new Pages();