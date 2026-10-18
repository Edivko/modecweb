const form = document.querySelector<HTMLFormElement>('#cotizacion');
if (form) {
  // Sin JS se conserva la validación nativa y el enlace directo a WhatsApp.
  form.noValidate = true;
  const fields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input, select'));
  const status = form.querySelector<HTMLElement>('#estado-cotizacion');
  function validate(field: HTMLInputElement | HTMLSelectElement) {
    const value = field.value.trim();
    let message = value ? '' : 'Completa este campo.';
    if (field.name === 'telefono' && value &&
      (!/^[+\d\s().-]+$/.test(value) || value.replace(/\D/g, '').length < 10 || value.replace(/\D/g, '').length > 15)) {
      message = 'Escribe entre 10 y 15 dígitos; puedes incluir +, espacios o guiones.';
    }
    const error = form?.querySelector<HTMLElement>(`#error-${field.id}`);
    if (error) error.textContent = message;
    field.setAttribute('aria-invalid', String(Boolean(message)));
    return !message;
  }
  fields.forEach(field => {
    field.addEventListener('blur', () => validate(field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validate(field);
    });
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    const invalid = fields.filter(field => !validate(field));
    if (invalid.length) {
      if (status) status.textContent = 'Revisa los campos indicados antes de continuar.';
      invalid[0].focus();
      return;
    }
    const data = new FormData(form);
    const message = `Hola, soy ${String(data.get('nombre')).trim()}. Me interesa cotizar: ${data.get('servicio')}. Mi teléfono es ${String(data.get('telefono')).trim()}.`;
    if (status) status.textContent = 'Abriendo WhatsApp. La solicitud aún no se ha enviado.';
    window.location.assign(`https://wa.me/${form.dataset.whatsapp}?text=${encodeURIComponent(message)}`);
  });
}
