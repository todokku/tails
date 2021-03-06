import NATS from 'nats'

const nats = NATS.connect({
  url: 'nats://nats:4222',
  json: true,
})

nats.on('error', (err) => {
  console.trace('nats error', err)
})

nats.on('connect', (nc) => {
  console.info('nats connected')
})

nats.on('disconnect', () => {
  console.info('nats disconnected')
})

nats.on('reconnecting', () => {
  console.info('nats reconnecting')
})

nats.on('reconnect', (nc) => {
  console.info('nats reconnect')
})

nats.on('close', () => {
  console.info('nats closed')
})

nats.on('unsubscribe', (sid, subject) => {
  console.info(`nats id ${sid} unsubscribed from subject ${subject}`)
})

nats.on('premission_error', (err) => {
  console.error('nats permission error', err)
})

export { nats }
