import faker, { fake } from 'faker'

export default class UserData {
    constructor() {
        this.user1 = new User(faker.name.firstName());
        this.user2 = new User(faker.name.firstName());
        this.message1 = new Message(faker.lorem.sentence());
        this.message2 = new Message(faker.lorem.sentence());
    }
}

class User {
    constructor(firstName) {
        this.firstName = firstName;
    }
}

class Message {
    constructor(lorem) {
        this.lorem = lorem;
    }
}