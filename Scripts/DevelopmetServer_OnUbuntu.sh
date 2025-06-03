#!/bin/bash  
#  @author ${Nafiur Rashid}
#  @email ${nafiurrashid@gmail.com}
#  ${Version: 1.00}
set -e

echo "🔄 Updating package index..."
sudo apt update
echo "📦 Installing npm..."
sudo apt install npm -y

echo "📦 Cloning this repo..."
git clone https://github.com/nafiurrashid/react_project.git
cd react_project

echo "📦 Installing dependency.."
npm install
npm run start
# Open the firewall to allow access to Jenkins
sudo ufw allow 3000
