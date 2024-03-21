const bcrypt = require('bcrypt')
const router = require('express').Router()
const User = require('../models/user')

router.post('/', async (req, res) => {
  const body = req.body

  if (body.password.length < 3) {
    return res.status(400).json({ error: 'Password must be at least 3 characters long' })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  })

  const savedUser = await user.save()

  res.json(savedUser)
})

router.get('/', async (req, res) => {
  const users = await User.find({}).populate('blogs', { url: 1, title: 1, author: 1 })
  res.json(users.map(user => user.toJSON()))
})

module.exports = router
