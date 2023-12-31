#imagen base de  node alpine
FROM node:21-alpine3.18

#Creo la carpeta de la APP
RUN mkdir /app

# Es tablece el directorio de trabajo en la aplicación
WORKDIR /app/

# Copia el archivo package.json y package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expon el puerto en el que la aplicación se ejecuta (si es necesario)
EXPOSE 3000

# Comando para build de la aplicación
CMD ["npm", "run", "build"]

# Comando para iniciar la aplicación
CMD ["npm", "start"]