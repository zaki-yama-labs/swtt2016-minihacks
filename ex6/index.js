const axios = require('axios');
const querystring = require('querystring');
const readline = require('readline');

// ここに入力
const CLIENT_ID = '';
const CLIENT_SECRET = '';
const USERNAME = '';
const PASSWORD = '';

let token;
let instanceUrl;

console.log('>>>Authorizing...');
authorize()
  .then((response) => {
    console.log('>>>Successfully authorized');
    token = response.data.access_token;
    instanceUrl = response.data.instance_url;

    console.log('>>>Fetching contacts...');
    return fetchContacts();
  })
  .then((response) => {
    console.log('>>>Successfully fetched ' + response.data.length + ' contacts');

    return displayContacts(response.data);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

function authorize() {
  return axios.post('https://login.salesforce.com/services/oauth2/token',
    querystring.stringify({
      grant_type: 'password',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      username: USERNAME,
      password: PASSWORD
    }), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
}

function fetchContacts() {
  return axios.get(instanceUrl + '/services/apexrest/Contact',
    {
      headers: { Authorization: 'Bearer ' + token },
    }
  );
}

function displayContacts(contacts) {
  console.log('Name: Description');
  console.log('-----------------');
  contacts.forEach((contact, idx) => {
    console.log(`[${idx}] ${contact.Name}: ${contact.Description || ''}`);
  });
}
