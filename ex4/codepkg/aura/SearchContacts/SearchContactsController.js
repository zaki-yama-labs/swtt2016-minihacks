({
  doInit: function(cmp, event, helper) {
    var action = cmp.get('c.getContacts');
    action.setCallback(this, function(a) {
      cmp.set('v.contacts', a.getReturnValue());
    });
    $A.enqueueAction(action);
  }
})
