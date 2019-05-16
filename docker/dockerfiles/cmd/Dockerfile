# Dockerfile
FROM centos
LABEL "maintainer"="aepkill"
COPY ./nginx.repo /etc/yum.repos.d/nginx.repo
RUN yum update -y
RUN yum install nginx -y
CMD [ "/bin/bash", "-c", "nginx -g \"daemon off;\"" ]
EXPOSE 80
