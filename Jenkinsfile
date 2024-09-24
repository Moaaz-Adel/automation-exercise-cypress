pipeline {
    agent any

    stages {
        stage('Run API Tests 🤖') {
            steps {
                echo 'Building..'
                bat 'npm install'
            }
        }
        stage('Run Smoke Tests 🍔') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Run Regression Tests 🌟') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
