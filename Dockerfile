FROM node
EXPOSE 1337
COPY . .
RUN npm install
CMD node .