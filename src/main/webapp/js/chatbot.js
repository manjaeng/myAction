document.write('<div id="layMessenger" class="layer_messenger">');
document.write('	<div class="tit">파이언넷 도우미</div>');
document.write('	<div class="lay_msg_cont">');
document.write('		<div class="talk_introduce">');
document.write('			<div class="sbox">');
document.write('				<strong>저는 파이언넷의 첫번째 AI인 PX-001호 입니다.</strong>');
document.write('				<span>아직 많은 내용이 학습되진 않았지만,</span>');
document.write('				<span>점점 진화할 것입니다.</span>');
document.write('			</div>');
document.write('		</div>');
document.write('		<ul></ul>');
document.write('	</div>');
document.write('	<div class="box_input">');
document.write('		<input type="text" value="" placeholder="메시지를 입력하세요">');
document.write('		<button type="button">입력</button>');
document.write('	</div>');
document.write('	<button type="button" class="btn_msg_close" onclick="closeMessenger();"><span>메신저 닫기</span></a>');
document.write('</div>');

/* 20170317_수정 */
function openMessenger(){
	var wid = reSizeWidth();
	var rightGap = (wid<=640) ? 0 : 30;
	var $messenger = $('#layMessenger');
	var $fixed_msg = $('.fixed_msg');
	$fixed_msg.hide();
	$messenger.stop().show().animate({opacity:1 , right:rightGap},250);
	$messenger.find('input[type="text"]').focus();
	return false;
}

function closeMessenger(){
	$('.fixed_msg').show();
	$('#layMessenger').stop().animate({opacity:0 , right:-100+'px'},250,function(){$(this).hide()});
	return false;
}

function reSizeWidth() {
	var bodyWid = $('body').width();
	return bodyWid;
}

function reSizeMessenger(bodyWid) {
	var $messenger = $('#layMessenger');
	if($messenger.is(':visible')) {
	var rightGap = (bodyWid<=640) ? 0 : 30;
	$messenger.css({right:rightGap});
	return false;
	}
}

$(window).on('resize',function() {
	var bodyWid = reSizeWidth();
	reSizeMessenger(bodyWid);
});

Date.prototype.format = function(f) {
	if (!this.valueOf()) return " ";
 
	var weekName = ["일", "월", "화", "수", "목", "금", "토"];
	var d = this;

	return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function(jQuery1) {
		switch (jQuery1) {
			case "yyyy": return d.getFullYear();
			case "yy": return (d.getFullYear() % 1000).zf(2);
			case "MM": return (d.getMonth() + 1);//.zf(2);
			case "dd": return d.getDate();//.zf(2);
			case "E": return weekName[d.getDay()];
			case "HH": return d.getHours().zf(2);
			case "hh": return ((h = d.getHours() % 12) ? h : 12);//.zf(2);
			case "mm": return d.getMinutes().zf(2);
			case "ss": return d.getSeconds().zf(2);
			case "a/p": return d.getHours() < 12 ? "오전" : "오후";
			default: return jQuery1;
		}
	});
};
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return '0'.string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

Chatbot = function(){
	
	/* ************************************************************
	   Variables
	 ************************************************************ */
	var memType = {
		admin: { clazz: 'admin', label: '관리자' },
		guest: { clazz: 'guest', label: '질문자' }
	};
	
	var msgType = {
		welcome: [
			'반갑습니다.',
			'"파이언넷" 입니다.',
			'무엇이든 말씀해주시면 친절히 답변 드리겠습니다.'
		],
		sorry: [
			'고객님 죄송합니다.',
			'질문하신 내용에 대한 답변을 찾을 수 없습니다.'
		]
	};
	
	/*
	var msgFilter = new RegExp([
		'\\?',
		'\\!'
	].join("|"),"gi");
	*/
	var msgFilter = /[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9)]/gi; 
	
	var idFormat = 'yy_MM_dd';		//날짜ID 포맷
	var dateFormat = 'MM.dd (E)';	//날짜 포맷
	var timeFormat = 'a/p hh:mm';	//시간 포맷
	
	var elMsgCont, elMsgList, elInput, elButton;

	/* ************************************************************
	   Private Functions
	 ************************************************************ */
	fnGetUrl = function(path){
		return 'http://10.74.105.71:8080/searchAPI' + path;
		// TODO 외부 URL
	};
	
	fnUpdateUI = function(type, msg){
		var date = new Date();
		var idText = date.format(idFormat);
		var dateText = date.format(dateFormat);
		var timeText = date.format(timeFormat);
		
		/*
		 * 날짜 구분자가 필요한 경우 사용됨
		 *
		if (!elMsgList.find('#' + idText).length){
			elMsgList.append([
				'<li id="', idText, '">', dateText, '</li>'
			].join(''));
		}
		*/
		
		elMsgList.append([
			'<li class="', type.clazz, '">',
				'<span class="id">', type.label, '</span>',
				'<div class="cont">',
					'<div class="s_cont">',
						msg,
						'<div class="wr_time">', timeText, '</div>',
					'</div>',
				'</div>',
			'</li>'
		].join(''));
		elMsgCont.animate({ scrollTop: elMsgCont[0].scrollHeight }, 250);
	};
	
	fnHtmlEncode = function(str){
		return jQuery('<div/>').text(str).html();
	};
	
	fnHtmlDecode = function(str){
		return jQuery('<div/>').html(str).text();
	};

	/* ************************************************************
	   Public Functions
	 ************************************************************ */
	fnInit = function(){
		var elLayout = jQuery('#layMessenger');
		elMsgCont = elLayout.find('.lay_msg_cont');
		elMsgList = elLayout.find('ul');
		elButton = elLayout.find('.box_input button');
		elInput = elLayout.find('.box_input input');
		
		elInput.val();
		elMsgList.empty();
			
		elButton.on('click', function(){
			var msg = jQuery.trim(fnHtmlEncode(elInput.val()));			
			if (msg.length > 0){
				elInput.val('');
				fnUpdateUI(memType.guest, msg);
				fnInquiry(msg);				
			}
		});
		
		elInput.on('keypress', function(evt){
			if (evt.keyCode == 13){
				elButton.trigger('click');
			}
		});
		
		fnUpdateUI(memType.admin, msgType.welcome.join('<br/>'));
	};
	
	fnInquiry = function(msg){
		var ajax = jQuery.ajax({
			url: fnGetUrl('/rest/chatbot/requestMsg'),
			data: {
				kwd: msg.replace(msgFilter, ' ').replace(/^\s+|\s{2,}/g, ' '),
				callback: 'fnChatbotResult'
			},
			dataType: 'jsonp',
			jsonpCallback: 'fnChatbotResult',
		}).done(function(data){		
			if (data && data.answer){
				fnUpdateUI(memType.admin, data.answer.replace(/\n/g, "<br />"));
			} else {
				fnUpdateUI(memType.admin, msgType.sorry.join('<br/>'));
			}
		});
	};
	
	return {
		'init': fnInit,
		'inquiry': fnInquiry
	};
}();

Chatbot.init();