pipeline {
    agent any
    environment {
        RepoDockerHub = 'brclucas'
        NameContainer = 'bit'
        DOCKER_IMAGE_TAG = "1.0.${env.BUILD_NUMBER}"
        P_App = 3000
        P_Cont= 3000
    }
    stages {
        // ... etapas anteriores

        stage('Create and Update Container') {
            steps {
                script {
                    def containerName = "BIT-Jenkins"

                    // Chequear si hay un contenedor activo con la imagen anterior
                    def existingContainerId = sh(script: "docker ps -q --filter ancestor=${env.RepoDockerHub}/${env.NameContainer}", returnStdout: true).trim()

                    
                    // Si hay un contenedor activo, pararlo y borrarlo
                    if (existingContainerId) {
                        sh "docker stop ${containerName}"
                        sh "docker rm ${containerName}"
                    }

                    // Eliminar la imagen anterior
                    sh "docker rmi ${env.RepoDockerHub}/${env.NameContainer}:latest"

                    // Crear y ejecutar el nuevo contenedor con la nueva imagen
                    sh "docker run -d --name ${containerName} -p ${env.P_App}:${env.P_Cont} ${env.RepoDockerHub}/${env.NameContainer}:${env.DOCKER_IMAGE_TAG}"
                }
            }
        }
    }
}
