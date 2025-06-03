#!/bin/bash  
sudo apt update -y
sudo apt install npm -y
git clone https://github.com/nafiurrashid/react_project.git
cd react_project
npm install
npm run start
# Open the firewall to allow access to Jenkins
sudo ufw allow 8080
