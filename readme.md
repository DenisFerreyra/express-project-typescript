Este es un proyecto creado en Express y Typescript, trabajado dentro de contenedores Docker, con Dockerfile y docker-compose. 

Esta API se inició de la siguiente manera:

npm init -y                             //para inicializar un proyecto de node creando el package.json y el -y es para que lo cree todo por defecto

npm install typescript -D               //instalado typescript como dependencia de desarrollo (-D)

Luego en el package.json se añade un script "tsc": "tsc" para ejecutar el binario de tsc, que sirve para realizar la compilación desde TS a JS.

Luego se debe colocar npm run tsc -- --init //colocamos el primer -- para npm run y el segundo --init es para el tsc, esto creará el tsconfig.json