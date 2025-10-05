export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"About Us"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Welcome to MyHostingDemo 🚀"} }],
  ["/getting-started/account-setup.html", { loader: () => import(/* webpackChunkName: "getting-started_account-setup.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/getting-started/account-setup.html.js"), meta: {"title":"Account Setup"} }],
  ["/getting-started/dashboard-tour.html", { loader: () => import(/* webpackChunkName: "getting-started_dashboard-tour.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/getting-started/dashboard-tour.html.js"), meta: {"title":"Dashboard Tour"} }],
  ["/getting-started/", { loader: () => import(/* webpackChunkName: "getting-started_index.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/getting-started/index.html.js"), meta: {"title":"Getting Started"} }],
  ["/guide/database-setup.html", { loader: () => import(/* webpackChunkName: "guide_database-setup.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/guide/database-setup.html.js"), meta: {"title":"Database Setup"} }],
  ["/guide/deploy-website.html", { loader: () => import(/* webpackChunkName: "guide_deploy-website.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/guide/deploy-website.html.js"), meta: {"title":"Deploy a Website"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Guides"} }],
  ["/guide/security.html", { loader: () => import(/* webpackChunkName: "guide_security.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/guide/security.html.js"), meta: {"title":"Security Best Practices"} }],
  ["/guide/troubleshooting.html", { loader: () => import(/* webpackChunkName: "guide_troubleshooting.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/guide/troubleshooting.html.js"), meta: {"title":"Troubleshooting"} }],
  ["/services/domain-registration.html", { loader: () => import(/* webpackChunkName: "services_domain-registration.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/services/domain-registration.html.js"), meta: {"title":"Domain Registration"} }],
  ["/services/", { loader: () => import(/* webpackChunkName: "services_index.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/services/index.html.js"), meta: {"title":"Services"} }],
  ["/services/shared-hosting.html", { loader: () => import(/* webpackChunkName: "services_shared-hosting.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/services/shared-hosting.html.js"), meta: {"title":"Shared Hosting"} }],
  ["/services/ssl-certificates.html", { loader: () => import(/* webpackChunkName: "services_ssl-certificates.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/services/ssl-certificates.html.js"), meta: {"title":"SSL Certificates"} }],
  ["/services/vps-hosting.html", { loader: () => import(/* webpackChunkName: "services_vps-hosting.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/services/vps-hosting.html.js"), meta: {"title":"VPS Hosting"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
