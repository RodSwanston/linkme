

import { Plugins } from '@capacitor/core'

const { Storage } = Plugins

async function setItem(key: string, obj: any = {}) {
  await Storage.set({
    key,
    value: JSON.stringify(obj)
  })
}

async function getItem(key: string) {
  const ret = await Storage.get({ key })
  return JSON.parse(ret.value || 'null')
}

async function removeItem(key: string) {
  await Storage.remove({ key })
}

async function keys() {
  const { keys } = await Storage.keys()
  console.log('Got keys: ', keys)
}

async function clear() {
  await Storage.clear()
}

export const storage = {
  setItem,
  getItem,
  removeItem,
  keys,
  clear
}

