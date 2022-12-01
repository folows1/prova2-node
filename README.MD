Porta do Banco Postgres = localhost:3333

Para subir o container do banco de dados, execute o comando:
docker-compose up -d

Para rodar a aplicação, execute o comando:
npm run start

Endpoints
localhost:3001/api/v1/customer - POST
localhost:3001/api/v1/ordered - POST
localhost:3001/api/v1/product - POST

localhost:3001/api/v1/customer/:id - DELETE
localhost:3001/api/v1/ordered/:id - DELETE
localhost:3001/api/v1/product/:id - DELETE