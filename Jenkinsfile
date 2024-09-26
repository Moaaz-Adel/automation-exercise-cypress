pipeline {
    agent any
    options {
        ansiColor('xterm')
    }
    stages {
        stage('Install Dependencies 📦') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }
        stage('Select Test Type 📝') {
            steps {
                script {
                    def userInput = input(
                        id: 'userInput', message: 'Select the type of tests to run:',
                        parameters: [
                            [$class: 'ChoiceParameterDefinition', name: 'TEST_TYPE', 
                             choices: ['none', 'apis', 'smoke', 'regression'], 
                             description: 'Choose the type of tests to run']
                        ]
                    )
                    env.TEST_TYPE = userInput
                }
            }
        }
        stage('Run API Tests 🤖') {
            when {
                expression { env.TEST_TYPE == 'apis' }
            }
            steps {
                echo 'Running API tests...'
                bat 'npm run cy:apis'
            }
        }
        stage('Run Smoke Tests 🍔') {
            when {
                expression { env.TEST_TYPE == 'smoke' }
            }
            steps {
                echo 'Running Smoke tests...'
                bat 'npm run cy:smoke'
            }
        }
        stage('Run Regression Tests 🌟') {
            when {
                expression { env.TEST_TYPE == 'regression' }
            }
            steps {
                echo 'Running Regression tests...'
                bat 'npm run cy:regression'
            }
        }
    }
    triggers {
        pollSCM('* * * * *') // Check for changes every minute
    }
}
