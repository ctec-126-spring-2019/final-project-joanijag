// checks for document fully loaded
$(document).ready(function () {
  // binds submit button to this event
  $('#data').on('submit', function (evt) {
    console.log(evt);
    // empty array to hold errors
    var errors = [];
    // used for error checking
    var flag = false;
    // checks firstName field for empty
    if ($('#firstName').val() === '') {
      $('#firstName').css('border', '3px solid red');
      $('#err1').remove();
      $('#firstName').after('<span id="err1"> Please fill me in</span>');
      // $('#firstName').focus();
      flag = true;
      // pushes error array onto errors
      errors.push(['firstName', 'Please fill in your first name']);
    }

    if ($('#lastName').val() === '') {
      $('#lastName').css('border', '3px solid red');
      $('#err2').remove();
      $('#lastName').after('<span id="err2"> Please fill me in</span>');
      // $('#lastName').focus();
      flag = true;
      errors.push(['lastName', 'Please fill in your last name']);
    }
    if ($('#email').val() === '') {
      $('#email').css('border', '3px solid red');
      $('#err3').remove();
      $('#email').after('<span id="err3"> Please fill me in</span>');
      // $('#email').focus();
      flag = true;
      errors.push(['email', 'Please fill in your email']);
    }
    if ($('#password').val() === '') {
      $('#password').css('border', '3px solid red');
      $('#err4').remove();
      $('#password').after('<span id="err4"> Please fill me in</span>');
      // $('#password').focus();
      flag = true;
      errors.push(['password', 'Please enter your password']);
    }

    // error bucket and form submission prevent
    if (flag) {
      var errorBucket = $('.errors');
      var output = '<ul>';
      for (let index = 0; index < errors.length; index++) {
        output += '<li>' + errors[index][1] + '</li>';
      }
      output += '</ul>';
      errorBucket.html(output);
      // stops form from being submitted
      evt.preventDefault();
      // puts the currsor in first unfilled input
      $('#' + errors[0][0]).focus();
    }

  });

  // binds an event to the firstname field for blur/tab
  //   $('#firstname').on('blur', function () {
  //     if ($(this).val().length > 0) {
  //       $(this).css('border', '1px solid black');
  //     } else {
  //       $(this).css('border', '3px solid red');
  //     }
  //   });

  //   $('#firstname').on('keypress', function () {
  //     console.log('type...');
  //   });

});