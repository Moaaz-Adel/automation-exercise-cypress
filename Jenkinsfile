pipeline {
    agent { label 'your-ubuntu-agent-label' } // Use the label you assigned to your Ubuntu agent

    stages {
        stage('Run API Tests 🤖') {
            steps {
                echo 'Building..'
                sh 'npm install' // This will now run in the Ubuntu environment
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
