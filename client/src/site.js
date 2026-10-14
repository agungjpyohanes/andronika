const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('#main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Buka navigasi' : 'Tutup navigasi');
    mainNav.classList.toggle('is-open', !isOpen);
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Buka navigasi');
      mainNav.classList.remove('is-open');
    });
  });
}

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

if (contactForm instanceof HTMLFormElement) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || 'Konsultasi umum').trim();
    const message = String(formData.get('message') || '').trim();
    const body = [
      `Nama: ${name}`,
      `Email: ${email}`,
      '',
      'Pesan:',
      message,
    ].join('\n');

    if (formStatus) {
      formStatus.textContent = 'Aplikasi email Anda akan terbuka untuk melanjutkan pengiriman.';
    }

    window.location.href = `mailto:sales@andronika.id?subject=${encodeURIComponent(`[ANDRONIKA] ${subject}`)}&body=${encodeURIComponent(body)}`;
  });
}

const year = document.querySelector('#current-year');
if (year) year.textContent = String(new Date().getFullYear());
