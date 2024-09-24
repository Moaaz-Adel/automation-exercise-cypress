pipeline {
    agent any

    parameters {
        string(name: 'TEST_TYPE', defaultValue: 'none', description: 'Choose the type of tests to run (apis, smoke, regression)')
    }

    stages {
        stage('Install Dependencies 📦') {
            steps {
                echo 'Installing dependencies..'
                bat 'npm install'
            }
        }
        stage('Run API Tests 🤖') {
            when {
                expression { params.TEST_TYPE == 'apis' }
            }
            steps {
                echo 'Running API tests...'
                bat 'npm run cy:apis'
            }
        }
        stage('Run Smoke Tests 🍔') {
            when {
                expression { params.TEST_TYPE == 'smoke' }
            }
            steps {
                echo 'Running Smoke tests...'
                bat 'npm run cy:smoke'
            }
        }
        stage('Run Regression Tests 🌟') {
            when {
                expression { params.TEST_TYPE == 'regression' }
            }
            steps {
                echo 'Running Regression tests...'
                bat 'npm run cy:regression'
            }
        }
    }
}
