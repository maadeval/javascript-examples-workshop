const subscribe = (callback) => {
  const event = ({ detail }) => callback(detail.content)

  document.addEventListener('custom-alert', event)

  return event
}

const unsubscribe = (event) => {
  document.removeEventListener('custom-alert', event)
}

const eventEmitter = (content) => {
  const customEvent = new CustomEvent('custom-alert', {
    detail: { content },
  })

  document.dispatchEvent(customEvent)
}

const setContent = (content) => eventEmitter(content)

export const alertBox = {
  subscribe,
  unsubscribe,
  setContent,
}
