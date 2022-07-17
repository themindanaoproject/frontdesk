app.service('HeaderSearchModule',($scope,SearchSvc,PathSvc)=>{

    let searchKeyword = '';
    let dataLake = {};

    $scope.HeaderSearch = {
        onKeyup:()=>{
            let resultsUI = '';
            searchKeyword = $('#HeaderSearchKeyword').val();
            if (searchKeyword==='') {
                $('#HeaderSearchResult').html('');
            } else {
                let results = SearchSvc.search.path(searchKeyword,dataLake);
                if (results.length===0) {
                    resultsUI = '<div class="position-abs header-search-result w-12"><div class="subtext pd-top-3 text-6 fw-3 text-color-light">No results found.</div></div>';
                } else {
                    resultsUI = resultsUI+'<div class="position-abs header-search-result w-12"><ul class="mg-top-2">';
                    for (var i = 0; i < results.length; i++) {
                        let resultItem = results[i];
                        let realPath = '/'+PathSvc.toQueryParams(resultItem.path);
                        resultsUI = resultsUI+'<li class="pd-left-5 pd-right-5 border-bottom-1 border-thin border-light hover-bg-light"><a class="no-decor text-color-dark" href="'+realPath+'"><div class="pd-top-5 pd-bottom-5 subtext text-6 fw-4">'+resultItem.name+'</div></a></li>';
                    }
                    resultsUI = resultsUI+'</ul></div>';
                }
                $('#HeaderSearchResult').html(resultsUI);
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
