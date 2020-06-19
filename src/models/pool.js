// Below environment variables are assumed and used
// without explicitly specifying.
// Default values are:
//
// PGHOST='localhost'
// PGUSER=process.env.USER
// PGDATABASE=process.env.USER
// PGPASSWORD=null
// PGPORT=5432

import { Pool } from 'pg'
import { connectionString } from '../config'

export const pool = new Pool({ connectionString: connectionString });
