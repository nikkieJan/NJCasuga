// =====================================================
// MOBILE MENU
// =====================================================

const burger = document.getElementById('burger');
const menu = document.getElementById('mobileMenu');

if (burger && menu) {

  burger.addEventListener('click', () => {

    const open = menu.classList.toggle('open');

    burger.setAttribute('aria-expanded', open);

  });


  menu.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      menu.classList.remove('open');

      burger.setAttribute('aria-expanded', 'false');

    });

  });

}


// =====================================================
// SCROLL REVEAL
// =====================================================

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('in');

      }

    });

  },

  {
    threshold:0.15
  }

);


document.querySelectorAll('.reveal').forEach(element => {

  observer.observe(element);

});


// =====================================================
// APK DOWNLOAD
// =====================================================

function downloadAPK(url) {

  if (!url) {
    return;
  }

  window.open(
    url,
    '_blank',
    'noopener,noreferrer'
  );

}


// =====================================================
// CONTACT MODAL
// =====================================================

const contactOverlay = document.getElementById('contactOverlay');
const openContactModal = document.getElementById('openContactModal');
const closeContactModal = document.getElementById('closeContactModal');

function openModal() {
  if (!contactOverlay) return;
  contactOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  const firstField = document.getElementById('cf-name');
  if (firstField) firstField.focus();
}

function closeModal() {
  if (!contactOverlay) return;
  contactOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (openContactModal) {
  openContactModal.addEventListener('click', openModal);
}

if (closeContactModal) {
  closeContactModal.addEventListener('click', closeModal);
}

if (contactOverlay) {
  contactOverlay.addEventListener('click', (e) => {
    if (e.target === contactOverlay) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && contactOverlay && contactOverlay.classList.contains('open')) {
    closeModal();
  }
});


// =====================================================
// CONTACT FORM
// =====================================================
// Static site, no backend — "sending" opens the visitor's email
// client with a pre-filled message addressed to you.

const CONTACT_EMAIL = 'njcasuga118@gmail.com';

const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('formNote');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const reason = document.getElementById('cf-reason').value;
    const message = document.getElementById('cf-message').value.trim();

    if (!name || !email || !reason || !message) {
      formNote.textContent = 'Please fill in every field before sending.';
      formNote.classList.add('error');
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry: ${reason} — from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})\nReason: ${reason}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    formNote.classList.remove('error');
    formNote.textContent = 'Opening your email app — thanks for reaching out!';
    contactForm.reset();
  });
}
