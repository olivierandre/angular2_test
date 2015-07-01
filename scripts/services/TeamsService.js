var TeamsService = (function () {
    function TeamsService() {
        this.teams = ['Pierre Roger', 'Michel Pascal', 'Olivier Andre'];
    }
    TeamsService.prototype.getTeams = function () {
        return this.teams;
    };
    return TeamsService;
})();
exports.TeamsService = TeamsService;
