import { NavigationTest } from '../test-objects/navigationTest'
import { ChattingTest } from '../test-objects/chattingTest'

class Tests {
    constructor() {
        this.navigationTest = new NavigationTest();
        this.chattingTest = new ChattingTest();
    }
}

export const tests = new Tests();