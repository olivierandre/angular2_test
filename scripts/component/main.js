if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var TeamsService_1 = require('services/TeamsService');
var Main = (function () {
    function Main(teamsFacade) {
        this.teams = teamsFacade.getTeams();
        this.visible = true;
    }
    Main.prototype.click = function () {
        this.visible = !this.visible;
        ;
    };
    Main.prototype.showName = function (name) {
        console.log(name);
    };
    Main = __decorate([
        angular2_1.Component({
            selector: 'main',
            properties: ['title']
        }),
        angular2_1.View({
            templateUrl: '../views/main.html',
            directives: [angular2_1.NgIf, angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [TeamsService_1.TeamsService])
    ], Main);
    return Main;
})();
exports.Main = Main;
