app.controller("indexController",function ($scope,indexService) {

    //0.定义代表各个分类的关联数组（key：分类id value：分类的列表）
    $scope.categoryList = [];
    //1.根据分类查询列表
    $scope.findCategoryList=(cid)=>{
        indexService.findCategoryList(cid).success(response=>{
            $scope.categoryList[cid] = response;
        })
    }
})