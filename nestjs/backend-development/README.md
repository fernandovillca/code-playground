# Curso de Nest: Desarrollo backend escalable con Node

## APUNTES

- En los DTOs al usar `PartialType` esto hace que todas las propiedades de heredadas de un DTO sean opcionales

  ```js
  // Ejemplo
  export class UpdateBrandDto extends PartialType(CreateBrandDto) { ... }
  ```
