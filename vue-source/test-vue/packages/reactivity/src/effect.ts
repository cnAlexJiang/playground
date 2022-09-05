let activeEffect = null
export function getActiveEffect() {
  return activeEffect
}

export function effect(fn: any) {
  activeEffect = fn
  fn()
}
