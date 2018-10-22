const { BaseActionWatcher } = require("demux")
const { NodeosActionReader } = require("demux-eos") // eslint-disable-line
const ObjectActionHandler = require("./ObjectActionHandler")
const updaters = require("./updaters")
const effects = require("./effects")

class Watcher {
  constructor(config) {
    const nodeUrl = config.nodeUrl || "http://localhost:8888"
    const startingBlock = config.startingBlock || 0

    const actionHandler = new ObjectActionHandler(
      updaters,
      effects,
    )

    const actionReader = new NodeosActionReader(
      nodeUrl,
      startingBlock,
    )

    const actionWatcher = new BaseActionWatcher(
      actionReader,
      actionHandler,
      500,
    )

    this.actionWatcher = actionWatcher
  }

  watch() {
    this.actionWatcher.watch()
  }
}

module.exports = {
  Watcher
}
