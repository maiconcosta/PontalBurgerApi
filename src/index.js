require('dotenv/config')

const express = require('express')
const cors = require('cors')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const routes = require('./routes')
const { Item, Order, Payment, Status } = require('./models')
let interval
let orders

io.on('connection', async (socket) => {
  console.log('New client connected')
  if (interval) {
    clearInterval(interval)
  }

  interval = setInterval(async function () {
    orders = await Order.findAll({
      order: [
        ['createdAt', 'DESC']
      ],
      include: [
        {
          model: Item,
          as: 'items',
          through: { attributes: ['count'] }
        },
        Payment,
        Status
      ],
      where: {
        statusId: 2
      }
    })

    io.emit('orders', orders)
  }, 5000)

  socket.on('disconnect', () => {
    console.log('Client disconnected')
    clearInterval(interval)
  })
})

app.use(cors())
app.use(express.json())
app.use(routes)

http.listen(process.env.PORT || 3333)
