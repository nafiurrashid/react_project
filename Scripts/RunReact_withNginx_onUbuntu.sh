#!/bin/bash

#  @author ${Nafiur Rashid}
#  @email ${nafiurrashid@gmail.com}
#  ${Version: 1.00}
  
set -e

echo "🔄 Updating package index..."
sudo apt update

echo "📦 Installing Nginx..."
sudo apt install -y nginx

echo "⚙️ Enabling Nginx service on boot..."
sudo systemctl enable nginx

echo "🚀 Starting Nginx service..."
sudo systemctl start nginx

echo " Current status of Nginx service..."
sudo systemctl status nginx --no-pager

echo "✅ Nginx is installed and running!"
echo "🌐 Visit: http://localhost or http://<your-server-ip>"

echo "📦 Installing npm..."
sudo apt install npm -y

echo "📦 Cloning this repo..."
git clone https://github.com/nafiurrashid/react_project.git
cd react_project

echo "📦 creating build file.."
npm install
npm run build

echo "📦 moving the buildfile.."
sudo rm /var/www/html/index.nginx-debian.html
sudo cp -r build/* /var/www/html/
chmod +x *

echo "🔄 Relaod & restart Nginx..."
sudo systemctl reload nginx
sudo systemctl restart nginx






