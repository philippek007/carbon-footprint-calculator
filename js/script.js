$(document).ready(function() {
	$("#calculate-btn").on("click", function() {
		// $("#form").hide();
		var electricInput = document.getElementById("electric").value;
		var gasInput = document.getElementById("gas").value;
		var oilInput = document.getElementById("oil").value;
		var carInput = document.getElementById("car").value;
		var flights4LessInput = document.getElementById("flights-4-less").value;
		var flights4MoreInput = document.getElementById("flights-4-more").value;
		var newspaperScore = "";
		var alumTinScore = "";

		var electricScore = "";
		var gasScore = "";
		var oilScore = "";
		var carScore = "";

		if (document.getElementById("optionsRadio1").checked) {
			newspaperScore = 0;
		} else {
			newspaperScore = 184;
		}

		if (document.getElementById("optionsRadio3").checked) {
			alumTinScore = 0;
		} else {
			alumTinScore = 166;
		}

		if (electricInput === 0 || electricInput === "undefined") {
			electricScore = 0;
		} else {
			electricScore = electricInput * 105;
		}

		if (gasInput === 0 || gasInput === "undefined") {
			gasScore = 0;
		} else {
			gasScore = gasInput * 105;
		}

		if (oilInput === 0 || oilInput === "undefined") {
			oilScore = 0;
		} else {
			oilScore = oilInput * 113;
		}

		// console.log(newspaperScore, alumTinScore);
		// console.log(electric, gas, oil);
		// console.log(electricScore);
	});
	
});