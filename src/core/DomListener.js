import { capitalize } from '@core/utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListener!')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    for (const listener of this.listeners) {
      const method = getMethodName(listener)
      if (!this[method]) {
        throw new Error(
            `Method ${method} is not implemented in ${this.name} Component`,
        )
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    }
  }

  removeDomListeners() {
    for (const listener of this.listeners) {
      const method = getMethodName(listener)
      if (!this[method]) {
        throw new Error(
            `Method ${method} is not implemented in ${this.name} Component`,
        )
      }
      this.$root.off(listener, this[method])
    }
  }
}

function getMethodName(eventName) {
  return `on${capitalize(eventName)}`
}
