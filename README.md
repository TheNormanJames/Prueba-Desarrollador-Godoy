# 🐱 Cat Facts + GIF Finder

Este proyecto es una pequeña aplicación en React + Vite que muestra datos curiosos sobre gatos obtenidos desde una API pública y los relaciona con GIFs obtenidos desde Giphy.
Se almacena los datos gracias al localstorage así se puede visualizar una historial de las busquedas.

## 🚀 Funcionalidades

- 🐈 Obtener una frase aleatoria sobre gatos desde `https://catfact.ninja/fact`.
- ✂️ Extraer automáticamente las tres primeras palabras de la frase.
- 🔍 Buscar y mostrar un GIF relacionado a esas palabras usando la API de Giphy.
- 🔁 Recargar solo el GIF sin cambiar la frase.
- 🧠 Guardar el historial de búsquedas en `localStorage`, incluyendo fecha y hora.
- 📜 Visualizar el historial completo desde otra pestaña.

## 🛠️ Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Giphy API](https://developers.giphy.com/)
- [Cat Fact API](https://catfact.ninja/)

## 📂 Estructura del Proyecto

```bash
src/
├── assets/
│   ├── components/
│   │   └── Loading.tsx
│   │   └── MainNav.tsx
│   ├── views/
│   │   └── Views.tsx
│   │   └── HistoryPage.tsx
│   ├── utils/
│   │   └── api.ts
│   └── types/
│       └── fetchDataProps.ts
└── App.tsx
```
