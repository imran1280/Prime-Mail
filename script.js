// Login form toggle
function showLoginForm() {
    const loginForm = document.getElementById('login-form');
    loginForm.style.display = 'block';
}

// Video Upload Form Submission
const videoUploadForm = document.getElementById('video-upload-form');
videoUploadForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const videoFile = document.getElementById('video-file').files[0];
    
    if (videoFile) {
        alert('ভিডিও আপলোড হচ্ছে: ' + videoFile.name);
        // এখানে আপনি ভিডিও ফাইল আপলোড করার জন্য সঠিক API ব্যবহার করবেন (যেমন Firebase বা AWS S3)
    }
});

// Login Form Submission
const loginForm = document.getElementById('login-form-element');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // এখানে আপনি ব্যাকএন্ড সিস্টেমে লগইন প্রক্রিয়া যুক্ত করবেন
    if (username === 'admin' && password === '1234') {
        alert('লগইন সফল');
        document.getElementById('login-form').style.display = 'none';
    } else {
        alert('লগইন ব্যর্থ। দয়া করে আবার চেষ্টা করুন!');
    }
});
