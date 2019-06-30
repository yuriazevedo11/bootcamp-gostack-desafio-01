const express = require('express')

const routes = new express.Router()
const projects = []

routes.get('/projects', (req, res) => {
  return res.json(projects)
})

routes.post('/projects', (req, res) => {
  const { id, title } = req.body

  projects.push({ id, title, tasks: [] })

  return res.status(201).json(projects)
})

module.exports = routes