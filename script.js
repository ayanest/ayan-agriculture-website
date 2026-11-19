// Update these values when the establishment's official contact details are available.
const CONTACT = {
  whatsapp: '', // Example: '9665XXXXXXXX' (digits only, without +)
  email: ''      // Example: 'info@example.com'
};

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open', !expanded);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
const whatsappLink = document.getElementById('whatsapp-link');
if (/^\d{8,15}$/.test(CONTACT.whatsapp)) {
  whatsappLink.href = `https://wa.me/${CONTACT.whatsapp}`;
  whatsappLink.textContent = 'Chat on WhatsApp ↗';
  whatsappLink.removeAttribute('aria-disabled');
} else {
  whatsappLink.addEventListener('click', event => event.preventDefault());
}
const emailLink = document.getElementById('email-link');
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONTACT.email)) {
  emailLink.href = `mailto:${CONTACT.email}`;
  emailLink.textContent = 'Send an Email ↗';
  emailLink.removeAttribute('aria-disabled');
} else {
  emailLink.addEventListener('click', event => event.preventDefault());
}
