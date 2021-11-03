/* 
	Add Simple Download button for tiktok
	================================================
	FreeAngel
    my youtube channel : https://www.youtube.com/channel/UCqRqvw9n7Lrh79x3dRDOkDg
*/
function CreateBtn(a,src){

	var dataID = a.getAttribute("data-id");
	if(dataID === "1") { 
		return; 
	}
	
	a.setAttribute("data-id","1");
	
	var btn = document.createElement('div');
	//btn.innerHTML = "<br /><a href='"+src+"' target='_blank' class='e1v1ai9g0 tiktok-jcprrh-Button-StyledFollowButton ehk74z00'>&nbsp; Video &nbsp;</a>";
	btn.innerHTML = "<br /><a href='"+src+"' target='_blank' class=''>&nbsp; <button>Video</button> &nbsp;</a>";
	a.parentNode.insertBefore(btn,a.nextSibling);
}

function InjectButton(){
	
	var vids = document.getElementsByTagName("video");
	if((!vids) || (vids.length < 1)) { 
		console.log("No Video found");
		return; 
	}
	
	var vid;
	var src;
	var dataId = 0;
	
	for(var i=0; i<vids.length; i++){
		
		dataId = vids[i].getAttribute("data-id");
		if(dataId === "1") { 
			continue; 
		}
		
		vids[i].setAttribute("data-id","1");
		src = vids[i].getAttribute('src');
		if(!src) { continue; }
	
		if(src.indexOf("tiktokcdn.com") === -1) { 
			continue; 
		}

		CreateBtn(vids[i].parentElement.parentElement.parentElement.parentElement.parentElement,src);
	}
}

	var CheckInterval = setInterval(function() {
	
		if (document.readyState === "complete"){

			InjectButton();
		}
		
	}, 3000);
	
