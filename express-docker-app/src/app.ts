import express, { type Express, type Request, type Response } from 'express'

const app: Express = express()

const port: number = 3000

// Routes
// GET /
app.get('/', (_: Request, res: Response) => {
  res.json({
    message: 'Hello Express + TypeScript!'
  })
})

// GET /api/hello
app.get('/api/hello', (_: Request, res: Response) => {
  res.json({
    message: 'Hello from Express API!'
  })
})

// GET /api/health
app.get('/api/health', (_: Request, res: Response) => {
  res.json({
    status: 'UP'
  })
})

// GET /api/users
app.get('/api/users', (_: Request, res: Response) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ]
  res.json(users)
})

// Start server
app.listen(port, () => console.log(`Application is running on port ${port}`))