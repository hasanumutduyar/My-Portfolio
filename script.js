function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const menuToggle = document.getElementById('menuToggle');
    menu.classList.toggle('hidden');
    menu.classList.toggle('active');
    
    if (menu.classList.contains('hidden')) {
        menuToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        `;
    } else {
        menuToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        `;
    }
}

document.getElementById('menuToggle').addEventListener('click', toggleMenu);

document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});

lucide.createIcons();

document.addEventListener('DOMContentLoaded', (event) => {
    const emailProtection = document.querySelector('a[data-cfemail]');
    if (emailProtection) {
        const encodedEmail = emailProtection.dataset.cfemail;
        const decodedEmail = decodeEmail(encodedEmail);
        emailProtection.href = 'mailto:' + decodedEmail;
        emailProtection.textContent = decodedEmail;
    }
});

function decodeEmail(encodedString) {
    let email = "", r = parseInt(encodedString.substr(0, 2), 16);
    for (let n = 2; encodedString.length - n; n += 2) {
        let i = parseInt(encodedString.substr(n, 2), 16) ^ r;
        email += String.fromCharCode(i);
    }
    return email;
}