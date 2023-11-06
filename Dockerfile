FROM openjdk:17-jdk-alpine

ARG JAR_FILE=.mvn/*/*.jar

COPY ${JAR_FILE} app.jar

EXPOSE 8081

ENTRYPOINT ["java","-jar","/app.jar"]