const express = require('express')

const routes = new express.Router()
const projects = []

routes.get('/projects', (req, res) => {
  return res.json(projects)
})

routes.post('/projects', (req, res) => {
  const { id, title } = req.body

  const project = { id, title, tasks: [] }
  projects.push(project)

  return res.status(201).json(project)
})

routes.put('/project/:id', (req, res) => {
  const { id } = req.params
  const { title } = req.body

  const project = projects.find(project => project.id === id)
  project.title = title

  return res.json(project)
})

routes.delete('/project/:id', (req, res) => {
  const { id } = req.params

  const projectIndex = projects.findIndex(project => project.id === id)
  projects.splice(projectIndex, 1)

  return res.send()
})

routes.post('/project/:id/tasks', (req, res) => {
  const { id } = req.params
  const { title } = req.body

  const project = projects.find(project => project.id === id)
  project.tasks.push(title)

  return res.json(project)
})

module.exports = routes
