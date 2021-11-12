const Contact = require("../models/Contact.model");
const helpers = require('../helpers/helpers')


//get all Contact
exports.get_all_contact = (req, res, next) => {
    Contact.getAllContact((error, doc) => {
        helpers.callback(error, doc, res);
    });

}
//Add Contact
exports.Add_Contact = (req, res) => {
    var contact = new Contact(req.body);
    if (req.file != null) {
        contact.picture = req.file.path;
    }
    Contact.addContact(contact, (error, doc) => {
        helpers.callback(error, doc, res);
    });
};


// Edit Contact
exports.update_contact = (req, res, next) => {
    const data = req.body || {}
    const id = req.body._id;
    if (req.file != null) {
        data.picture = req.file.path;
    }
    Contact.updateContact(id, data, (error, doc) => {
        helpers.callback(error, doc, res);
    });
}

// Find Contact By Id
exports.get_contact_by_id = (req, res, next) => {
    const id = req.params.id;
    Contact.getContactById(id, (error, doc) => {
        helpers.callback(error, doc, res);
    });
}

// Delete Contact By Id
exports.delete_contact_by_id = (req, res, next) => {
    const id = req.params.id;
    Contact.deleteContactById(id, (error, doc) => {
        helpers.callback(error, doc, res);
    });
}
