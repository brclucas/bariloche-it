pipeline {
    agent any
    environment {
        RepoDockerHub = 'brclucas'
        NameContainer = 'bit'
        DOCKER_IMAGE_TAG = "1.0.${env.BUILD_NUMBER}"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    try {
                        sh "docker build -t ${env.RepoDockerHub}/${env.NameContainer}:${env.DOCKER_IMAGE_TAG} ."
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        error("Error during Docker build: ${e.message}")
                    }
                }
            }
        }

        stage('Login to Dockerhub') {
            steps {
                script {
                    try {
                        withCredentials([usernamePassword(credentialsId: 'DockerHub', passwordVariable: 'DOCKERHUB_CREDENCIALS_PSW', usernameVariable: 'DOCKERHUB_CREDENCIALS_USR')]) {
                        sh "echo -n $DOCKERHUB_CREDENCIALS_PSW | docker login -u $DOCKERHUB_CREDENCIALS_USR --password-stdin "
                        }
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        error("Error during Docker login: ${e.message}")
                    }
                }
            }
        }

        stage('Push image to Dockerhub') {
            steps {
                script {
                    try {
                        sh "docker push ${env.RepoDockerHub}/${env.NameContainer}:${env.DOCKER_IMAGE_TAG}"
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        error("Error during Docker push: ${e.message}")
                    }
                }
            }
        }
    }
}
