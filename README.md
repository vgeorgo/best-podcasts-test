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

Postman: [Repository File](docs/BestPodcasts.postman_collection.json)

### POST /auth/login

Examples:

```
curl --location --request POST 'http://localhost:3004/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{"username": "fake_user", "password": "pass"}'
```

### GET /best_podcasts (no auth required)

| Pagination Param | Type   | Example |
| ---------------- | ------ | ------- |
| page             | number | 1       |
| limit            | number | 10      |

| Query Param      | Type    | Search Type | Example                              |
| ---------------- | ------- | ----------- | ------------------------------------ |
| id               | string  | exact       | 083e27920aa049c7a4b035f3acb24272     |
| title            | string  | partial     | This                                 |
| publisher        | string  | partial     | twi                                  |
| explicit_content | boolean | exact       | true, 1 = true anything else = false |
| itunes_id        | number  | exact       | 1253186678                           |
| language         | string  | exact       | English                              |
| country          | string  | exact       | United States                        |
| is_claimed       | boolean | exact       | true, 1 = true anything else = false |
| genre_id         | number  | exact       | 140                                  |

Examples:

```
curl --location --request GET 'http://localhost:3004/best_podcasts'
curl --location --request GET 'http://localhost:3004/best_podcasts?page=1&limit=10&id=33bd629683d6413fae3dcc6d434c63a4&title=This&publisher=twi&explicit_content=false&itunes_id=73329404&language=English&country=United States&is_claimed=1&type=episodic&genre_id=140'
```

### GET /auth_best_podcasts (auth required)

| Pagination Param | Type   | Example |
| ---------------- | ------ | ------- |
| page             | number | 1       |
| limit            | number | 10      |

| Header        | Type   | Example                                             |
| ------------- | ------ | --------------------------------------------------- |
| Authorization | string | Bearer access_token_generated_from_auth_login_route |

| Query Param      | Type    | Search Type | Example                              |
| ---------------- | ------- | ----------- | ------------------------------------ |
| id               | string  | exact       | 083e27920aa049c7a4b035f3acb24272     |
| title            | string  | partial     | This                                 |
| publisher        | string  | partial     | twi                                  |
| explicit_content | boolean | exact       | true, 1 = true anything else = false |
| itunes_id        | number  | exact       | 1253186678                           |
| language         | string  | exact       | English                              |
| country          | string  | exact       | United States                        |
| is_claimed       | boolean | exact       | true, 1 = true anything else = false |
| genre_id         | number  | exact       | 140                                  |

Examples:

```
curl --location --request GET 'http://localhost:3004/auth_best_podcasts' \
--header 'Authorization: Bearer access_token_generated_from_auth_login_route'
```

### GET /podcasts (no auth required)

Examples:

```
curl --location --request GET 'http://localhost:3004/podcasts'
```

### GET /podcasts/:id (no auth required)

Examples:

```
curl --location --request GET 'http://localhost:3004/podcasts/bebf78deac8f4909a65dfd25daad989d'
```
