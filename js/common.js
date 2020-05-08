$(function() {

	// INIT

	faq();


	// 
	
	function faq() {
		$(".faq dl dt a").on("click", function() {
			if($(this).parent().next().css("display") == "none") {
				$(".faq dl dt a").removeClass('on');
				$(".faq dl dd").slideUp(150);
				$(this).addClass('on');
				$(this).parent().next().slideDown(150);
			} else {
				$(".faq dl dt a").removeClass('on');
				$(this).parent().next().slideUp(150);
			}
		});
	}

	// 인증번호 받기

	$('#f_receive_submit').on('click', function() {

		var phone_01 = $("#phone_01").val();
		var phone_02 = $("#phone_02").val();
		var phone_03 = $("#phone_03").val();

		if( !$.trim( phone_02 ) ) {
			alert( "휴대폰번호 중간 자리를 정확하게 입력해주세요." );
			$("#phone_02").focus();
			return;
		} else if( !$.trim( phone_03 ) || phone_03.length < 4 ) {
			alert( "휴대폰번호 마지막 자리를 정확하게 입력해주세요." );
			$("#phone_03").focus();
			return;
		} else {
			openLayer('popup');
		}

	});

	// 본인인증

	$('#f_insert_submit').on('click', function() {

		if(!$.trim($('#f_num').val())) {
			alert('인증번호를 입력해주세요.');
			$("#f_num").focus();
			return;
		} else {
			openLayer('popup_02');
		}

	});

	// 약관동의

	$('#f_consent_submit').on('click', function() {

		if( !$("#s01").is(":checked") ) {
			alert( "개인정보 수집 및 이용에 대한 동의에 체크해주세요." );
			$("#s01").focus();
			return;
		/* } else if( !$("#s02").is(":checked") ) {
			alert( "개인정보 제3자 제공 동의에 체크해주세요." );
			$("#s02").focus();
			return; */
		} else { 
			openLayer('popup');
		}

	});

});

// Element ID 불러쓰기

function dEI(elementID) {
	return document.getElementById(elementID);
}

// 레이어 팝업 열기

function openLayer(IdName) {
	var pop = dEI(IdName);
	pop.style.display = "block";

	var wrap = dEI("wrap");
	var reservation = document.createElement("div");
	reservation.setAttribute("id", "deemed");
	wrap.appendChild(reservation);
	$('#deemed').css("height", $(document).height());
}

// 레이어 팝업 닫기

function closeLayer(IdName) {
	var pop = dEI(IdName);
	pop.style.display = "none";
	var clearEl = parent.dEI("deemed");
	var momEl = parent.dEI("wrap");
	momEl.removeChild(clearEl);
}