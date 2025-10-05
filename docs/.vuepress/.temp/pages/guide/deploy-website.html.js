import comp from "C:/Users/Regxa company/vuepress-starter/docs/.vuepress/.temp/pages/guide/deploy-website.html.vue"
const data = JSON.parse("{\"path\":\"/guide/deploy-website.html\",\"title\":\"Deploy a Website\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"guide/deploy-website.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
