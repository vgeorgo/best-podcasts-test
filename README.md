# Best Podcasts

Project to statically return the best podcasts using NestJS, Typescript and TypeORM.

## Running

```
docker-compose up
```

## Clearing

```
docker-compose down -v
```

## Routes

Base URL: http://localhost:3004

### GET /best_podcasts

```
curl --location --request GET 'http://localhost:3004/best_podcasts'
```

### GET /podcasts

```
curl --location --request GET 'http://localhost:3004/podcasts'
```

### GET /podcasts/:id

```
curl --location --request GET 'http://localhost:3004/podcasts/bebf78deac8f4909a65dfd25daad989d'
```
