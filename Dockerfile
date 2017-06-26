FROM php:7.0-apache


RUN apt-get update && apt-get install -y libmcrypt-dev libpng-dev libjpeg-dev libfreetype6-dev

RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/lib

RUN docker-php-ext-install -j$(nproc) mcrypt pdo_mysql gd

RUN a2enmod rewrite
COPY src /app


RUN chown -R www-data:www-data /app

COPY e2l.conf /etc/apache2/sites-enabled/

RUN rm /etc/apache2/sites-enabled/000-default.conf

ENTRYPOINT ["/app/entrypoint"]
CMD ["apache2-foreground"]
