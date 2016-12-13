({
  onChange: function(cmp, event, helper) {
    console.log(event.target.value);
    if (event.keyCode === 13) {
      var onEnterEvent = cmp.getEvent('onEnterSearchBar');
      onEnterEvent.setParams({searchKey: event.target.value});
      onEnterEvent.fire();
    }
  }
})
