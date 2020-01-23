FROM node:10

ENV GIT_REPO=https://github.com/keepgoingwm/onenight-werewolf-old.git \
  REPO_NAME=my-project

WORKDIR /app

# clone project
RUN git clone ${GIT_REPO} ${REPO_NAME}

# install
RUN cd ${REPO_NAME} \
  && npm install \
  && cp env.example.js env.js

# entrypoint
WORKDIR /app/${REPO_NAME}
# ENTRYPOINT [ "npm" ]
# CMD ["npm", "run dev"]
CMD ["node", "build/dev-server.js"]
EXPOSE 8083