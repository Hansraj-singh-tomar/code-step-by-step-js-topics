// Encapsulates a request as an object.
class Command {
    constructor(receiver) {
        this.receiver = receiver;
    }
    execute() {
        this.receiver.action();
    }
}

class Receiver {
    action() {
        console.log('Action executed!');
    }
}

const receiver = new Receiver();
const command = new Command(receiver);
command.execute(); // Action executed!
