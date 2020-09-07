class Dom {
  constructor(element) {
    this.$el = typeof element === 'string'
      ? document.querySelector(element)
      : element
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.innerHTML.trim()
  }

  clear() {
    this.html('')
    return this
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  append(node) {
    node instanceof Dom && (node = node.$el)
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }
}

export function $(element) {
  return new Dom(element)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  el.classList = classes
  return $(el)
}
