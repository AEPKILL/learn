# Dockerfile
FROM centos
LABEL "maintainer"="aepkill"
COPY ./nginx.repo /etc/yum.repos.d/nginx.repo
RUN yum update -y
RUN yum install nginx -y
EXPOSE 80

