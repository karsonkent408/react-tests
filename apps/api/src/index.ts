import app from './app';
import { connectDB } from './config/db';
import { config } from './config/envConfig';
import { serve } from '@hono/node-server'


const startServer = async () => {

  await connectDB();
  console.log("Connected to MongoDB");

  serve({
    fetch: app.fetch,
    port: 3000
  }, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  })
};

startServer();