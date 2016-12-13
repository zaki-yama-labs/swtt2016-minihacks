public with sharing class ContactController {

	@AuraEnabled
	public static List<Contact> getContacts() {
		return [SELECT Id, Account.Name, Name FROM Contact ORDER BY CreatedDate DESC];
	}

	@AuraEnabled
	public static List<Contact> getContactsByAccountName(String accountName) {
		System.debug(LoggingLevel.DEBUG, 'Search by account name: ' + accountName);
		String query = '%' + accountName + '%';
		return [SELECT Id, Account.Name, Name FROM Contact WHERE Account.Name LIKE :query ORDER BY CreatedDate DESC];
	}

}