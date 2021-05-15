/* 
	Add Simple Download button for tiktok
	================================================
	FreeAngel
    my youtube channel : http://www.youtube.com/channel/UC15iFd0nlfG_tEBrt6Qz1NQ
*/
function CreateBtn(a,src){

	var btn = document.createElement('div');
	btn.innerHTML = "<br /><a href='"+src+"' target='_blank' class='follow-button tiktok-btn-pc-line'>&nbsp; Video &nbsp;</a>";
	a.parentNode.insertBefore(btn,a.nextSibling);
}

function InjectButton(){
	
	var vids = document.querySelectorAll('a.item-video-card-wrapper');
	if((!vids) || (vids.length < 1)) { 
		console.log("No Video found");
		return; 
	}
	
	var vid;
	var src;
	
	for(var i=0; i<vids.length; i++){
		
		dataId = vids[i].getAttribute("data-id");
		if(dataId == "true") { continue; }
		
		vid = vids[i].getElementsByTagName('video');
		if((!vid) || (vid.length < 1)) { continue; }
		src = vid[0].getAttribute('src');
		if(!src) { continue; }

		CreateBtn(vids[i],src);
		vids[i].setAttribute("data-id","true");
	}
}

	var CheckInterval = setInterval(function() {
	
		if (document.readyState === "complete"){

			InjectButton();
		}
		
	}, 3000);
	
