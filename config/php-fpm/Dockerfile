FROM php:8.1-fpm

RUN apt-get -yq update \
    && apt-get -yq upgrade \
    && apt-get -yq install mc htop vim zlib1g-dev libpng-dev libwebp-dev libjpeg-dev libfreetype6-dev libxml2-dev libmagickwand-dev \
    && docker-php-ext-configure gd --with-jpeg --with-webp --with-freetype \
    && docker-php-ext-configure soap \
    && docker-php-ext-install gd mysqli soap \
    && pecl install imagick-3.7.0 \
    && docker-php-ext-enable imagick
    # Uncomment to enable memcached extension
    # && pecl install memcached \
    # && docker-php-ext-enable memcached

WORKDIR /www
