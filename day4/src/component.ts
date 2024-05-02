let Component = function(config:any){
    return function(TargetClass:any){
        let tc = new TargetClass()
        return class {
            template = config.template;
            selector = config.selector;
            title = tc.title;
        }
    }
};

export default Component;