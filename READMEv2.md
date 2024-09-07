Base on Documentation:
- sudo docker build -t nextjs-docker .
- sudo docker run -p 3000:3000 nextjs-docker
- sudo docker run -d -p 3000:3000 --log-driver=none nextjs-docker
- sudo docker stop <docker_container_name>
- sudo docker start <docker_container_name>

Others:
sudo rm -r node_modules/
- remove node_modules

- sudo npm install
- sudo npm run dev

sudo docker build -t my-portfolio .
sudo docker build -t my-portfolio:latest .
sudo docker run -d -p 3000:3000 --log-driver=none my-portfolio


