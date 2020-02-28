$(document).ready(function() {
  console.log("ready!");
  getclaimerdetails();
});

function getclaimerdetails() {
  $.ajax({
    type: "post",
    url: "http://localhost:3000/getclaimerdetails",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify({}),
    cache: false,
    contentType: "application/json",
    dataType: "json",
    crossDomain: true,

    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    success: function(data) {
      $(".certificateNo-node").text(data.certificateNo);
      $(".effectiveDate-node").text(data.effectiveDate);
      $(".lifeInsured-node").text(data.lifeInsured);
      $(".status-node").text(data.status);
      //      alert(JSON.stringify(data));
    },
    failure: function(errMsg) {
      alert(errMsg);
    }
  });
}

function getclaimHistory() {
  $.ajax({
    type: "post",
    url: "http://localhost:3000/getclaimerdetails",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify({}),
    cache: false,
    contentType: "application/json",
    dataType: "json",
    crossDomain: true,

    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    success: function(data) {
      $(".claimantNumber1-node").text(data.row1.claimantNumber);
      $(".claimant1-node").text(data.row1.claimant);
      $(".typeOfLoss1-node").text(data.row1.typeOfLoss);
      $(".status1-node").text(data.row1.status);
      $(".claimantNumber2-node").text(data.row2.claimantNumber);
      $(".claimant2-node").text(data.row2.claimant);
      $(".typeOfLoss2-node").text(data.row2.typeOfLoss);
      $(".status2-node").text(data.row2.status);
      // $(".claimantNumber3-node").text(data.row3.claimantNumber);
      // $(".claimant3-node").text(data.row3.claimant);
      // $(".typeOfLoss3-node").text(data.row3.typeOfLoss);
      // $(".status3-node").text(data.row3.status);
      //      alert(JSON.stringify(data));
    },
    failure: function(errMsg) {
      alert(errMsg);
    }
  });
}

function makeSaveChanges() {
  var reqBody = {
    address1: $("#address1").val(),
    address2: $("#address2").val(),
    zipcode: $("#zipcode").val(),
    city: $("#city").val()
  };

  $.ajax({
    type: "post",
    url: "http://localhost:3000/makesave",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify(reqBody),
    cache: false,
    contentType: "application/json",
    dataType: "json",
    crossDomain: true,

    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    success: function(data) {
      console.log(JSON.stringify(data));
    },
    failure: function(errMsg) {
      alert(errMsg);
    }
  });
  $("#exampleModal").modal("toggle");
  setTimeout(function() {
    $("#successUpdateModal").modal("toggle");
  }, 100);
}
