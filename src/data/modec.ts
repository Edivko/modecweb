// Datos compartidos: contacto, enlaces, productos y contenido de la página.
export const negocio = {
  telefono: '55 1827 9830',
  whatsapp: '525518279830',
  correo: 'modec.jorgem@gmail.com',
  // Completa las URLs oficiales para activar los enlaces.
  redes: [
    { nombre: 'Facebook', url: '' },
    { nombre: 'Instagram', url: '' },
    { nombre: 'Tiktok', url: '' },
  ],
};
export const cotizar = (texto: string) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`;
export const whatsapp = cotizar('Hola, me gustaría solicitar una cotización para mi espacio.');
export const menu = [
  ['Inicio', '#inicio'], ['Productos', '#productos'], ['Servicios', '#servicios'],
  ['Conócenos', '#nosotros'], ['Nuestro trabajo', '#nuestro-trabajo'], ['Contacto', '#contacto'],
];
export const productos = [
  {
    nombre: 'Persianas',
    descripcion: 'Diseños para controlar luz y privacidad',
    foto: 'persiana1.jpeg'
  },
  {
    nombre: 'Decoración de muros',
    descripcion: 'Lambrín, papel tapiz y revestimientos',
    foto: 'muros.webp'
  },
  {
    nombre: 'Cortinas',
    descripcion: 'Confección y acabados a la medida',
    foto: 'cortinas.webp'
  },
  {
    nombre: 'Pisos',
    descripcion: 'Soluciones para renovar tus espacios',
    foto: 'pisos.webp'
  },
  {
    nombre: 'Toldos',
    descripcion: 'De proyección y verticales',
    foto: 'toldos.webp'
  }
];

export const indicadores = [
  { cifra: '100%', texto: 'Garantizada en cada proyecto', icono: 'M12 3l3 3 4 1-1 5-3 3H9l-3-3-1-5 4-1z M8 15l-2 7 6-3 6 3-2-7' },
  { cifra: '200+', texto: 'Persianas y acabados exclusivos', icono: 'M3 3h18v18H3z M3 7h18M3 11h18M3 15h18M17 3v18' },
  { cifra: '500+', texto: 'Espacios transformados con éxito', icono: 'M2 11L12 2l10 9 M5 9v13h14V9 M10 22v-8h4v8' },
  { cifra: '10+', texto: 'De trayectoria comprobada', icono: 'M12 2l9 3v7c0 5-9 10-9 10S3 17 3 12V5z M12 7l2 3 3 1-2 2v4l-3-2-3 2v-4l-2-2 3-1z' },
];
export const pasos = ['Asesoría personalizada', 'Medición precisa', 'Instalación personalizada', 'Mantenimiento y soporte'];
// Añade únicamente testimonios reales autorizados; las capturas repiten uno de ejemplo.

export const testimonios = [
  {
    nombre: 'Carlos R.',
    texto: 'Excelente servicio. Quedé muy satisfecho con la atención, la calidad de la instalación y el resultado final en mi espacio.',
    servicio: 'Persianas',
    detalle: 'Proyecto residencial',
    foto: '',
    destacado: false
  },
  {
    nombre: 'María G.',
    texto: 'Me encantó el resultado. Fueron puntuales, muy atentos y me ayudaron a elegir la mejor opción para mi sala y comedor.',
    servicio: 'Cortinas',
    detalle: 'Atención personalizada',
    foto: '',
    destacado: true
  },
  {
    nombre: 'Luis A.',
    texto: 'Todo el proceso fue muy profesional. La instalación quedó excelente y los materiales realmente se ven de buena calidad.',
    servicio: 'Piso laminado',
    detalle: 'Proyecto interior',
    foto: '',
    destacado: false
  },
  {
    nombre: 'Fernanda M.',
    texto: 'Recibí una asesoría muy completa y me gustó mucho el seguimiento durante todo el proyecto. Recomiendo ampliamente a MODEC.',
    servicio: 'Decoración de muros',
    detalle: 'Cliente verificado',
    foto: '',
    destacado: false
  },
  {
    nombre: 'Jorge T.',
    texto: 'Muy buena experiencia. Desde la medición hasta la instalación hubo orden, limpieza y excelente trato.',
    servicio: 'Instalación',
    detalle: 'Servicio especializado',
    foto: '',
    destacado: false
  }
];

