var scoreboard = {
	players: [{
		name: '',
		character: {
			name: '',
			icon: ''
		},
		sponsor: {
			name: '',
			icon: ''
		},
		score: 0,
		flag: {
			name: '',
			icon: ''
		}
	}, {
		name: '',
		character: {
			name: '',
			icon: ''
		},
		sponsor: {
			name: '',
			icon: ''
		},
		score: 0,
		flag: {
			name: '',
			icon: ''
		}
	}],
	round: '',
	tournamentName: '',
	caster: '',
	streamer: ''
}

exports.getScoreboard = function (req, res) {
	res.json(scoreboard);
}

exports.updateScoreboard = function (req, res) {
    scoreboard = req.body;
	res.send(scoreboard);
}
