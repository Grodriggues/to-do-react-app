pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/Grodriggues/to-do-react-app', branch: 'master')
      }
    }

    stage('check docker') {
      steps {
        sh 'docker build .'
      }
    }

  }
}