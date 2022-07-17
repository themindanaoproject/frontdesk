app.service('UtilSvc',()=>{
    return {
        text: {
            clean:(text)=>{
                if (undefined!==text&&null!==text) {
                    let items = text.split('_');
                    return items.join(' ');
                }
                return '';
            }
        }
    }
});
