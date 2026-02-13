// Toggle between login and register forms
function toggleForms() {
    document.getElementById('loginSection').classList.toggle('active');
    document.getElementById('registerSection').classList.toggle('active');
}

// Handle registration
const regForm = document.getElementById('registerForm');
if (regForm) {
    regForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('regUsername').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(u => u.username === username)) {
            alert('Username already exists!');
            return;
        }

        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please login.');
        toggleForms();
        this.reset();
    });
}

// Handle login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];
        let user = users.find(u => u.username === username && u.password === password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            // Redirect to your index.html dashboard
            window.location.href = 'index.html';
        } else {
            alert('Invalid username or password!');
        }
    });
}
