import { defineConfig, pluginSsg, pluginSvg } from "minista"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"

export default defineConfig({
  plugins: [
    pluginSsg({
      mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              grid: false,
              theme: "nord",
              keepBackground: false,
            },
          ],
        ],
      },
    }),
    pluginSvg(),
  ],
})
