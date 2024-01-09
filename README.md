# Iniciar API server con NODE js

1. Clonar repositorio e Instalar dependencias
```
    git clone ...
    cd carpeta
    npm install
```

2. Configurar base de datos
    - crear base de datos en mysql `peliculas`
    - crear archivo .env ejemplo archivo `.env.dev` para conectar a base de datos
    ```env
        PORT=4800
        HOST_DB=localhost
        USER_DB=admin
        PASSWORD_DB=peliculas
        NAME_DB=peliculas
        PORT_DB=3306
    ```

3. Iniciar proyecto
    ```bash
        npm start
    ```