pipeline {
  agent {
    docker {
      image 'node:10-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('build') {
      steps {
        sh '''npm i
npm run build'''
      }
    }
    stage('test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('deploy') {
      steps {
        sh 'echo "deploy" '
      }
    }
  }

post {
    success {
        slackSend channel: '#jenkins-ci',
                  color: 'good',
                  message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
    }

     failure  {
        slackSend channel: '#jenkins-ci',
                  color: 'RED',
                  message: "The pipeline ${currentBuild.fullDisplayName} has failed."
    }
}

}