const express = require('express')

const routes = new express.Router()
const projects = [{ id: '1', title: 'Exemplo projeto', tasks: ['Exemplo tarefa'] }]

routes.get('/projects', (req, res) => {
  return res.json(projects)
})

module.exports = routes