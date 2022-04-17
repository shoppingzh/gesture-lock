import defaults from './defaults'
import { Options } from './config'
import { merge } from 'lodash'
// import { drawCircle } from './utils/drawer'

interface GestureLockInterface {
  canvas: HTMLCanvasElement
  enabled: boolean

  enable(): void
  disable(): void
}

export default class GestureLock implements GestureLockInterface {

  canvas: HTMLCanvasElement
  private options: Options
  private ctx: CanvasRenderingContext2D
  enabled: boolean = true

  constructor(canvas: HTMLCanvasElement, options: Options) {
    this.canvas = canvas
    this.options = merge({}, defaults, options)
    this.ctx = this.canvas.getContext('2d')
    this.render()
  }

  enable(): void {
  }

  disable(): void {
  }

  private doRender(): void {
    // 1. 绘制节点
    // TODO
    // 2. 绘制路线
    // TODO
  }

  private render(): void {
    window.requestAnimationFrame(() => {
      this.doRender()
      this.render()
    })
  }
}