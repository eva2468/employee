var sample=angular.module("sample", []);
sample.controller("myctrl", function($scope, $http)
{
    $http.get('http://127.0.0.1:5200/user')
    .success(function(response)
    {
        $scope.entry=response.data;
        $scope.limit=6;
    });
    
});

sample.filter("Age", function () { return function (Age) {
    if(Age<35)
    {
        return "junior";
    }
    else{
        return "senior";
    }
    }});


