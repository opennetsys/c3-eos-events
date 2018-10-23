const { BaseActionWatcher } = require("demux")
const { NodeosActionReader } = require("demux-eos") // eslint-disable-line
const ObjectActionHandler = require("./ObjectActionHandler")
const updaters = require("./updaters")

class Watcher {
  constructor(config) {
    this.nodeUrl = config.nodeUrl || "http://localhost:8888"
  }

  watch(opts, cb) {
    const startingBlock = opts.startingBlock || 0
    const action = opts.action || "eosio.token::transfer"

    const effects = [
      {
        actionType: action,
        effect: cb,
      }
    ]

    const actionHandler = new ObjectActionHandler(
      updaters,
      effects,
    )

    const actionReader = new NodeosActionReader(
      this.nodeUrl,
      startingBlock,
    )

    const actionWatcher = new BaseActionWatcher(
      actionReader,
      actionHandler,
      500,
    )

    actionWatcher.watch()
  }
}

module.exports = {
  Watcher
}
