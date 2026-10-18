menuInit();
function menuInit() {
const menuButton = document.querySelector<HTMLButtonElement>('.menu-boton');
const nav = document.querySelector<HTMLElement>('#menu-principal');
function cerrarMenu() { menuButton?.setAttribute('aria-expanded', 'false'); nav?.classList.remove('abierto'); }
menuButton?.addEventListener('click', () => {
  const abrir = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(abrir)); nav?.classList.toggle('abierto', abrir);
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', cerrarMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') { cerrarMenu(); menuButton.focus(); } });

const container = menuButton?.closest('.navegacion');
container?.classList.add('menu-listo');
document.addEventListener('click', event => {
  if (event.target instanceof Node && !container?.contains(event.target)) cerrarMenu();
});
const desktop = window.matchMedia('(min-width: 801px)');
desktop.addEventListener('change', () => {
  const focusWasInNav = nav?.contains(document.activeElement);
  cerrarMenu();
  if (!desktop.matches && focusWasInNav) menuButton?.focus();
});
}
