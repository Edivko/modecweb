#!/usr/bin/env python3
"""MODEC: sustituye iconos Unicode por SVG conservando el código actual.
Uso: python3 corregir_iconos_modec.py [ruta_del_proyecto]
"""
from pathlib import Path
from datetime import datetime
from zipfile import ZipFile, ZIP_DEFLATED
import re
import sys

ROOT = Path(sys.argv[1]).expanduser().resolve() if len(sys.argv) > 1 else Path.cwd().resolve()
SRC = ROOT / 'src'
HEADER = SRC / 'components' / 'Encabezado.astro'
if not (SRC.is_dir() and HEADER.is_file()):
    raise SystemExit('ERROR: Ejecuta este script dentro de modecweb o indica su ruta. No se cambió ningún archivo.')

# SVG vectoriales monocromáticos; adoptan el color del texto por currentColor.
def svg(paths, size='1em'):
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" '
            'width="'+size+'" height="'+size+'" fill="none" stroke="currentColor" '
            'stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" '
            'style="display:inline-block;vertical-align:-0.12em;flex-shrink:0" '
            'aria-hidden="true">'+paths+'</svg>')

ICONS = {
    '↗': svg('<path d="M7 17 17 7M8 7h9v9"/>'),
    '↘': svg('<path d="M7 7 17 17M17 8v9H8"/>'),
    '→': svg('<path d="M4 12h16m-6-6 6 6-6 6"/>'),
    '←': svg('<path d="M20 12H4m6-6-6 6 6 6"/>'),
    '☎': svg('<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.8a2 2 0 0 1-.6 1.7L7.1 10a16 16 0 0 0 6.9 6.9l1.8-1.8a2 2 0 0 1 1.7-.6l2.8.4a2 2 0 0 1 1.7 2Z"/>'),
    '✉': svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/>'),
    '⌖': svg('<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>'),
    '☰': svg('<path d="M4 6h16M4 12h16M4 18h16"/>'),
    '➡': svg('<path d="M4 12h16m-6-6 6 6-6 6"/>'),
    '⬇': svg('<path d="M12 4v16m-6-6 6 6 6-6"/>'),
    '➜': svg('<path d="M4 12h16m-6-6 6 6-6 6"/>'),
    '➝': svg('<path d="M4 12h16m-6-6 6 6-6 6"/>'),
}
# Incluye las variantes de presentación emoji (FE0F) o texto (FE0E).
pattern = re.compile('('+'|'.join(re.escape(k) for k in sorted(ICONS, key=len, reverse=True))+')([\ufe0e\ufe0f]?)')
MOBILE_MENU = '''
  /* MODEC: botón de menú móvil con colores de la marca (sin azul nativo) */
  .menu-boton {
    color: var(--negro);
    background-color: var(--blanco);
    border: 1px solid var(--negro);
    border-radius: 6px;
    font-family: var(--fuente-textos);
    font-size: 15px;
    font-weight: 600;
    line-height: 1.2;
    -webkit-appearance: none;
    appearance: none;
    -webkit-text-fill-color: var(--negro);
  }
  .menu-boton svg { color: var(--negro); }
'''
MARKER = '/* MODEC: botón de menú móvil con colores de la marca'
changes = {}
for path in sorted(SRC.rglob('*.astro')):
    old = path.read_text(encoding='utf-8')
    new = pattern.sub(lambda m: ICONS[m.group(1)], old)
    if path == HEADER and MARKER not in new:
        if '</style>' not in new:
            raise SystemExit('ERROR: no se encontró </style> en Encabezado.astro; no se modificó nada.')
        new = new.replace('</style>', MOBILE_MENU + '\n</style>', 1)
    if new != old:
        changes[path] = (old, new)

if not changes:
    print('No hay iconos de texto pendientes: no se modificó ningún archivo.')
    raise SystemExit(0)

backup = ROOT.parent / ('MODEC_respaldo_antes_de_iconos_' + datetime.now().strftime('%Y%m%d_%H%M%S') + '.zip')
with ZipFile(backup, 'w', ZIP_DEFLATED) as z:
    for path, (old, _) in changes.items():
        z.writestr(str(path.relative_to(ROOT)), old)

for path, (_, new) in changes.items():
    path.write_text(new, encoding='utf-8')
    print('CORREGIDO:', path.relative_to(ROOT))
print(f'\n{len(changes)} archivo(s) corregido(s).')
print('RESPALDO:', backup)
print('SIGUIENTE PASO: npm run build')

