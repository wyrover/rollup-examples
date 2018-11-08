const demo = {
  init() {
    console.log('[001]: hello world!')
    console.log('[002]: hello world!')
    console.log('[003]: hello world!')
  }
}

export default demo

export class Foo {
  constructor() {
    this.pos = 0
  }

  say(world) {
    return `hello ${world}`
  }

  walk() {
    this.pos++
  }
}
