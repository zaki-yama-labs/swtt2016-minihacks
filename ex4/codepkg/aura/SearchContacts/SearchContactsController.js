({
  doInit: function(cmp, event, helper) {
    var action = cmp.get('c.getContacts');
    action.setCallback(this, function(a) {
      cmp.set('v.contacts', a.getReturnValue());
    });
    $A.enqueueAction(action);
  },

  search: function(cmp, event, helper) {
    var searchKey = event.getParam('searchKey');
    console.log('searchKey:', searchKey);
    var action = cmp.get("c.getContactsByAccountName");
    action.setParams({
      accountName: searchKey
    });
    action.setCallback(this, function(a) {
      cmp.set('v.contacts', a.getReturnValue());
    });
    $A.enqueueAction(action);
  }
})
