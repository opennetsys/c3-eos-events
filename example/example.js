const { Watcher } = require('../')

const watcher = new Watcher({
  nodeUrl: 'http://localhost:8888',
  startingBlock: 0
})

watcher.watch()
