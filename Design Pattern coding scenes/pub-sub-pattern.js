class PubSub {
    constructor() {
        this.topics = {};
    }

    subscribe(topic, listener) {
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }
        this.topics[topic].push(listener);
    }

    unsubscribe(topic, listener) {
        if (!this.topics[topic]) return;

        this.topics[topic] = this.topics[topic].filter(l => l !== listener);
    }

    publish(topic, data) {
        if (!this.topics[topic]) return;

        this.topics[topic].forEach(listener => listener(data));
    }
}

// Usage
const pubSub = new PubSub();

const subscriber1 = data => console.log(`Subscriber 1 received data: ${data}`);
const subscriber2 = data => console.log(`Subscriber 2 received data: ${data}`);

pubSub.subscribe('topic1', subscriber1);
pubSub.subscribe('topic1', subscriber2);

pubSub.publish('topic1', 'Hello, Subscribers!');


// Yes, the Observer design pattern and the Publish - Subscribe(Pub - Sub) design pattern are similar, but they have distinct differences in their structures and use cases.Here's a comparison to clarify their similarities and differences:
// Observer Design Pattern
// Purpose: Used to define a one - to - many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
// Components:
//     Subject: The object that holds the state and notifies observers of changes.
//     Observer: The objects that need to be notified about changes in the subject.
// Communication: Direct; the subject maintains a list of observers and sends notifications directly to them.
// Use Case: Suitable for scenarios where a single source of truth needs to notify multiple dependent components.For example, a data model updating UI components in an application.

// Publish - Subscribe(Pub - Sub) Design Pattern
// Purpose: Used to enable a messaging system where publishers send messages without knowing who the subscribers are, and subscribers receive messages without knowing who the publishers are.
// Components:
//     Publisher: The object that sends messages or events.
//     Subscriber: The objects that receive messages or events.
//      Message Broker / Event Bus: An intermediary that handles the distribution of messages from publishers to subscribers.
// Communication: Indirect; publishers and subscribers communicate through the message broker, which decouples them.
// Use Case: Suitable for distributed systems where components need to communicate asynchronously and be loosely coupled.For example, microservices architecture, event - driven systems.


// Key Differences

// 1. Direct vs.Indirect Communication:

//     Observer: Direct communication between subject and observers.
//     Pub - Sub: Indirect communication via a message broker.

// 2. Decoupling:

//   Observer: Tight coupling; the subject knows its observers.
//     Pub - Sub: Loose coupling; publishers and subscribers are unaware of each other.
// 3. Usage Context:
//     Observer: Typically used within a single application or component.
//     Pub - Sub: Often used in larger, distributed systems.
