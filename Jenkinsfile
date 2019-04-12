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
    stage('slack') {
      steps {
        sh 'slackSend "Build Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"'
      }
    }
  }
}