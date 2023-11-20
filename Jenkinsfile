pipeline {
    agent any
    environment{
        DOCKERHUB_CREDENCIALS = credentials ('cb6e791c-399e-4b69-a055-11ac497ea1c2')
        RepoDockerHub = 'brclucas'
        NameContainer = 'bit'
    }

    stages {
        stage('Build'){
            steps{
                sh "docker build -t brclucas/bit:1.0.${env.BUILD_NUMBER} ."
            }
        }
        stage('Login to Dockerhub'){
            steps{
                sh "echo $DOCKERHUB_CREDENCIALS_PSW | docker login -u $DOCKERHUB_CREDENCIALS_USR --password-stdin "
            }
        }
        stage('Push image to Dockerhub'){
            steps{
                sh "docker push ${env.RepoDockerHub}/${env.NameContainer}:1.0.${env.BUILD_NUMBER} "
            }
        }
    }

}