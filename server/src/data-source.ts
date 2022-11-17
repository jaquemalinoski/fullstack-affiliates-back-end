import { DataSource } from "typeorm"
import "dotenv/config"

export const AppDataSource = new DataSource(

    process.env.NODE_ENV === "production" ? 
    {   
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl:
          process.env.NODE_ENV === "production"
            ? { rejectUnauthorized: false }
            : false,
        synchronize: false,
        logging: true,
        entities: ["dist/entities/*.js"],
        migrations: ["dist/migrations/*.js"],
    }
    : 
    {  
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
        synchronize: false,
        logging: true,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
    }
)

AppDataSource.initialize()
    .then(() => {
        console.log("Data source has been initialized")
    })
    .catch(() => {
        console.log("Error during Data Source initialization")
    })