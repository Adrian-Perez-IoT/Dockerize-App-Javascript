# Definir la imagen base
FROM node:14-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json (o yarn.lock si utilizas Yarn)
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar los archivos del proyecto
COPY . .

# Argumento para seleccionar el archivo de configuración (localhost por defecto)
ARG NODE_ENV=localhost

# Copiar el archivo de configuración según el entorno
COPY ./config/config.${NODE_ENV}.json ./config/config.json

# Exponer el puerto que utiliza tu aplicación (asegúrate de que coincida con el puerto definido en tu aplicación Node.js)
EXPOSE 3000

# Comando para ejecutar la aplicación Node.js (ajusta el nombre del archivo si es necesario)
CMD ["npm", "run", "dev"]
