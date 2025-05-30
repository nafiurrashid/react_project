#!/bin/bash
#@Nafiur_Rashid
set -e

echo "🔄 Updating package index..."
sudo apt update

echo "📦 Installing Nginx..."
sudo apt install -y nginx

echo "⚙️ Enabling Nginx service on boot..."
sudo systemctl enable nginx

echo "🚀 Starting Nginx service..."
sudo systemctl start nginx

echo "🚀 Current status of Nginx service..."
sudo systemctl status nginx --no-pager

echo "✅ Nginx is installed and running!"
echo "🌐 Visit: http://localhost or http://<your-server-ip>"
```



