FROM node:14

ARG user
ARG uid

RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

WORKDIR /app

# install app dependencies
COPY package*.json ./

#COPY yarn.lock ./

RUN npm install

COPY . .

RUN chown andres:andres /app/node_modules
# Create system user to run Composer and Artisan Commands
EXPOSE 3000

CMD ["npm", "start"]