import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECT_ID ?? 'ccyc54nr',
    dataset: 'production',
  },
})
