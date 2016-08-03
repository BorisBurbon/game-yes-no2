angular.module('chatApp')
    .controller("defaultCtrl", function ($scope) {

        $scope.addNewUser = function (userDetails, isvalid) {
            if (isvalid) {
                $scope.message = userDetails.name;
            }
            else {
                $scope.message = "Error";
                $scope.showError = true;
                $scope.classNames = "error";
            }
        }

        // Для многих элементов форм ошибки могут быть одинаковыми, для того чтобы избавиться от дублирования кода
        // можно использовать методы подобные getError
        $scope.getError = function (error) {
           var mg = "<span class='error'><span class='text'>Поле не должно быть пустым</span></span>";
            var smile = 11;
            if (angular.isDefined(error)) {
                if (error.required && error) {
                    return mg;
                }
                else {
                    $scope.showError = true;
                    $scope.classNames = "";

                }
            }
        }
    });