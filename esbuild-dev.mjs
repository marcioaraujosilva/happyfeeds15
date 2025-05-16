import esbuild from 'esbuild';

const publicDir = 'public';

esbuild.context({
  entryPoints: [ 'src/index.js', 'src/index.html' ],
  bundle: true,
  sourcemap: true,
  minify: false,
  loader: {
    '.js': 'js',
    '.css': 'css',
    '.html': 'copy',
    '.png': 'file',
    '.svg': 'file'
  },
  outdir: publicDir,
  logLevel: 'info',
  banner: { js: `new EventSource("/esbuild").addEventListener("change", () => window.location.reload());` },
}).then( instance => {
  instance.watch()
  instance.serve({
    host: '0.0.0.0',
    port: 3000,
    servedir: publicDir
  })
});