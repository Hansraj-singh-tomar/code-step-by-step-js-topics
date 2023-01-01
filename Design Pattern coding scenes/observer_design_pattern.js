// changes hone par client/user ko inform karna

class YoutubeChannel {
    
    subscriptionArr = [];

    subscribe(subscriber) {
        this.subscriptionArr.push(subscriber);
    }
    unsubscribe(subscriber) {
        this.subscriptionArr = this.subscriptionArr.filter(
            (sub) => sub.id !== subscriber.id
        );
    }
    publish(msg) {
        console.log(this.subscriptionArr);  // [Subscriber, Subscriber, Subscriber]
        for(let subscriber of this.subscriptionArr) {
            subscriber.notify(msg) // 
        }
    }
}

class Subscriber {
    constructor(id,name) {
        this.id = id;
        this.name = name;
    }
    notify(msg) {
        console.log(`Hey ${this.name} - ${msg}`);
    }
}

const sub1 = new Subscriber(1, "Rohit");
const sub2 = new Subscriber(2, "hansraj");
const sub3 = new Subscriber(3, "hamendra");

const channel = new YoutubeChannel();
channel.subscribe(sub1);
channel.subscribe(sub2);
channel.subscribe(sub3);

channel.publish("Dekho video aa gya hai");

channel.unsubscribe(sub2);  // [Subscriber, Subscriber] // yha sub2 ne unsubscribe kar diya hai isliye ye hame two hi subscriber show kar rha hai and unn do hi subscriber ko niche vala message milega 

channel.publish("hansraj unsubscribed this channel")