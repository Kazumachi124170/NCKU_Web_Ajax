$(document).ready(function() {
  $('.submit_button').click((event) => {
    event.preventDefault()
    $.post('./step7', {
      input1: $('#input1').val(),
      input2: $('#input2').val(),
    }, (data) => {
      document.getElementById("answer").innerHTML=data;
    })
  })
});
