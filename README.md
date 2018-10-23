# c3-eos-events

> Watch for [EOS](https://github.com/EOSIO/eos) contract events

## Install

```bash
npm i c3-eos-events
```

## Getting started

```js
const { Watcher } = require('c3-eos-events')

const watcher = new Watcher({
  nodeUrl: 'http://localhost:8888'
})

watcher.watch({
  action: 'eosio.token::transfer',
  startingBlock: 0
}, (state, payload, blockInfo, context) => {
  console.info('State updated:\n', JSON.stringify(state, null, 2))
})
```

Output

```js
State updated:
 {
  "volumeBySymbol": {
    "SYS": 25
  },
  "totalTransfers": 1,
  "indexState": {
    "blockNumber": 14050,
    "blockHash": "000036e27df46d701bb1d8f0ed04eec17f3812c9ec076ef4d48f4d1ce73191b6"
  }
}
```

## License

[GNU AGPL 3.0](LICENSE)
