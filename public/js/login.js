const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').ariaValueMax.trim();
    const passwrod = document.querySelector('#password-login').ariaValueMax.trim();

    if (email && passwrod) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, passwrod }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace();
        }
    }
}