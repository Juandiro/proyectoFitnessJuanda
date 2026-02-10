# 📦 Componente Card - Guía Completa

## 📖 ¿Qué es un Componente en React?

Un **componente** en React es como un bloque de construcción reutilizable. Es una función o clase que retorna código HTML (JSX) y que puedes usar múltiples veces en tu aplicación.

## 🎯 ¿Qué hace el componente Card?

El componente `Card` es una tarjeta visual que muestra información de forma organizada y atractiva. Es perfecto para mostrar:
- Productos
- Ejercicios de fitness
- Recetas
- Perfiles de usuarios
- Cualquier contenido que necesite título, descripción e imagen

---

## 🔍 Explicación del Código Línea por Línea

### 1. **Exportación y Definición**
```jsx
export default function Card({ title, description, image }) {
```
- `export default`: Permite importar este componente en otros archivos
- `function Card`: Define una función llamada Card
- `{ title, description, image }`: Son las **props** (propiedades) que recibe el componente
  - **Props** = datos que le pasas al componente desde afuera

---

### 2. **Contenedor Principal**
```jsx
<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
```
**Clases de Tailwind CSS explicadas:**
- `bg-white`: Fondo blanco
- `rounded-lg`: Bordes redondeados grandes
- `shadow-md`: Sombra mediana
- `overflow-hidden`: Oculta contenido que se salga del contenedor
- `hover:shadow-lg`: Al pasar el mouse, la sombra se hace más grande
- `transition-shadow duration-300`: Animación suave de 300ms

---

### 3. **Sección de Imagen**
```jsx
{image && (
    <div className="w-full h-48 overflow-hidden">
        <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
        />
    </div>
)}
```
**¿Qué hace `{image && (...)}` ?**
- Es un **renderizado condicional**
- Significa: "Si existe `image`, entonces muestra esto"
- Si no hay imagen, no muestra nada

**Clases de la imagen:**
- `w-full h-48`: Ancho completo, altura de 48 unidades (192px)
- `object-cover`: La imagen cubre todo el espacio sin deformarse

---

### 4. **Contenedor de Contenido**
```jsx
<div className="p-6">
```
- `p-6`: Padding (espacio interno) de 24px en todos los lados

---

### 5. **Título**
```jsx
{title && (
    <h3 className="text-xl font-bold text-gray-800 mb-2">
        {title}
    </h3>
)}
```
- `{title && (...)}`: Solo muestra el título si existe
- `text-xl`: Tamaño de texto extra grande
- `font-bold`: Texto en negrita
- `text-gray-800`: Color gris oscuro
- `mb-2`: Margen inferior de 8px

---

### 6. **Descripción**
```jsx
{description && (
    <p className="text-gray-600 text-sm leading-relaxed">
        {description}
    </p>
)}
```
- `text-gray-600`: Gris más claro que el título
- `text-sm`: Texto pequeño
- `leading-relaxed`: Espaciado entre líneas más relajado (mejor legibilidad)

---

## 💻 Cómo Usar el Componente

### 1. **Importar el componente**
```jsx
import Card from './components/common/Card';
```

### 2. **Usar el componente en tu código**

#### Ejemplo Básico:
```jsx
function MiPagina() {
    return (
        <Card
            title="Entrenamiento de Cardio"
            description="Mejora tu resistencia con este plan de 30 minutos"
            image="https://ejemplo.com/imagen-cardio.jpg"
        />
    );
}
```

#### Ejemplo con Datos Dinámicos:
```jsx
function ListaEjercicios() {
    const ejercicios = [
        {
            id: 1,
            titulo: "Yoga Matutino",
            desc: "Sesión de yoga para comenzar el día",
            img: "/images/yoga.jpg"
        },
        {
            id: 2,
            titulo: "Entrenamiento HIIT",
            desc: "Intervalos de alta intensidad",
            img: "/images/hiit.jpg"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ejercicios.map(ejercicio => (
                <Card
                    key={ejercicio.id}
                    title={ejercicio.titulo}
                    description={ejercicio.desc}
                    image={ejercicio.img}
                />
            ))}
        </div>
    );
}
```

#### Ejemplo sin Imagen:
```jsx
<Card
    title="Plan de Nutrición"
    description="Guía completa de alimentación saludable"
/>
```

---

## 🎨 Personalización

Si quieres modificar los estilos, puedes:

### Opción 1: Pasar clases adicionales como prop
Modifica el componente para aceptar clases personalizadas:
```jsx
export default function Card({ title, description, image, className = '' }) {
    return (
        <div className={`bg-white rounded-lg shadow-md ... ${className}`}>
            {/* ... resto del código */}
        </div>
    );
}
```

Uso:
```jsx
<Card
    title="Mi Título"
    description="Mi descripción"
    image="/imagen.jpg"
    className="border-2 border-blue-500"
/>
```

### Opción 2: Crear variantes
```jsx
export default function Card({ title, description, image, variant = 'default' }) {
    const variants = {
        default: 'bg-white shadow-md',
        dark: 'bg-gray-800 text-white shadow-xl',
        primary: 'bg-blue-50 border-2 border-blue-500'
    };

    return (
        <div className={`rounded-lg ${variants[variant]} ...`}>
            {/* ... */}
        </div>
    );
}
```

---

## 🧩 Conceptos Clave de React

### **Props (Propiedades)**
- Son datos que pasas de un componente padre a un hijo
- Son **inmutables** (no se pueden modificar dentro del componente)
- Se pasan como atributos HTML

### **Renderizado Condicional**
```jsx
{condicion && <ElementoAMostrar />}
```
- Si `condicion` es `true`, muestra el elemento
- Si es `false`, no muestra nada

### **JSX (JavaScript XML)**
- Es una sintaxis que parece HTML pero es JavaScript
- Permite escribir estructura de UI de forma declarativa
- Se convierte a JavaScript puro cuando se compila

---

## ✅ Ventajas de este Componente

1. **Reutilizable**: Úsalo en múltiples lugares sin repetir código
2. **Flexible**: Funciona con o sin imagen
3. **Responsive**: Se adapta a diferentes tamaños de pantalla
4. **Accesible**: Incluye atributos `alt` para lectores de pantalla
5. **Animado**: Efectos hover suaves con Tailwind

---

## 📝 Ejercicios Prácticos

1. **Agrega un botón** al componente Card
2. **Crea una prop `onClick`** para hacer el Card clickeable
3. **Añade una prop `badge`** para mostrar una etiqueta (ej: "Nuevo", "Popular")
4. **Implementa modo oscuro** con una prop `darkMode`

---

## 🔗 Ubicación del Archivo
`/client/src/components/common/Card.jsx`

## 📚 Recursos para Aprender Más
- [Documentación oficial de React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Props en React](https://react.dev/learn/passing-props-to-a-component)
