
# Cinéplanet

Cinéplanet es una aplicación web interactiva que simula una cartelera de cine, donde los usuarios pueden ver información sobre las películas, agregar sus favoritas y ponerse en contacto con el soporte a través de un formulario.

## Características

- **Cartelera de películas**: Muestra una lista de películas destacadas con información como el título, la descripción y la imagen.
- **Formulario de contacto**: Permite a los usuarios enviar mensajes con su nombre, correo electrónico y mensaje.
- **Favoritos**: Los usuarios pueden marcar las películas como favoritas.
- **Interactividad**: Notificaciones visuales usando `react-toastify` para alertar sobre el envío de mensajes.

## Tecnologías usadas

- **React**: Librería para construir interfaces de usuario.
- **React Router**: Enrutamiento para las diferentes vistas del proyecto.
- **CSS**: Estilos básicos para el diseño y la presentación.
- **React Toastify**: Para mostrar notificaciones emergentes en la interfaz.
- **Vite**: Herramienta de construcción rápida para React.

## Requisitos

- Node.js (versión 14 o superior).
- npm o yarn.

## Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/cineplanet.git
   cd cineplanet


Instalar las dependencias:

Si usas npm:

bash
Copiar
Editar
npm install

Estructura del Proyecto
src/components: Contiene los componentes principales como Header, HeroBanner, ItemList, ItemCard, ItemSearch, LoadingSkeleton, etc.

src/css/modules: Archivos CSS para la estilización del proyecto, organizados en módulos como CardList.css, Contact.css, etc.

src/data: Datos de ejemplo que se muestran en la cartelera, como las películas.

src/hooks: Personal hooks como useLocalStorage y useDebounce.

public: Archivos públicos como imágenes, favicon, etc.
