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


@Component({
    selector : "app-root",
    template : `
        <div>
            <h1>Title is {{ title }}</h1>
        </div>
    `
})
class FirstComponent{
    title = "CBRE hyderabad";
}