@RestResource(urlMapping='/Contact/*')
global with sharing class MyRestResource {

	@HttpGet
	global static List<Contact> doGet() {
		RestRequest req = RestContext.request;
		RestResponse res = RestContext.response;
		List<Contact> result = [SELECT Id, Name, Description FROM Contact];
		return result;
	}

	@HttpPost
	global static String doPost(String name,
			String phone, String website) {
		Account account = new Account();
		account.Name = name;
		account.phone = phone;
		account.website = website;
		insert account;
		return account.Id;
	}
}