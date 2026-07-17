# HPVC QR Accesos

Miniaplicación web institucional para validar accesos por código QR del Hospital Provincial Dr. Verdi Cevallos Balda.

El proyecto contiene dos páginas estáticas, preparadas para publicarse en Vercel y usarse como destino final de los QR generados en TinyWow.

## Páginas incluidas

| Página | Uso |
| --- | --- |
| `/administrativo.html` | Bienvenida y confirmación para personal administrativo |
| `/operativo.html` | Bienvenida y confirmación para personal operativo |

## Objetivo

Esta aplicación muestra una pantalla institucional de acceso aceptado cuando una persona escanea el QR correspondiente a su grupo. La interfaz reutiliza la identidad visual del portal del hospital: colores, tipografía, logos, footer, fondo institucional y estilo de confirmación.

> Nota importante: estos QR validan una categoría de acceso, no la identidad individual del portador. Deben complementarse con la identificación institucional correspondiente.

## Tecnologías

- React
- Vite
- Tailwind CSS
- Lucide React

## Ejecutar localmente

```bash
npm install
npm run dev
```

Luego abre:

```text
http://localhost:5173/administrativo.html
http://localhost:5173/operativo.html
```

## Compilar para producción

```bash
npm run build
```

La compilación genera la carpeta `dist/` con las páginas listas para publicar.

Para revisar la versión compilada:

```bash
npm run preview
```

## Despliegue en Vercel

Al importar este repositorio en Vercel, usa esta configuración:

| Opción | Valor |
| --- | --- |
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | vacío |

Después del despliegue, las URLs finales tendrán este formato:

```text
https://<proyecto-vercel>.vercel.app/administrativo.html
https://<proyecto-vercel>.vercel.app/operativo.html
```

## Generación de QR

Cuando Vercel entregue las URLs finales:

1. Entra a TinyWow o a la herramienta QR elegida.
2. Genera un QR para `/administrativo.html`.
3. Genera otro QR para `/operativo.html`.
4. Prueba ambos QR desde Android y iPhone antes de imprimirlos o distribuirlos.

## Portal institucional

El botón "Ir al portal institucional" dirige al sitio oficial:

```text
https://hpvc.gob.ec
```

## Créditos

Proyecto preparado para el Hospital Provincial Dr. Verdi Cevallos Balda, como extensión web externa para validación visual de accesos QR.
