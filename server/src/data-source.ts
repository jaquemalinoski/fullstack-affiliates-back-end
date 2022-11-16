import { DataSource } from "typeorm"
import "dotenv/config"

export const AppDataSource =
//   process.env.NODE_ENV === "test"
//     ? new DataSource({
//         type: "sqlite",
//         database: ":memory:",
//         entities: ["src/entities/*.ts"],
//         synchronize: true,
//       })
//     : process.env.NODE_ENV === "production"
//     ? new DataSource({
//         type: "postgres",
//         url: process.env.DATABASE_URL,
//         ssl:
//           process.env.NODE_ENV === "production"
//             ? { rejectUnauthorized: false }
//             : false,
//         synchronize: false,
//         logging: true,
//         entities: ["dist/entities/*.ts"],
//         migrations: ["dist/migrations/*.ts"],
//       })
//     : 
        new DataSource({
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
        synchronize: false,
        logging: false,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      });

AppDataSource.initialize()
    .then(() => {
        console.log("Data source has been initialized")
    })
    .catch(() => {
        console.log("Error during Data Source initialization")
    })