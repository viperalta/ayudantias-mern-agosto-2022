# Deployment AWS

## EC2

-   [ ] https://console.aws.amazon.com/?nc2=h_m_mc
-   [ ] Buscar y seleccionar servicio EC2 en la AWS Management Console
-   [ ] Ir a "Launch a instance"
-   [ ] Agregar un nombre
-   [ ] Seleccionar Ubuntu en Quick Start.
-   [ ] Seleccionar "Ubuntu Server 20.04 LTS (HVM), SSD Volume Type" - Free tier eligible
-   [ ] Seleccionar "Create a new key pair" en el menu Key pair (login)
-   [ ] Agregar un nombre para el Key pair. Dejar como estan las opciones Key pair type (RSA) y Private key file format (.pem)
-   [ ] Seleccionar "Create key pair". Esto descargará un archivo .pem. Guardalo en una carpeta, por ejemplo Desktop/Deploys.
-   [ ] En el menu de Network settings, en "Allow SSH traffic from", seleccionar My IP. Y chequear las opciones "Allow HTTPS traffic from the internet" y "Allow HTTP traffic from the internet"
-   [ ] Darle click al boton "Launch Instance"
-   [ ] Ir al tabla de instancias y darle check a tu instancia, debes ver "Actions" arriba
-   [ ] Seleccionar "Connect"
-   [ ] En menu "EC2 Instance Connect" copiar la Public IP adress y pegarla en el menu de Network en Mongo DB Atlas.
-   [ ] Darle click al menu "SSH client"
-   [ ] Copiar el ejemplo que aparece al final. Guardar ese codigo en un archivo de texto, en la misma carpeta Deploys en donde se guardo el .pem.
-   [ ] Abrir git bash en esa carpeta y correr el codigo del ejemplo. Darle click a yes, y ya entraste a tu maquina de amazon!
-   [ ] Si tuviste algun problema, ver los pasos siguientes. Si no, saltar Instalaciones en el servidor.
-   [ ] Copiar el ùltimo ejemplo a un sticky note o notepad. Debe ser algo como `ssh -i "mern-1.cer" ubuntu@ec2-35-160-97-190.us-west-2.compute.amazonaws.com`. No cierres esta ventana hasta terminar todo el examen.
-   [ ] Abrir el terminal. Recomiendo que uses zsh (Mac), bash o gitbash.
-   [ ] `ssh -i "desktop/mern-1.cer" ubuntu@ec-tu-instancia-x-x-x-x-x-x-x.amazonaws.com` debes poner el path al key tal como antes "desktop/mern-1.cer" y debes usar el "ubuntu@ec-bla-bla-bla" de tu instancia que ya copiaste. Si ves algo de WARNING UNPROTECTED PRIVATE KEY FILE, ve abajo antes de seguir.
-   [ ] `yes`
-   [ ] Para salir, podrás usar el comando `exit`. A veces tienes que hacer `exit` dos veces. Para entrar de nuevo, el comando estará disponible con la flecha de arriba en tu teclado.

### WARNING UNPROTECTED PRIVATE KEY FILE
- [ ] Si estás en Mac y tienes problemas de permiso, debes poner el comando `chmod 400 desktop/mern-1.cer`. Si tu key tiene otro nombre o path, tendràs que hacer `chmod 400 al/archivo/de/key`. También podría ser un archivo .pem.

## Instalaciones en el Servidor

-   [ ] Ejecutar los siguientes comandos

```
bash
sudo apt update
sudo apt install nginx git -y
```

-   [ ] Instalar NVM

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.1/install.sh | bash
```

-   [ ] Averiguar `nvm --version`. Si no sale bien, da un `exit` para salir del servidor y volver a entrar usando la flecha de arriba ENTER
-   [ ] Instalar node

```
nvm install node
```

-   [ ] Averiguar `node -v`
-   [ ] Averiguar `npm -v`
-   [ ] Si npm no está `sudo apt install npm`

# Copiar y Probar Proyecto en Servidor

-   [ ] `git clone tu-url-de-github` (Es posible que tengas que entrar tu login)
-   [ ] `cd tu-proyecto`
-   [ ] Crear el archivo de .env.

```
sudo nano .env
```

Para guardar el archivo:

-   [ ] "control x"
-   [ ] "y"
-   [ ] ENTER
-   [ ] `npm i`
-   [ ] Ir al directorio de client (usa `ls` para ver archivos que están allí y `pwd` para ver en dónde estás)
-   [ ] Si usaste yarn en react, haz

```
npm i yarn -g
```

-   [ ] Entrar en el directorio del client `cd client`
-   [ ] En el client haz `npm i` o `yarn` (depende en lo que usaste)
-   [ ] `npm run build` o `yarn build`
-   [ ] Ir al directorio del servidor `cd ..`
-   [ ] Hacer `npm run start` o `node server.js`. Sólo para ver que el servidor funciona. Si está bien, "control c"

# NGINX

-   [ ] Mover el default de configuación de NGINX

```
sudo mv /etc/nginx/sites-available/default /etc/nginx/sites-available/default-copy
```

-   [ ] Crear el archivo de la nueva configuración

```
sudo nano /etc/nginx/sites-available/default
```

-   [ ] Copiar este código al archivo

```
server {
  listen 80 default_server;
  listen [::]:80 default_server;
  server_name  <nombre-de-tu-proyecto>;
  root /home/ubuntu/<nombre-del-directorio-de-tu-proyecto>/client/build;
  index index.html;

  location /api {
    proxy_pass http://localhost:<el-port-de-api>;
    proxy_redirect off;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }

  location / {
    try_files $uri $uri/ =404;
  }

  error_page 404 /index.html;
}
```

-   [ ] Para guardar "control x", "y" y ENTER
-   [ ] Probar que tu archivo de configuración esté bien

```
sudo nginx -t
```

-   [ ] Hacer un reload a NGINX

```
sudo systemctl reload nginx
```

-   [ ] Visitar tu página en el navegador. Puedes volver a AWS seleccionar "ECS Instance Connect", copiar el "Public IP address" y pegarlo como si fuera URL 35.160.97.190.
-   [ ] Debes ver que aparecen los archivos de client, pero el api no se ha iniciado.

# PM2

-   [ ] Instalar PM2

```
npm i pm2 -g
```

Hay un cheatsheet [PM2 Cheatsheet](https://devhints.io/pm2)

-   [ ] Comenzar tu servidor con PM2

```
pm2 start server.js --name <nombre-del-proyecto>
```

-   [ ] Averiguar que esté funcionando

```
pm2 logs
```

-   [ ] Visitar tu página en el navegador. Puedes volver a AWS seleccionar "ECS Instance Connect", copiar el "Public IP address" y pegarlo como si fuera URL 35.160.97.190

Créditos a [Jake Avery](https://github.com/JakeAve/MERN-03-2021/blob/main/deployment/deployment-aws.md) , creador del instructivo original.