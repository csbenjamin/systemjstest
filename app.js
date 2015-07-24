System.register([], function($__export) {
    "use strict";
    var loaded,
        count;
    function recursive(){
        count++;
        if(!loaded){
            setTimeout(function(){
                System.import("module1/index"+count).then(function(module){
                    console.log('module loaded', module.default);
                    recursive();
                });
            },0);
        }

    }
    $__export("default", "app");
    return {
        setters: [],
        execute: function() {
            loaded = false;
            count = 0;
            recursive();
            setTimeout(function(){
                System.import("module2/index").then(function(module){
                    loaded = true;
                    console.log('module loaded', module);
                }, function(){
                    loaded = true;
                    console.log('failed to load module2');
                });
            },500);
        }
    };
});
