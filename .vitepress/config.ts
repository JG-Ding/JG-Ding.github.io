import { defineConfig } from 'vitepress'
import { join, resolve } from 'node:path'
import { appendFileSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { Plugin } from 'vite'
import { fileURLToPath } from 'node:url'

const srcDir = resolve('src')

// https://vitepress.dev/reference/site-config
export const createConfig = () => defineConfig({
   title: "漫话随笔",
   description: "漫话前端——我的前端学习随笔",
   srcDir: srcDir,
   outDir: 'docs',
   lang: 'zh-CN',
   head: [
      ['link', { rel: 'icon', href: '/favicon.svg' }]
   ],
   vite: {
      plugins: [vitePluginRestart()]
   },
   themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
         { text: '首页', link: '/' },
      ],
      sidebar: createSidebarItem(srcDir)?.items,
      socialLinks: [
         {
            icon: 'github',
            link: 'https://github.com/JG-Ding/JG-Ding.github.io'
         }
      ],
      docFooter: {
         prev: '上一篇',
         next: "下一篇"
      },
      outline: {
         label: '本页导航',
         level: 'deep'
      }
   },
})

export function createSidebarItem(dir: string, prefix = '') {
   const items: any[] = []
   const sidebar = {
      base: prefix,
      link: '/',
      text: readTitle(resolve(dir, 'index.md')),
      items
   }
   const files = readdirSync(dir);
   files.forEach((file) => {
      const fullPath = join(dir, file);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
         const child = createSidebarItem(fullPath, `${prefix}/${file}`);
         if (child) items.push(child);
      } else if (file !== 'index.md' && file.endsWith('.md')) {
         const name = file.replace(/\.md$/, '')
         const title = readTitle(resolve(dir, file))
         if (title) items.push({
            link: `/${name}`,
            text: title,
         });
      }
   });
   if (items.length === 0 && !sidebar.text) return undefined
   return sidebar
}

export function readTitle(filePath: string) {
   try {
      const lines = readFileSync(filePath, 'utf-8').split('\n')
      const goodLines = lines.filter(l => Boolean(l.trim()))
      return goodLines[0].replace(/^#/, '').trim()
   } catch (error) {
      return ''
   }
}

const buttonHtml = `
   <button class="vite_restart_btn" onclick="restartViteServer()">R</button>
   <script>
      function restartViteServer() {
      fetch('/__vite_plugin_restart').then(() => {
         console.log('Vite server restarting...');
      });
    }
   </script>
   <style>
      .vite_restart_btn {
         display: block;
         position: fixed; 
         top: 10px; 
         left: 10px; 
         z-index: 1000; 
         width: 30px;
         height: 30px;
         line-height: 30px;
         text-align: center;
         background: #9dd4d478; 
         border-radius: 999px; 
         overflow: hidden; 
      }
   </style>
`;

function vitePluginRestart() {
   return <Plugin>{
      name: 'vite-plugin-restart',
      configureServer(server) {
         // Middleware to handle restart request
         server.middlewares.use((req, res, next) => {
            if (req.url === '/__vite_plugin_restart') {
               console.log('Restarting Vite server...');
               res.end('Vite server restarting...');
               const path = fileURLToPath(import.meta.url)
               const thisFile = readFileSync(path, 'utf-8')
               if (thisFile.match(/(\s|\n)$/))
                  writeFileSync(path, thisFile.trimEnd())
               else appendFileSync(path, '\n')
            } else {
               next();
            }
         });
      },
      transformIndexHtml(html) {
         return html.replace('</body>', buttonHtml + '</body>')
      }
   };
};

export default createConfig()
