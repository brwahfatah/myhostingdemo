import { defineClientConfig } from '@vuepress/client'

// This will enhance your client app
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // Import your CSS
    import('./styles/home.css')
  },
})
