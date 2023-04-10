const Messages = require('./models/messages.model');

class DbMessageManager {
    constructor() {}

    async addMessage(data) {
        return await Messages.create(data);
    }

    async getMessages() {
        return await Messages.find();
    }

    async deleteMessages() {
        return await Messages.deleteMany();
    }
}

module.exports = DbMessageManager;
