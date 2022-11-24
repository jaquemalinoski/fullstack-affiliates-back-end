# :rocket: FullStack-Affiliate

# :bulb: Description

FullStack-Affiliate is a web interface that allows uploading transaction files for products sold, the application's API normalizes the data and stores them in a relational database, and returns this data listed with a totalizer of values.

# :computer: Tecnologias / Bibliotecas Utilizadas

# Back-End
- Node.js
- Typescript
- Express 
- TypeORM
- Cors
- Multer
- Reflect Metadata
- UUID
- PostgreSQL
- Docker


## 3. Quick Start

Clone the project on your machine.

### 3.1. Environment variables

Then, create a file **.env**, copying file format **.env.example**.
Configure your environment variables with your Postgres credentials.

Create database as data entered in **.env**.

### 3.2. Installing Dependencies

Yarn:

```
yarn
```

Docker:

````
docker build -t image_name  .
````

### 3.3. Migrations

Run migrations with the command:

```
yarn typeorm migration:run -d src/data-source.ts
```

### 3.4 Start

Yarn:

````
yarn dev
````

Docker:

````
docker-compose up
````

## 4. Endpoints

### 4.1.1. **Create user**

### `/users`

### Example of request:

```
POST /affiliates
Host: https://hosteando.herokuapp.com
Content-type: Multipart-Form
```

### Request body:

```Multipart-Form

  file: file.txt

```

### Example of response:

```
200 OK
```
```json
{
	"message": "File uploaded successfully!"
}
```

### 4.1.2. **List transactions**

### `/users`

### Example of request:

```
GET /users
Host: https://hosteando.herokuapp.com
Content-type: application/json
```

### Request body:

```json
Empty
```

### Example of response:

```
200 OK
```

**Already calculated according to the transaction type


```json
[
	{
		"seller": "CELSO DE MELO",
		"sum": "205000"
	},
	{
		"seller": "THIAGO OLIVEIRA",
		"sum": "17250"
	},
	{
		"seller": "MARIA CANDIDA",
		"sum": "150000"
	},
	{
		"seller": "CAROLINA MACHADO",
		"sum": "205000"
	},
	{
		"seller": "JOSE CARLOS",
		"sum": "30000"
	},
	{
		"seller": "ELIANA NOGUEIRA",
		"sum": "615000"
	},
	{
		"seller": "CARLOS BATISTA",
		"sum": "205000"
	}
]
```