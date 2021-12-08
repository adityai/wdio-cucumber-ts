import { config as defaultConfig } from './wdio.conf.shared'

export const config: WebdriverIO.Config = {
    ...defaultConfig,
    ...{
        capabilities: [
        // {
        //     maxInstances: 5,
        //     browserName: 'firefox',
        // },
        {
            maxInstances: 5,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    // "--headless",
                "--disable-gpu", 
                "--window-size=1440,735"]
           }
        },
        // {
        //     maxInstances: 5,
        //     browserName: 'MicrosoftEdge',
        // },
        //{
        //     maxInstances: 5,
        //     browserName: 'safari',
        // }
    ],
    }
}