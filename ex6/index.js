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

    return chooseDeactivateTarget(response.data);
  })
  .then(({contacts, targetIdx}) => {
    console.log('Deactivating [' + contacts[targetIdx].Name + ']...');
    return deactivate(contacts[targetIdx].Id);
  })
  .then((response) => {
    console.log('Successfully deactivated');
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

function authorize() {
  return axios.post('https://login.salesforce.com/services/oauth2/token',
    // FIXME: session id 取得のためにここで username と password が必要になるのはいいの？
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

function chooseDeactivateTarget(contacts) {
  return new Promise((resolved, rejected) => {
    displayContacts(contacts);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Which contact do you want to deactivate? (Type index): ', (answer) => {
      resolved({contacts, targetIdx: answer});
    });
  });
}

function deactivate(contactId) {
  return axios.put(instanceUrl + '/services/apexrest/Contact',
    { contactId },
    {
      headers: { Authorization: 'Bearer ' + token },
    }
  );
}
