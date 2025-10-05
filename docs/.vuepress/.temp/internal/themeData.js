export const themeData = JSON.parse("{\"logo\":\"/logo.png\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Plans\",\"children\":[{\"text\":\"Shared Hosting\",\"link\":\"/services/shared-hosting\"},{\"text\":\"VPS Hosting\",\"link\":\"/services/vps-hosting\"},{\"text\":\"Domains\",\"link\":\"/services/domain-registration\"},{\"text\":\"SSL Certificates\",\"link\":\"/services/ssl-certificates\"}]},{\"text\":\"Learn More\",\"children\":[{\"text\":\"Getting Started\",\"link\":\"/getting-started/\"},{\"text\":\"Guide\",\"link\":\"/guide/\"}]},{\"text\":\"About\",\"link\":\"/about.html\"}],\"sidebar\":{\"/getting-started/\":[\"\",\"account-setup\",\"dashboard-tour\"],\"/services/\":[\"\",\"shared-hosting\",\"vps-hosting\",\"domain-registration\",\"ssl-certificates\"],\"/guide/\":[\"\",\"deploy-website\",\"database-setup\",\"security\",\"troubleshooting\"]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
