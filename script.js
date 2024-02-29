document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action

    // Your email address
    var email = 'joe@joehrris.com';

    // Create a new textarea element and give it id='temp_element'
    var textarea = document.createElement('textarea');
    textarea.id = 'temp_element';

    // Optional step to make less noise on the page, if any!
    textarea.style.height = 0;

    // Now append it to your page somewhere, I chose <body>
    document.body.appendChild(textarea);

    // Give our textarea a value of whatever inside the email variable
    textarea.value = email;

    // Now copy whatever inside the textarea to clipboard
    var selector = document.querySelector('#temp_element');
    selector.select();
    document.execCommand('copy');

    // Remove the <textarea> element
    document.body.removeChild(selector);

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    // Show the modal
    modal.style.display = "block";
});