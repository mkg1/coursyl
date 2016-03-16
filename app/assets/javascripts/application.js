// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require datetimepicker
//= require jquery_ujs
//= require d3
//= require_tree .




function disableSubmitButton() {
  $(event.target).prop("disabled", true);
  $(event.target).closest("form").submit();
}

function bindSubmitClick() {
  $("input[type=submit]").on("click", disableSubmitButton);
}

$(bindSubmitClick);


function deleteRow() {
  var row = $(event.target).closest(".association");
  row.css("display", "none");
  var checkbox = $(event.target).siblings().last();
  checkbox.prop("checked", true);
}


function displayGrade(displayType) {
  var associations = $("#associations");
  var last_section = associations.children().last();
  if (displayType) {
    last_section.css("display", "block");
  } else {
    last_section.css("display", "none");
  }
}

function hideLastRow() {
  displayGrade(false);
}

$(hideLastRow);

function calendar() {
  $('.datetimepicker').datetimepicker();
}

$(calendar);



// function disableButton() {
//   document.getElementById("queso").disabled=true;
//   return document.getElementById("queso").form.submit();
// }
//
// // function disableSubmitButton(button){
// //   if ($("#associations").length>0) { //to check if any of those things are on the current page
// //     $(button).prop("disabled", true);
// //     $(button).closest("form").submit();
// //   }
// // }
//
// function hideLastRow() {
//   var count = document.getElementsByClassName("association container").length;
//   var last = document.getElementsByClassName("association container")[count-1];
//   last.style.display = "none";
// }
//
//
// function showLastRow() {
//   var count = document.getElementsByClassName("association container").length;
//   var last = document.getElementsByClassName("association container")[count-1];
//   last.style.display = 'block';
//   return false;
// }
//
// function removeRow(id) {
//   var row = document.getElementsByClassName("association container")[id];
//   row.style.display = "none"
//   //e.g., to change value...
//   // document.getElementById("count").value= 500*value;
//   // var truthy = document.getElementsByName("course[grade_thresholds_attributes][3][_destroy]").value =
//   return false;
// }
//
// // function removeRow() {
// //   var row = $(event.target).closest(".association");
// //   row.css("display", "none");
// //   // var checkbox = $(event.target).parent().children().last();
// //   var checkbox = $(event.target).siblines().last();
// //   checkbox.prop("checked", true);
// //
// // }
//
//   window.onload=hideLastRow;
