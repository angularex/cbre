let Component = function (config) {
    return function (TargetClass) {
        let tc = new TargetClass();
        return class {
            constructor() {
                this.template = config.template;
                this.selector = config.selector;
                this.title = tc.title;
            }
        };
    };
};
export default Component;
