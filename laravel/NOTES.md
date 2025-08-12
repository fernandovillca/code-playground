# NOTAS SOBRE LARAVEL

## Diferencia en PHPUnit y Pest

La diferencia entre ambos es la sintaxis y la experiencia de desarrollo. Pest, construido sobre PHPUnit, ofrece una sintaxis más concisa y expresiva que facilita la escritura de pruebas, inspirada en frameworks como RSpec y Jest. Mientras que PHPUnit es una herramienta robusta y ampliamente utilizada.

Pest busca simplificar el proceso de pruebas, haciéndolo más legible y eficiente

## Levantar un servidor local

```bash
    php -S localhost:8888 -t public #Levantar cualquier proyecto PHP

    php artisan serve #Levantar proyectos laravel
```

## Migrations

- **Metodo up():** Se utiliza para definir los cambios que se aplicarán a la base de datos al ejecutar la migración.
- **Metodo down():** Se utiliza para revertir los cambios realizados por la migración.

```bash
php artisan make:migration create_users_table # Crear una nueva migración
php artisan migrate # Ejecutar las migraciones pendientes
php artisan migrate:rollback # Revertir la última migración
php artisan migrate:reset # Revertir todas las migraciones
php artisan migrate:refresh # Revertir y volver a ejecutar todas las migraciones
php artisan make:migration add_field_to_users_table --table=users # Crear una nueva migración para agregar un campo a la tabla users
```

- Agregar llaves foraneas

```bash
php artisan make:migration add_foreign_key_to_orders_table --table=orders
```

```php
public function up()
{
    Schema::table('orders', function (Blueprint $table) {
        $table->unsignedBigInteger('user_id')->nullable();
        $table->foreign('user_id')
            ->references('id')
            ->on('users')
        ->onDelete('cascade'); #Si se borrar la orden, se borran los usuarios relacionados
        // ->onDelete('set null'); #Si se borrar la orden, se pone el campo user_id a null
    });
}

public function down()
{
    Schema::table('orders', function (Blueprint $table) {
        $table->dropForeign(['user_id']);
        $table->dropColumn('user_id');
    });
}
```
