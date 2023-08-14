import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { initPlugin } from '@frsource/cypress-plugin-visual-regression-diff/plugins';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname),
    viewportWidth: 1000,
    chromeWebSecurity: false,
    videosFolder: '../../dist/cypress/videos',
    screenshotsFolder: '../../dist/cypress/screenshots',
    setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ) {
      // implement node event listeners here
      initPlugin(on, config);

      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'electron') {
          // fullPage screenshot size is 1400x1200
          launchOptions.preferences['width'] = 800
        }

        return launchOptions
      })
    },
  }
});
