import {Given, Then, When} from '@wdio/cucumber-framework'
import { tests } from '../support/tests';

Given('User sees both users have opened the page', function() {
    tests.navigationTest.openChatPage();
});

Then('User sees that connection is successful', function() {
    tests.navigationTest.assertConnectionSuccess();
});

When('User sees that both users enter the nickname', function() {
    tests.navigationTest.inputName();
})

When('User sees that both users connect to broker', function() {
   tests.navigationTest.connectToChat();
})

When('User sees that both users see themselves and each other in the Connected Users tab', function() {
    tests.navigationTest.assertUserList();
})

When('User sees that both users can disconnect and lose connection', function() {
    tests.navigationTest.userDisconnect();
    tests.navigationTest.assertDisconnectSuccess();
})