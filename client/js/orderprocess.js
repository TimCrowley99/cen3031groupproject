function showSection(nextSection, currentSection) {
  var x = document.getElementById(nextSection);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var y = document.getElementById(currentSection);
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }

  if (payment.style.display === "block") {
    paypal.Buttons().render('body');
  }
}

function showSubmitButton() {
  var s = document.getElementById('submitButton');
  if (s.style.display === "none") {
    s.style.display = "block";
  }
}