var app = angular.module('search', []);

app.controller('MainCtrl', function($scope,$http) {
  $http.get('configure.json').success(function(response){ /* Fetching the JSON data */
    $scope.configs=response;
    $scope.selectedOperation=response.operations[0]/* Selecting the default option */
  });
  $scope.submit=function(){
    $scope.result="";
    var selectedOperation=angular.copy($scope.selectedOperation);
    selectedOperation.options=selectedOperation.options.concat(
     $scope.configs.common_operations.options) /* Merging the common options with operation specific options */
    $scope.result+="#"+" "+selectedOperation.operation_name;
    for(var  i=0;i<selectedOperation.options.length;i++){
      if(selectedOperation.options[i].checked){
        $scope.result+=" "+"-"+selectedOperation.options[i].value
      }
  }
     $scope.result+=" "+($scope.searchText || "")/* Displaying the result */
  }
});