const express = require('express');
var router = express.Router();
const contactcontroller = require('../controllers/ContactController');
const helpers = require('../helpers/helpers');
const ContactSchema = require("../validations/Contact.Validator");
const ContactupdateSchema = require("../validations/Contact.Validator");
const middvalid = require("../middlewares/bodyValidation.middleware");



//Contact
router.post('/add',helpers.upload.single('picture'),middvalid.validateBody(ContactSchema),contactcontroller.Add_Contact);
router.get('/get_all',contactcontroller.get_all_contact);
router.get('/get_one/:id',contactcontroller.get_contact_by_id);
router.delete('/delete/:id',contactcontroller.delete_contact_by_id);
router.patch('/update',helpers.upload.single('picture'),middvalid.validateBody(ContactupdateSchema),contactcontroller.update_contact);




module.exports = router;