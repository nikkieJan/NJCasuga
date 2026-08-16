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
