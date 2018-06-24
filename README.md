# hello
***
Чтобы скачать с гитхаба проект нажимаем на "Clone or download"  запускаем команду в консоли (перейдите в консоли к той директории в которую собираетесь скачать проект):

$ git clone https://github.com/kurbanovfarkhad/hello.git

Заходим в папку:

/source/main/resources

В файле:

/source/main/resources/application.properties

следует поменять название базы данных(MySql)

spring.datasource.url=jdbc:mysql://localhost:3306/```**hello_world**```?autoReconnect=true&useSSL=false

на ту которую вы используете. соответственно следует написать пароль и имя в строках

spring.datasource.username=```**root**```

spring.datasource.password=```**12345**```

Далее переходим в корневую папку проекта и запускаем команду:

$ ./mvnw spring-boot:run

Ждём когда запуститься сервер. После запуска сервера заходим в браузере по адресу:
http://locahost:8080
И видим результат.
