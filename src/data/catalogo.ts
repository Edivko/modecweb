
export interface TipoCatalogo {
  nombre: string;
  slug: string;
}

export interface CategoriaCatalogo {
  nombre: string;
  slug: string;
  tipos: TipoCatalogo[];
}

export const categoriasCatalogo: CategoriaCatalogo[] = [
  {
    nombre: 'Persianas',
    slug: 'persianas',
    tipos: [
      { nombre: 'Enrollables', slug: 'enrollables' },
      { nombre: 'Sheer Elegance', slug: 'sheer-elegance' },
      { nombre: 'Verticales', slug: 'verticales' },
      { nombre: 'Horizontales', slug: 'horizontales' },
      { nombre: 'Romanas', slug: 'romanas' },
      { nombre: 'Celulares', slug: 'celulares' },
      { nombre: 'Paneles japoneses', slug: 'paneles-japoneses' }
    ]
  },
  {
    nombre: 'Cortinas',
    slug: 'cortinas',
    tipos: [
      { nombre: 'Plisado francés', slug: 'plisado-frances' },
      { nombre: 'Ojillo', slug: 'ojillo' },
      { nombre: 'Ondulado onda perfecta', slug: 'onda-perfecta' }
    ]
  },
  {
    nombre: 'Pisos',
    slug: 'pisos',
    tipos: []
  },
  {
    nombre: 'Decoración de muros',
    slug: 'decoracion-muros',
    tipos: [
      { nombre: 'Lambrín', slug: 'lambrin' },
      { nombre: 'Papel tapiz', slug: 'papel-tapiz' },
      { nombre: 'Placas de PVC tipo mármol', slug: 'pvc-marmol' },
      { nombre: 'Placas de PB tipo madera', slug: 'pb-madera' }
    ]
  },
  {
    nombre: 'Toldos',
    slug: 'toldos',
    tipos: [
      { nombre: 'De proyección', slug: 'proyeccion' },
      { nombre: 'Verticales', slug: 'verticales' }
    ]
  }
];
