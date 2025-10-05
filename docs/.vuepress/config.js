import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    
    logo: '/logo.png',
    navbar: [
      { text: 'Home', link: '/' },
      {
        text: 'Plans',
        children: [
          { text: 'Shared Hosting', link: '/services/shared-hosting' },
          { text: 'VPS Hosting', link: '/services/vps-hosting' },
          { text: 'Domains', link: '/services/domain-registration' },
          { text: 'SSL Certificates', link: '/services/ssl-certificates' },
        ],
      },
      {
        text: 'Learn More',
        children: [
          { text: 'Getting Started', link: '/getting-started/' },
          { text: 'Guide', link: '/guide/' },
        ],
      },
      { text: 'About', link: '/about.html' },
    ],
    sidebar: {
      '/getting-started/': ['', 'account-setup', 'dashboard-tour'],
      '/services/': ['', 'shared-hosting', 'vps-hosting', 'domain-registration', 'ssl-certificates'],
      '/guide/': ['', 'deploy-website', 'database-setup', 'security', 'troubleshooting'],
    },
  }),
  clientAppEnhanceFiles: '.vuepress/clientAppEnhance.ts',
})
