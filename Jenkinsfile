pipeline {
    agent any

    stages {
        stage('Install Dependencies 📦') {
            steps {
                echo 'Installing dependencies..'
                bat 'npm install'
            }
        }
        stage('Run API Tests 🤖') {
            steps {
                echo 'Building..'
                bat '''
                    npm run cypress
                '''
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
