import { KeenSliderPlugin } from 'keen-slider/react'

export const MutationPlugin: KeenSliderPlugin = (slider) => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      slider.update()
    })
  })

  const config = { childList: true }

  slider.on('created', () => {
    observer.observe(slider.container, config)
  })

  slider.on('destroyed', () => {
    observer.disconnect()
  })
}
