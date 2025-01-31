document.getElementById('generate-email').addEventListener('click', function() {
  const randomString = Math.random().toString(36).substring(2, 15);
  const email = `${randomString}@tempmail.com`;

  document.getElementById('email').textContent = email;
  document.getElementById('email-output').style.display = 'block';
});
