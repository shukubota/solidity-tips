FROM ubuntu:20.04
RUN apt-get update
RUN apt-get install -y software-properties-common
RUN add-apt-repository -y ppa:ethereum/ethereum
RUN apt-get update
RUN apt-get install -y ethereum
RUN add-apt-repository ppa:ethereum/ethereum
RUN apt-get update
RUN apt-get install -y solc
RUN apt-get install -y curl
RUN apt-get install -y sudo
RUN curl https://install.meteor.com | sh