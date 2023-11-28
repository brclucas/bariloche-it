pipeline {
    agent any
    environment {
        RepoDockerHub = 'brclucas'
        NameContainer = 'bit'
        DOCKER_IMAGE_TAG = "1.0.${env.BUILD_NUMBER}"
        P_App = 3000
        P_Cont= 3000

    stages {
        stage('Build Image') {
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

         stage('Create and Update Container') {
            steps {
                sh {
                    def containerName = "BIT-Jenkins"

                    // Chequear si hay un contenedor activo con la imagen anterior
                    def existingContainerId = sh(script: "docker ps -q --filter ancestor=${env.RepoDockerHub}/${env.NameContainer}", returnStatus: true).trim()
                    
                    // Si hay un contenedor activo, pararlo y borrarlo
                    if (existingContainerId) {
                        sh "docker stop ${containerName}"
                        sh "docker rm ${containerName}"
                    }

                    // Eliminar la imagen anterior
                    sh "docker rmi ${env.RepoDockerHub}/${env.NameContainer}:latest"

                    // Crear y ejecutar el nuevo contenedor con la nueva imagen
                    sh "docker run -d --name ${containerName} -p P_App:P_Cont ${env.RepoDockerHub}/${env.NameContainer}:${env.DOCKER_IMAGE_TAG}"
                }
            }

    }
}
