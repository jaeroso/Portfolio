const path = location.pathname.replace(/\/+$/, '') || '/';
document.querySelectorAll('[data-nav]').forEach(a => {
  if (a.getAttribute('href') === path) { a.classList.add('is-active'); a.setAttribute('aria-current','page'); }
});
document.querySelectorAll('[data-top]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); scrollTo({top:0,behavior:'smooth'}); }));
