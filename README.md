# No-Pai-No-Gain-Back
Los usuarios admin pueden crear ciudades y sedes y deben estar logueados para poder llevar a cabo dichas acciones, y los usuarios normales pueden consumir directamente el servicio de registro, pero estos no pueden registrarse más de dos veces.

## Despligue
1) Descargar el repositorio
2) Ubicarse dentro de la raiz del proyecto
3) Instalar dependencias con ``npm i``
4) Registrar el esquema en MySql con el script ``gim.sql``
5) Configurar **/config/db.config.js** con los datos de la DB.
6) Desplegar el servidor con ``npm start``

## Pruebas Unitarias
1) Ubicarse dentro de la raiz del proyecto
2) Ejecutar el comando ``npm run test``

## Consumo de API.
1) Importar coleccion en postman, ver ``Gimnasio.postman_collection.json``
2) Regsitrar usuario con rol: admin
3) Continuar con peticiones deseadas
**NOTA** Para servicios con seguridad, será necesario el token en los **Headers**.
la key es **autorizacion** y value será el token generado en el login.


