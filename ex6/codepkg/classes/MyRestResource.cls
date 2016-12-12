@RestResource(urlMapping='/Contact/*')
global with sharing class MyRestResource {

	@HttpGet
	global static List<Contact> doGet() {
		RestRequest req = RestContext.request;
		RestResponse res = RestContext.response;
		List<Contact> result = [SELECT Id, Name, Description FROM Contact];
		return result;
	}

	@HttpPut
	global static void deactivate(Id contactId) {
		RestRequest req = RestContext.request;
		RestResponse res = RestContext.response;

		Contact contact = new Contact(Id = contactId);
		contact.Description = 'アクティブでない取引先責任者';
		update contact;
	}
}