      //Модель - ответ
      function Answers(allAnswers, answersSet){
        this.allAnswers = allAnswers;
        this.answersSet = answersSet;
      }

      //Модуль - точка входа
      var questionaryApp = angular.module("questionaryApp",[]);

      // Контроллер
       questionaryApp.controller('QuestionsCtrl', function($scope, $http, $timeout){
       $scope.url = 'app/questions/question.html';

         //$http.get('https://panel-repatriation.rhcloud.com/surveyuser/getSurvey/smk2')
         $http.get('app/datafolder/data.json')
         .then(function(response) { 
          $scope.questionary = response.data;
          $scope.counter = 0;
          $scope.questnext = $scope.questionary.questions[$scope.counter];
          $scope.questnext.questShow = true;
          var promiseObj = $timeout(function(){
            $scope.questnext.answerblock = true;
            return $scope.questnext.answerblock;
          }, 1000);
          $scope.questnext.writer  = true;
          $scope.questnext.ticks  = true;

     
       // Ответы на вопросы
        var allAnswers = false;
        var answersSet = new Array();
        $scope.answersmodel = new Answers (allAnswers, answersSet);
        $scope.answersmodel.answerSet = new Array;


        // Clik - answer - type 0, 1
        $scope.showNextQuestion = function (result, next){
          console.log(result);
         var promiseObj1 = $timeout(function(){
           $scope.questnext.ticks  = false; 
           return $scope.questnext.ticks
         }, 1000);
          var promiseObj2 = $timeout(function(){
           $scope.questnext.writer  = false;
           return $scope.questnext.writer;
         }, 2000);
          var promiseObj3 = $timeout(function(){
           $scope.questnext.writer  = true;
           return $scope.questnext.writer;
         }, 3000);
          var promiseObj4 = $timeout(function(){
           nextQuestionShow(next);
         }, 4000);
        }

        // Clik - answer - type 3
        $scope.showNextQuestionCheck = function(){
         var promiseObj1 = $timeout(function(){
           $scope.questnext.ticks  = false; 
           return $scope.questnext.ticks
         }, 1000);
         var promiseObj2 = $timeout(function(){
           $scope.questnext.writer  = false;
           return $scope.questnext.writer;
         }, 2000);
         var promiseObj3 = $timeout(function(){
           $scope.questnext.writer  = true;
           return $scope.questnext.writer;
         }, 3000);
         $scope.counter=$scope.counter+2;
         var promiseObj4 = $timeout(function(){
           nextQuestionShow($scope.counter);
         }, 4000);
       }

        // Clik - answer - type 4
        $scope.showNextQuestionText = function(textanswer){
          var promiseObj1 = $timeout(function(){
           $scope.questnext.ticks  = false; 
           return $scope.questnext.ticks
         }, 1000);
          var promiseObj2 = $timeout(function(){
           $scope.questnext.writer  = false;
           return $scope.questnext.writer;
         }, 2000);
          var promiseObj3 = $timeout(function(){
           $scope.questnext.writer  = true;
           return $scope.questnext.writer;
         }, 3000);
          $scope.counter=$scope.counter+2;
          var promiseObj4 = $timeout(function(){
            if ($scope.counter<0||$scope.counter>=$scope.questionary.questions.lenght){
              console.log('stop'); return;
            }
            nextQuestionShow($scope.counter);
          }, 4000);
          console.log(textanswer);
        }

        var nextQuestionShow = function(next){

          if (next==0) {
            $scope.counter = $scope.counter+1;
            $scope.questnext = $scope.questionary.questions[$scope.counter];
            $scope.questnext.questShow = true;
            var promiseObj = $timeout(function(){
              $scope.questnext.answerblock = true;
              return $scope.questnext.answerblock;
            }, 1000);
            $scope.questnext.writer  = true;
            $scope.questnext.ticks  = true;
          }
          else {

            $scope.questnext = $scope.questionary.questions[next]; 
            $scope.questnext.questShow = true; 
            var promiseObj = $timeout(function(){
              $scope.questnext.answerblock = true;
              return $scope.questnext.answerblock;
            }, 1000);
            $scope.questnext.writer  = true;
            $scope.questnext.ticks  = true;
          }
        }

      });
 });


