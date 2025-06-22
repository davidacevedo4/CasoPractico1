# Wireflow de Navegación

## Pantalla 1: Home
- Elementos:
  - Botón “Eventos”
  - Botón “Ubicaciones”
  - Botón “Contactos”

**Flujo:**  
Home → [Eventos]  
Home → [Ubicaciones]  
Home → [Contactos]

## Pantalla 2: Lista de Eventos
- Muestra lista de eventos con:
  - Título, fecha/hora, ícono “Ver” y “Editar”
  - Botón “+ Nuevo Evento”
- **Flujo:**  
  Lista Eventos → Formulario Evento  
  Lista Eventos → Detalle Evento (clic en “Ver”)  
  Lista Eventos → Home (botón atrás)

## Pantalla 3: Formulario “Nuevo/Editar Evento”
- Campos: Título, fecha/hora, descripción, repetición, recordatorio, categoría, ubicación
- Botones: “Guardar”, “Cancelar”
- **Flujo:**  
  Formulario → Lista de Eventos (al guardar)  
  Formulario → Lista de Eventos (al cancelar)

## Pantalla 4: Lista de Ubicaciones
- Similar a Eventos (lista + “+ Nueva Ubicación”)

## Pantalla 5: Formulario Ubicación
- Campos: nombre, dirección, latitud, longitud
- Botones: “Guardar”, “Cancelar”

## Pantalla 6: Lista de Contactos
- Lista con nombre, correo, teléfono, ícono “Ver/Editar”
- Botón “+ Nuevo Contacto”

## Pantalla 7: Formulario Contacto
- Campos: tratamiento, nombre, rol, correo, teléfono, foto
- Botones: “Guardar”, “Cancelar”
