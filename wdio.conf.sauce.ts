import { config as defaultConfig } from './wdio.conf.shared'

export const config: WebdriverIO.Config = {
    ...defaultConfig,
    ...{
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        region: 'us',
        maxInstances: 4,
        services: ['sauce'],
        capabilities: [
        {
            maxInstances: 5,
            browserName: 'safari',
            browserVersion: 'latest',
            platformName: "macOs",
            'sauce:options': {
                build: `Build Safari: ${Math.ceil(Date.now() / 1000)}`
            }
        },{
            maxInstances: 5,
            browserName: 'chrome',
            browserVersion: 'latest',
            platformName: "Windows 10",
            'sauce:options': {
                build: `Build chrome: ${Math.ceil(Date.now() / 1000)}`
            }
        },{
            maxInstances: 5,
            browserName: 'firefox',
            browserVersion: 'latest',
            platformName: "Windows 10",
            'sauce:options': {
                build: `Build firefox: ${Math.ceil(Date.now() / 1000)}`
            }
        },{
            maxInstances: 5,
            browserName: 'microsoftedge',
            browserVersion: 'latest',
            platformName: "Windows 10",
            'sauce:options': {
                build: `Build edge: ${Math.ceil(Date.now() / 1000)}`
            }
        }]
    }
}
