# SpringbootAtelierV

Backend Spring Boot :
Exécutez la commande suivante dans le répertoire contenant le Dockerfile :
docker build -t backend-voiture:1.0 .

Frontend React :
Exécutez la commande suivante dans le répertoire contenant le Dockerfile :
cd src/webapp/reactjs
docker build -t frontend-voiture:1.0 .

Pull de la Base de Données MySQL
docker pull mysql

Docker Compose

Exécution de l'Application
docker-compose up

Cela démarrera tous les services (backend, frontend, et MySQL) et les connectera dans un réseau Docker. L'application sera disponible à l'adresse du frontend (par défaut : http://localhost:3000) une fois que tout est démarré.
