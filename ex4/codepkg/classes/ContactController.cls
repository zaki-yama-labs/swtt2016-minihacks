public with sharing class ContactController {

	@AuraEnabled
	public static List<Contact> getContacts() {
		return [SELECT Id, Account.Name, Name FROM Contact ORDER BY CreatedDate DESC];
	}
}