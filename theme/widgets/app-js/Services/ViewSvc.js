app.service('ViewSvc',($scope,$patch)=>{
    $scope.View = {
        state: 'default'
    }
    return {
        setView:(view)=>{
            $scope.View.state = view;
            $patch('PageView');
        }
    }
});
