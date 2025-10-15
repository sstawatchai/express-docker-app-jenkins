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
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Alice' },
    { id: 4, name: 'Bob' },
    { id: 5, name: 'Samit Koyom' }
  ]
  res.json(users)
})

// GET /api/products
app.get('/api/products', (_: Request, res: Response) => {
  const products = [
    { id: 1, name: 'Product A', price: 29.99 },
    { id: 2, name: 'Product B', price: 39.99 },
    { id: 3, name: 'Product C', price: 49.99 },
    { id: 4, name: 'Product D', price: 59.99 },
    { id: 5, name: 'Product E', price: 69.99 },
  ]
  res.json(products)
})

// Start server
app.listen(port, () => console.log(`Application is running on port ${port}`))