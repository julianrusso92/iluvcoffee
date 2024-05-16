## Comandos
### Generar controller
`nest g co`
opcion de enviar `--no-spec`

para que lo cree en un lugar especifico:

`nest generate controller modules/abc`

Flag `--dry-run` to see the simulated output from the CLI

### Generar Service
`nest g s`

In nestJS each services is a `provider`
Un provider es algo que puede injectar dependencias.

### Excepciones

Nestjs automaticamente catch las excepciones con un build in exception layer.
Por ejemplo, si hago esto
`throw 'Method not implemented.';`

devuelve esto
```json
{
    "statusCode": 500,
    "message": "Internal server error"
}
```

### Generate Module
`nest g module`

### DTO
Is an object that is used to encapsulate data and send it from one application to another.
Help us to define the interfaces or input and output within our system.
Dtos are just simple objects they don't contain any business logic, methods or anything that requires testing.
`nest g class coffees/dto/create-coffee.dto --no-spec`

se pone dentro de carpeta
/dto
puedo tener otras similares como /entities y /interfaces

### Pipes 
The validationPipe provides a convenient way of enforcing validation rules for all incoming client payloads.

`app.useGlobalPipes(new ValidationPipe())`
transfor: true 
Tenga en cuenta que esta característica puede afectar ligeramente el rendimiento.
En caso de que la performance sea esencial para la aplicacion, testear los endpoints con dicha configuracion.

`npm i class-validator class-transformer`

`npm i @nestjs/mapped-types` to help us to autovalidates dto types

