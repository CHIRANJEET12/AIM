"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    connectionString: 'postgresql://posttodo_owner:npg_peL6vhwA1iXa@ep-restless-sky-a4ty5fyg-pooler.us-east-1.aws.neon.tech/posttodo?sslmode=require',
    ssl: {
        rejectUnauthorized: false
    }
});
exports.pool.query('SELECT NOW()').then(res => console.log(res.rows));
