# Etapa 1: Construir a aplicação React
FROM node:16 as build-stage

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos da aplicação React para o diretório de trabalho
COPY . .

# Construa a aplicação React para produção
RUN npm run build

RUN npm install dotenv

# Etapa 2: Configurar o servidor da aplicação
FROM nginx:alpine

# Copie o diretório de construção da etapa anterior para o diretório padrão do Nginx
COPY --from=build-stage /app/build /usr/share/nginx/html

# Exponha a porta 80 do container
EXPOSE 80

# Comando para iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
