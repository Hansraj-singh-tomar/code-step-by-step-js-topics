// Facilitates communication between objects without requiring direct interaction.

class ChatRoom {
    constructor() {
        this.participants = [];
    }
    register(participant) {
        this.participants.push(participant);
    }
    send(message, sender) {
        this.participants.forEach((participant) => {
            if (participant !== sender) participant.receive(message);
        });
    }
}

class Participant {
    constructor(name, chatRoom) {
        this.name = name;
        this.chatRoom = chatRoom;
    }
    send(message) {
        console.log(`${this.name} sends: ${message}`);
        this.chatRoom.send(message, this);
    }
    receive(message) {
        console.log(`${this.name} receives: ${message}`);
    }
}

const chatRoom = new ChatRoom();
const user1 = new Participant('User1', chatRoom);
const user2 = new Participant('User2', chatRoom);

chatRoom.register(user1);
chatRoom.register(user2);

user1.send('Hello');
// User1 sends: Hello
// User2 receives: Hello
