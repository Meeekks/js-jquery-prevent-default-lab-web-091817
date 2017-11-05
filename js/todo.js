$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(event) {
    var inputItem = $('#item').val();
    $('ol').append('<li>' + inputItem + '</li>');
    event.preventDefault();
  });
}

// no idea why the same thing wasn't working
