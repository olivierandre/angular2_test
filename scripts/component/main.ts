import { Component, View, NgIf, NgFor } from 'angular2/angular2';
import { TeamsService as Teams } from 'services/TeamsService';

@Component({
    selector: 'main',
    properties: ['title']
})

@View({
    templateUrl: '../views/main.html',
    directives: [NgIf, NgFor]
})

// Component controller
export class Main {
    teams: Array<string>;
    visible: Boolean;
  
    constructor(teamsFacade: Teams) {
        this.teams = teamsFacade.getTeams();
        this.visible = true;
    }

    click() {
        this.visible = !this.visible;;
    }

    showName(name) {
        console.log(name);
    }
}
