Feature: Chat between two users

    Scenario: Two users login chat and disconnect
        Given User sees both users have opened the page
        And User sees that connection is successful
        When User sees that both users enter the nickname
        And User sees that both users connect to broker
        And User sees that both users see themselves and each other in the Connected Users tab
        And User sees that user1 sends any message
        And User sees that user2 receives the sent message
        And User sees that user2 sends any message
        Then User sees that user1 receives the sent message
        And User sees that both users can disconnect and lose connection