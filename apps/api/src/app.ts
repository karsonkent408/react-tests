import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { Project } from 'models'
import projectRouter from './routes/project.router'
import {cors} from 'hono/cors'

const app = new Hono()

app.use('*', cors())

app.get('/', (c) => {

  const project = new Project({
    name: 'Test',
    description: 'Test description',
  })
  return c.text(JSON.stringify(project))
})

app.route("/projects", projectRouter);

export default app;
