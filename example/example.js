const { Watcher } = require('../')

const watcher = new Watcher({
  nodeUrl: 'http://localhost:8888'
})

watcher.watch({
  action: 'eosio.token::transfer',
  startingBlock: 0
}, (state, payload, blockInfo, context) => {
  console.info('State updated:\n', JSON.stringify(state, null, 2))
})
