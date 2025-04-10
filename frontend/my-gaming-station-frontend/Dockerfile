# Usa una imagen de Node.js como base
FROM node:18.18.0

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Configurar npm para usar bash en lugar de PowerShell
RUN npm config set script-shell /bin/bash

# Copia los archivos necesarios
COPY package.json ./
RUN npm install

# Copia todo el código y genera la versión de producción
COPY . .

RUN mkdir -p /mnt/c/Windows/System32/WindowsPowerShell/v1.0 \
    && touch /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe \
    && chmod +x /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe

# Exponer el puerto del frontend
EXPOSE 3000

# Comando para iniciar React
CMD ["npm", "start"]