pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out the code..." // Add actual Git checkout command if needed
            }
        }
        
        stage('Build') {
            steps {
                script {
                    bat 'docker --version' // Ensure Docker is accessible
                    bat 'docker build -t tiktoktoe-new4:latest .'
                }
            }
        }
    }

    post {
        success {
            echo "Docker image tiktoktoe-new4 built and pushed successfully."
        }
        failure {
            echo "Pipeline failed. Please check the logs."
        }
    }
}
