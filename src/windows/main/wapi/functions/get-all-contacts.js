module.exports = {
  /**
   * Retrieves all contacts
   * @param {Function} done Callback function (optional)
   * * @returns {Array} List of contacts
   */
  getAllContacts(done) {
    const contacts = window.Store.Contact.map((contact) =>
      WAPI._serializeContactObj(contact)
    );

    if (done !== undefined) done(contacts);
    return contacts;
  }
}