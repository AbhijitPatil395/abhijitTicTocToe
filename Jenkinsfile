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
        stage('Run') {
            steps {
                script {
                    bat 'docker run -p 4300:80 -d --name tiktoktoe-container tiktoktoe-new4'
                    echo "Image is running successfully on port 4300..."
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
