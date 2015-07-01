export class TeamsService {
	teams: Array<string>;
  
  	constructor() {
		this.teams = ['Pierre Roger', 'Michel Pascal', 'Olivier Andre'];
	}

	getTeams() {
		return this.teams;
	}
}
