function calculateAge() {
  var birthdayInput = document.getElementById('birthday').value;
  var birthdayParts = birthdayInput.split('.');
  var birthdayDay = parseInt(birthdayParts[0]);
  var birthdayMonth = parseInt(birthdayParts[1]);
  var birthdayYear = parseInt(birthdayParts[2]);

  var birthdayDate = new Date(birthdayYear, birthdayMonth - 1, birthdayDay);
  var currentDate = new Date();

  var ageInMilliseconds = currentDate - birthdayDate;
  var ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

  var years = Math.floor(ageInDays / 365);
  var remainingDays = ageInDays % 365;

  document.getElementById('result').innerText = "You are " + years + " years and " + remainingDays + " days old.";
}

document.getElementById('birthday').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    calculateAge();
  }
});
