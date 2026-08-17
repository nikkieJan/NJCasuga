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
// Static site, no backend — submissions are sent via Web3Forms,
// which relays them straight to your inbox without needing a server.

const WEB3FORMS_ACCESS_KEY = '5ac1e75a-3c74-4b05-bdda-832914cf2af3';

const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('formNote');

if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const reason = document.getElementById('cf-reason').value;
    const message = document.getElementById('cf-message').value.trim();

    if (!name || !email || !reason || !message) {
      formNote.classList.add('error');
      formNote.textContent = 'Please fill in every field before sending.';
      return;
    }

    const submitBtn = contactForm.querySelector('.form-submit');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }
    formNote.classList.remove('error');
    formNote.textContent = '';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio inquiry: ${reason} — from ${name}`,
          from_name: name,
          name: name,
          email: email,
          reason: reason,
          message: message
        })
      });

      const result = await response.json();

      if (result.success) {
        formNote.classList.remove('error');
        formNote.textContent = 'Message sent — thanks for reaching out! I\'ll get back to you soon.';
        contactForm.reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      formNote.classList.add('error');
      formNote.textContent = 'Something went wrong sending your message. Please try again or email me directly.';
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    }
  });
}
