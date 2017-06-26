NAME=clix2brix-web
TAG=master

.PHONY: build docker

default:docker

build:
	npm install
	grunt clean build:prod

docker: Dockerfile build
	docker build -t $(NAME):$(TAG) .

