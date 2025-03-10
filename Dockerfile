ARG BASE_SERVER_IMAGE=temporalio/base-server:1.2.0
ARG BASE_BUILDER_IMAGE=temporalio/base-builder:1.7.0
ARG GOPROXY

##### UI builder #####
FROM ${BASE_BUILDER_IMAGE} AS ui-builder

WORKDIR /home/ui-builder

# pre-build dependecies to improve subsequent build times
COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN make build-server

##### UI server #####
FROM ${BASE_SERVER_IMAGE} AS ui-server
WORKDIR /home/ui-server

COPY --from=ui-builder /home/ui-builder/ui-server ./
COPY docker/start-ui-server.sh ./start-ui-server.sh
COPY docker/config_template.yaml ./config/config_template.yaml

EXPOSE 8080
ENTRYPOINT ["./start-ui-server.sh"]