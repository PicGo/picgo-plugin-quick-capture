import picgo from 'picgo'
import { PluginConfig } from 'picgo/dist/src/utils/interfaces'
import { spawn } from 'child_process'
const defaultScript = {
  win32: `rundll32 ${__dirname}/PrScrn.dll PrScrn`,
  darwin: `screencapture -s -c`,
  linux: ``
}

const config = (ctx: picgo): PluginConfig[] => {
  let userConfig = ctx.getConfig('picgo-plugin-quick-capture')
  if (!userConfig) {
    userConfig = {}
  }
  const configs = [
    {
      name: 'win32',
      type: 'input',
      alias: 'Win截图脚本',
      default: userConfig.win32 || defaultScript.win32,
      required: process.platform === 'win32'
    },
    {
      name: 'darwin',
      type: 'input',
      alias: 'Mac截图脚本',
      default: userConfig.darwin || defaultScript.darwin,
      required: process.platform === 'darwin'
    },
    {
      name: 'linux',
      type: 'input',
      alias: 'Linux截图脚本',
      default: userConfig.linux || defaultScript.linux,
      required: process.platform === 'linux'
    },
    {
      name: 'timeout',
      type: 'input',
      alias: '脚本超时时间',
      message: '默认10s, 请填写数字无需单位',
      default: userConfig.timeout || 10,
      required: false
    }
  ]
  return configs
}

export = (ctx: picgo) => {
  const register = () => {
    return
  }
  const commands = (ctx: picgo) => [{
    label: '快速截图并上传',
    key: 'CmdOrCtrl+Shift+0',
    name: 'quick-capture',
    async handle (ctx: picgo, guiApi: any) {
      try {
        const platform = process.platform
        const script: string = ctx.getConfig(`picgo-plugin-quick-capture.${platform}`) || defaultScript[platform]
        if (!script) {
          return guiApi.showNotification({
            title: '快速截图上传脚本出错',
            body: '不能为空'
          })
        }
        const command = script.split(' ')[0]
        const args = script.split(' ').slice(1)
        const io = spawn(command, args)
        const timeout = parseInt(ctx.getConfig('picgo-plugin-quick-capture.timeout') as string, 10) || 10
        io.on('close', () => {
          guiApi.upload()
        })
        setTimeout(() => {
          io.kill()
        }, timeout * 1000)
      } catch (e) {
        ctx.log.error(e)
        guiApi.showNotification({
          title: '快速截图上传脚本出错',
          body: '请检查脚本与错误日志'
        })
      }
    }
  }]
  return {
    commands,
    register,
    config
  }
}
