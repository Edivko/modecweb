// Fotografías de proyectos terminados. Sustituye cada ruta por una foto real de MODEC.
// Los títulos y categorías son etiquetas organizativas, no testimonios ni afirmaciones sobre trabajos publicados.
export interface TrabajoGaleria {
  id: number;
  titulo: string;
  categoria: 'persianas' | 'cortinas' | 'pisos' | 'decoracion-muros' | 'toldos';
  imagen: string;
  alt: string;
}

export const trabajosGaleria: TrabajoGaleria[] = [
  { id: 1, titulo: 'Persianas · 01', categoria: 'persianas', imagen: '/images/trabajos/trabajo-01.webp', alt: 'Fotografía de un proyecto de persianas MODEC' },
  { id: 2, titulo: 'Cortinas · 02', categoria: 'cortinas', imagen: '/images/trabajos/trabajo-02.webp', alt: 'Fotografía de un proyecto de cortinas MODEC' },
  { id: 3, titulo: 'Muros · 03', categoria: 'decoracion-muros', imagen: '/images/trabajos/trabajo-03.webp', alt: 'Fotografía de un proyecto de decoración de muros MODEC' },
  { id: 4, titulo: 'Persianas · 04', categoria: 'persianas', imagen: '/images/trabajos/trabajo-04.webp', alt: 'Fotografía de un proyecto de persianas MODEC' },
  { id: 5, titulo: 'Pisos · 05', categoria: 'pisos', imagen: '/images/trabajos/trabajo-05.webp', alt: 'Fotografía de un proyecto de pisos MODEC' },
  { id: 6, titulo: 'Toldos · 06', categoria: 'toldos', imagen: '/images/trabajos/trabajo-06.webp', alt: 'Fotografía de un proyecto de toldos MODEC' },
  { id: 7, titulo: 'Cortinas · 07', categoria: 'cortinas', imagen: '/images/trabajos/trabajo-07.webp', alt: 'Fotografía de un proyecto de cortinas MODEC' },
  { id: 8, titulo: 'Persianas · 08', categoria: 'persianas', imagen: '/images/trabajos/trabajo-08.webp', alt: 'Fotografía de un proyecto de persianas MODEC' },
  { id: 9, titulo: 'Muros · 09', categoria: 'decoracion-muros', imagen: '/images/trabajos/trabajo-09.webp', alt: 'Fotografía de un proyecto de decoración de muros MODEC' },
];
