var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope,$http) {
  $scope.name = 'World';
  $scope.result="";
  $http.get('configure.json').success(function(response){
    $scope.configs=response;
    $scope.selOperation=response.operations[0].operation_name
    $scope.setOperation(response.operations[0])
  });
  $scope.setOperation=function(operation){
    $scope.selectedOperation=operation;
    //$scope.selectedOperation.options=$scope.selectedOperation.options.concat(
    //  $scope.configs.common_operations.options)
  }
  $scope.submit=function(){
    $scope.result="";
    var selectedOperation=angular.copy($scope.selectedOperation);
    selectedOperation.options=selectedOperation.options.concat(
     $scope.configs.common_operations.options)
    $scope.result+=selectedOperation.operation_name;
    for(var  i=0;i<selectedOperation.options.length;i++){
      if(selectedOperation.options[i].checked){
        $scope.result+=" "+selectedOperation.options[i].value
      }
   
  }
     $scope.result+=" "+$scope.searchText
  }
});
//