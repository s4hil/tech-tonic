var BASE_URL = "http://localhost/code-arena-api/";

var SAVE_DATA = BASE_URL+"saveData.php";
var UPLOAD_DIR = BASE_URL+"uploads/";
var QR_URL = BASE_URL+"getQR.php";

var GET_SUBMISSIONS_URL = BASE_URL+"getData.php";
var DEL_SUBMISSION_URL = BASE_URL+"delSubmission.php";
var GET_ALL_PARTICIPANTS = BASE_URL+"getAllParticipants.php";
var GET_ALL_TEAMS = BASE_URL+"getAllTeams.php";

var GET_SLOT_DATA = BASE_URL+"getSlotStats.php";

var team_sizes = [
	{ "name": "Code Arena", "size": 4 },
	{ "name": "Idea X", "size": 3 },
	{ "name": "Codify", "size": 1 },
	{ "name": "Trivia Quiz", "size": 3 },
	{ "name": "Startup Expo", "size": 4 },
	{ "name": "PerSpecta", "size": 3 },
	{ "name": "Gaming (BGMI)", "size": 4 },
	{ "name": "Gaming (FreeFire)", "size": 4 },
	{ "name": "Artify", "size": 1 },
	{ "name": "Vision Xpo", "size": 4 },
	{ "name": "Robo Rally", "size": 3 },
	{ "name": "Trade Rave", "size": 1 }
]