// Converts one interface to another.

class OldAPI {
    oldMethod() {
        return 'old API method';
    }
}

class NewAPI {
    newMethod() {
        return 'new API method';
    }
}

class Adapter {
    constructor() {
        this.oldAPI = new OldAPI();
    }
    newMethod() {
        return this.oldAPI.oldMethod();
    }
}

const adapter = new Adapter();
console.log(adapter.newMethod()); // old API method
