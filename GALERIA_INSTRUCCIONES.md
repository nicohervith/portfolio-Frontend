# Sistema de Galería para Proyectos

## Cómo agregar galerías a tus proyectos

El sistema permite mostrar múltiples imágenes por proyecto. Aquí está cómo:

### Estructura básica de una tarjeta con galería:

```html
<div class="card">
  <div style="position: relative; width: 100%; height: 100%;">
    <img
      src="./assets/img/imagen-principal.png"
      class="card-img-top"
      alt="Descripción"
    />
    <button
      class="gallery-badge"
      onclick="openGallery('Nombre del Proyecto', ['./assets/img/imagen1.png', './assets/img/imagen2.png', './assets/img/imagen3.png'])"
    >
      <i class="fa-regular fa-images"></i>
      <span>Ver Galería</span>
    </button>
  </div>
  <div class="card-body">
    <p class="card-text">Descripción del proyecto</p>
    <div class="container-button">
      <a href="https://github.com/..." target="_blank" rel="noopener">
        <button>Repositorio</button>
      </a>
      <a href="https://..." target="_blank">
        <button>Sitio web</button>
      </a>
    </div>
  </div>
</div>
```

---

## Pasos para agregar imágenes a un proyecto:

### 1. **Prepara tus imágenes**

- Guarda las imágenes en `assets/img/`
- Usa nombres descriptivos (ej: `proyecto-pagina1.png`, `proyecto-pagina2.png`)

### 2. **Envuelve la imagen principal**

- Reemplaza `<img src="..." />` con:

```html
<div style="position: relative; width: 100%; height: 100%;">
  <img src="./assets/img/imagen-principal.png" class="card-img-top" alt="" />
  <!-- badge irá aquí -->
</div>
```

### 3. **Agrega el badge de galería**

- Dentro del `<div>` anterior, después de la imagen:

```html
<button
  class="gallery-badge"
  onclick="openGallery('Nombre Proyecto', ['./assets/img/img1.png', './assets/img/img2.png'])"
>
  <i class="fa-regular fa-images"></i>
  <span>Ver Galería</span>
</button>
```

### 4. **Lista de imágenes**

- En el onclick, agrega todas tus imágenes como array:

```javascript
openGallery("Mi Proyecto", [
  "./assets/img/captura1.png",
  "./assets/img/captura2.png",
  "./assets/img/captura3.png",
]);
```

---

## Funcionalidades de la galería

✨ **Características:**

- ✅ Browsea imágenes con botones ← →
- ✅ Navega con flechas del teclado (← →)
- ✅ Cierra con ESC o click fuera
- ✅ Muestra contador de imágenes (1 / 3)
- ✅ Animaciones suaves
- ✅ Badge aparece al hacer hover en la tarjeta

---

## Ejemplo completo con 3 imágenes:

```html
<div class="card">
  <div style="position: relative; width: 100%; height: 100%;">
    <img
      src="./assets/img/myapp-inicio.png"
      class="card-img-top"
      alt="Mi Aplicación"
    />
    <button
      class="gallery-badge"
      onclick="openGallery('Mi Aplicación Full Stack', ['./assets/img/myapp-inicio.png', './assets/img/myapp-dashboard.png', './assets/img/myapp-perfil.png'])"
    >
      <i class="fa-regular fa-images"></i>
      <span>Ver Galería</span>
    </button>
  </div>
  <div class="card-body">
    <p class="card-text">Descripción de mi aplicación</p>
    <div class="container-button">
      <a href="https://github.com/..." target="_blank" rel="noopener">
        <button>Repositorio</button>
      </a>
      <a href="https://..." target="_blank">
        <button>Sitio web</button>
      </a>
    </div>
  </div>
</div>
```

---

## Tips

💡 **Si un proyecto tiene solo una imagen:**

- Igual puedes agregar el badge con solo esa imagen
- La galería funcionará normal (mostrará "1 / 1")

💡 **Para proyectos sin imágenes aún:**

- Mantén la estructura con el badge vacío
- Cuando tengas imágenes, reemplaza el array

💡 **Nombres de imágenes:**

- Usa nombres claros: `nombre-proyecto-screen1.png`
- Así es más fácil de mantener el código

---

## Controles de galería

| Control      | Acción           |
| ------------ | ---------------- |
| Botón ❮ / ❯  | Navegar imágenes |
| ← Flecha izq | Imagen anterior  |
| → Flecha der | Imagen siguiente |
| ESC          | Cerrar galería   |
| Click fuera  | Cerrar galería   |

¡Listo! Tu galería está lista para usar. 🎨
