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
`nest g class coffees/dto/create-coffee.dto --no-spec`

se pone dentro de carpeta
/dto
puedo tener otras similares como /entities y /interfaces