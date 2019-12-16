server {
    listen 80;
    listen [::]:80 ;

    root /var/www/easygame.funndeh.com/ProjetDIntegration2019/Web/easygame/build;

    index index.php index.html index.htm index.nginx-debian.html;

    server_name easygame.funndeh.com www.easygame.funndeh.com;

    access_log /var/log/nginx/easygame.funndeh.com.access.log;
    error_log /var/log/nginx/easygame.funndeh.com.error.log;

    location / {
        try_files $uri $uri/ =404;
    }

    location /.well-known {
        autoindex on;
        autoindex_exact_size off;
    }

    location /nichtszusehen {
        autoindex on;
        auth_basic "Admin Login";
        auth_basic_user_file /etc/nginx/mysql_pass;
    }

    return 301 https://www.easygame.funndeh.com$request_uri;
}


server {
    listen 443 ssl;
    listen [::]:443 ssl;

    root /var/www/easygame.funndeh.com/ProjetDIntegration2019/Web/easygame/build;

    index index.php index.html index.htm index.nginx-debian.html;

    server_name easygame.funndeh.com www.easygame.funndeh.com;

    access_log /var/log/nginx/easygame.funndeh.com.access.log;
    error_log /var/log/nginx/easygame.funndeh.com.error.log;

    ssl_certificate /etc/nginx/ssl/easygame.funndeh.com.crt;
    ssl_certificate_key /etc/nginx/ssl/easygame.funndeh.com.key;


    location / {
         try_files $uri $uri/ =404;
         proxy_http_version 1.1;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    }

    location ~ /\.ht {
        deny all;
    }

    location /nichtszusehen/ {
        autoindex on;
        auth_basic "Admin Login";
        auth_basic_user_file /etc/nginx/mysql_pass;
    }

    location /api/ {
        rewrite ^/api(.*) $1 break;
        proxy_pass "http://www.easygame.funndeh.com:5000";
    }


