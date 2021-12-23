FROM ubuntu:20.04
COPY . /root/geth-work
WORKDIR /root/geth-work
RUN apt-get update
RUN apt-get install -y software-properties-common