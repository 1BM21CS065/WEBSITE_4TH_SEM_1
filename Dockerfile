# Use the official PHP 7.4 image with Apache
FROM php:7.4-apache

# Copy the contents of your project to the web server's root directory
COPY ./ /var/www/html/

# Set the ServerName in Apache configuration (optional)
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Install the MySQLi extension
RUN apt-get update -y && apt-get install -y libmariadb-dev && docker-php-ext-install mysqli

# Expose port 80 for Apache
EXPOSE 80

# Start Apache when the container starts
CMD ["apache2-foreground"]

