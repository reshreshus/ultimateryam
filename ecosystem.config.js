module.exports = {
  apps: [
    {
      name: 'ultimate ryam',
      port: 3333,
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}