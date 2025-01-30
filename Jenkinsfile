    pipeline {

    agent any

    stages {
        stage('Checkout') {
           stage('Build') {
                steps {
                    script {
                        sh 'docker --version' // Ensure Docker is accessible
                        sh 'docker build -t tiktoktoe-new4:latest .'
                    }
                }
            }
        }
    }
    post {
        success {
            echo "Docker image tictoctoe-new4 built and pushed successfully."
        }
        failure {
            echo "Pipeline failed. Please check the logs."
        }
    }
}
