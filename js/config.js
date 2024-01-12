var BASE_URL = "https://test.florentinafashion.com/code-arena-api/";

var SAVE_DATA = BASE_URL+"saveData.php";
var UPLOAD_DIR = BASE_URL+"uploads/";
var QR_URL = BASE_URL+"getQR.php";

var GET_SUBMISSIONS_URL = BASE_URL+"getData.php";
var DEL_SUBMISSION_URL = BASE_URL+"delSubmission.php";
var GET_ALL_PARTICIPANTS = "http://localhost/code-arena-api/getAllParticipants.php";
var GET_ALL_TEAMS = "http://localhost/code-arena-api/getAllTeams.php";


var team_sizes = [
	{ "name": "Code Arena", "size": 4 },
	{ "name": "Idea X", "size": 3 },
	{ "name": "CodifyFix", "size": 2 },
	{ "name": "Trivia Quizzix", "size": 3 },
	{ "name": "Startup Expo", "size": 4 },
	{ "name": "PerSpecta", "size": 3 },
	{ "name": "Gaming", "size": 4 },
	{ "name": "Artify", "size": 1 },
	{ "name": "Vision Xpo", "size": 4 },
	{ "name": "Robo Race", "size": 3 },
	{ "name": "Trading", "size": 1 }
]