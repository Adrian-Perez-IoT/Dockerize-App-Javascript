# Construye la imagen de Docker especificando el valor del argumento NODE_ENV para el entorno deseado.

## Para DEV:


  docker build --build-arg NODE_ENV=dev -t tu_proyecto_dev .

## Para PROD:

  docker build --build-arg NODE_ENV=prod -t tu_proyecto_prod .

# Ejecuta los contenedores utilizando la imagen correspondiente a cada entorno.

Para DEV:

  docker run -p 3000:3000 tu_proyecto_dev

Para PROD:

  docker run -p 3000:3000 tu_proyecto_prod

Al hacerlo de esta manera, podrás usar diferentes configuraciones según el entorno y evitar la necesidad de modificar manualmente las variables de entorno cada vez que despliegues tu aplicación en DEV o PROD.