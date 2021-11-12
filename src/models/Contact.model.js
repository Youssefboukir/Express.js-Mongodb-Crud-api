const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var ContactSchema = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    picture: {
        type: String,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
    },

});



const Contact=module.exports = mongoose.model('Contact', ContactSchema);

module.exports.getAllContact = (callback) => {
    Contact.find({})
        .exec(callback);
}

module.exports.addContact = (Contact, callback) => {
    Contact.save(callback);
}

module.exports.updateContact = (id, data, callback) => {
    Contact.findByIdAndUpdate(id, { $set: data }, { new: true }, callback);
}

module.exports.deleteContactById = (id, callback) => {
    Contact.findByIdAndDelete(id, callback);
}

module.exports.getContactById = (id, callback) => {
    Contact.findById(id, callback);
}