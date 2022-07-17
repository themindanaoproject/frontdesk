app.service('HomeSearchModule',($scope,SearchSvc,PathSvc)=>{

    let searchKeyword = '';
    let dataLake = {};

    $scope.HomeSearch = {
        onKeyup:()=>{
            let resultsUI = '';
            searchKeyword = $('#HomeSearchKeyword').val();
            if (searchKeyword==='') {
                $('#search-section').css('margin-top','30vh');
                $('#HomeSearchResults').html('');
            } else {
                $('#search-section').css('margin-top','60px');
                let results = SearchSvc.search.path(searchKeyword,dataLake);
                if (results.length===0) {
                    resultsUI = '<div class="subtext pd-top-3 text-6 fw-3 text-color-light">No results found.</div>';
                } else {

                    for (var i = 0; i < results.length; i++) {
                        let resultItem = results[i];
                        let realPath = '/'+PathSvc.toQueryParams(resultItem.path);
                        resultsUI = resultsUI+'<ul class="mg-top-2"><li class="pd-top-5 pd-bottom-5 border-bottom-1 border-thin border-light hover-bg-light"><a class="no-decor text-color-dark" href="'+realPath+'"><div class="subtext text-6 fw-4">'+resultItem.name+'</div></a></li></ul>';
                    }
                }
                $('#HomeSearchResults').html(resultsUI);
            }
        },
        searchKeyword:''
    }

    return {
        fetchPaths:(result)=>{
            SearchSvc.get.paths({
                success:(result)=>{
                    dataLake = result.data;
                },
                error:()=>result.error()
            });
        }
    }

});
