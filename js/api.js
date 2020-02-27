function makeSaveChanges() {
  var reqBody = {
    address1: $("#address1").val(),
    address2: $("#address2").val(),
    zipcode: $("#zipcode").val(),
    city: $("#city").val()
  };

  $.ajax({
    type: "POST",
    url: "https://localhost:3000/makesave",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify(reqBody),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data) {
      alert(data);
    },
    failure: function(errMsg) {
      alert(errMsg);
    }
  });
}