import path from 'path'

const root = path.resolve(__dirname, '..')

export const indexHtml = path.resolve(root, 'public', 'index.html')
export const srcPath = path.resolve(root, 'src')
export const index = path.resolve(srcPath, 'index.tsx')
export const build = path.resolve('build')
