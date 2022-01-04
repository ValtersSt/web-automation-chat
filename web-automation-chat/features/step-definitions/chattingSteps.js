import {When} from '@wdio/cucumber-framework'
import { tests } from '../support/tests';

When('User sees that user1 sends any message', function() {
    tests.chattingTest.inputMessageUser1();
    tests.chattingTest.sendMessageUser1();
})

When('User sees that user2 receives the sent message', function() {
    tests.chattingTest.assertMessageReceivedFromUserOne();
})

When('User sees that user2 sends any message', function() {
    tests.chattingTest.inputMessageUser2();
    tests.chattingTest.sendMessageUser2();
})

When('User sees that user1 receives the sent message', function() {
    tests.chattingTest.assertMessageReceivedFromUserTwo();
})