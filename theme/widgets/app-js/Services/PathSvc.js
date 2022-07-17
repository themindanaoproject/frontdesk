app.service('PathSvc',()=>{
    let parsePath=(path)=>{
        let items = path.split('/');
        return {
            islandGroup: items[1] ?? null,
            region: items[2] ?? null,
            province: items[3] ?? null,
            towncity: items[4] ?? null
        }
    }

    let joinPathObject=(pathObj,tcKey)=>{
        if (null!==pathObj.region) {
            paramString = '?region='+pathObj.region;
            if (null!==pathObj.province&&''!==pathObj.province) {
                paramString = paramString+'&province='+pathObj.province;
            }
            if (null!==pathObj.towncity&&''!==pathObj.towncity) {
                paramString = paramString+'&'+tcKey+'='+pathObj.towncity;
            }
        }
        return paramString;
    }

    return {
        parse:(path)=>{
            return parsePath(path);
        },
        toQueryParams:(path,tcKey)=>{
            let tc = 'tc';
            let paramString = '';
            let pathObj = parsePath(path);
            if (undefined!==tcKey) tc = tcKey;
            return joinPathObject(pathObj,tc);
        },
        joinPathObject:(pathObj,tcKey)=>{
            return joinPathObject(pathObj,tcKey);
        }
    }
});
