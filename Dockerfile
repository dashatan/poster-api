FROM node:18.12.0

WORKDIR /services/poster-api

# Comment below lines out on local build

COPY ./ /services/poster-api/

ENTRYPOINT [ "/services/poster-api/entrypoint.sh" ]