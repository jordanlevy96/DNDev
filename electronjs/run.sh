export BROWSER=none
pm2 stop all
pm2 delete all
pm2 start ecosystem.config.js