const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('index', {
    layout: 'home',
    title: 'Главная страница',
    isHome: true
  })
})

module.exports = router
