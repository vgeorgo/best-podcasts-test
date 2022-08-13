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

### POST /auth/login

```
curl --location --request POST 'http://localhost:3004/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{"username": "fake_user", "password": "pass"}'
```

### GET /best_podcasts (no auth required)

```
curl --location --request GET 'http://localhost:3004/best_podcasts'
```

### GET /auth_best_podcasts (auth required)

```
curl --location --request GET 'http://localhost:3004/auth_best_podcasts' \
--header 'Authorization: Bearer access_token_generated_from_auth_login_route'
```

### GET /podcasts (no auth required)

```
curl --location --request GET 'http://localhost:3004/podcasts'
```

### GET /podcasts/:id (no auth required)

```
curl --location --request GET 'http://localhost:3004/podcasts/bebf78deac8f4909a65dfd25daad989d'
```
