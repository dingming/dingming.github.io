function myage()
{
    var brithday = new Date(1980,11,16);
    //var today = new Date(2011,1,1);
        var today = new Date();
    var yearold = today.getFullYear()-brithday.getFullYear();
    var monthold = today.getMonth() - brithday.getMonth();
    //    if (today.getMonth()==0){
    //       	var monthold = 12-brithday.getMonth();
    //    }else{
    //	var monthold = today.getMonth() - brithday.getMonth()+1;
    //    }
    var dateold = today.getDate()-brithday.getDate();
    if(monthold >= 0){
	document.write(yearold);
    }else if(monthold == -1){
	if(dateold > 0) {
	    document.write(yearold);
	}else{
	    document.write(yearold-1);
	}
    }else{
	document.write(yearold-1);
    }
//     document.write(', '+yearold);
//     document.write(', '+monthold);
//     document.write(', '+dateold);
//    document.write(', '+brithday.getMonth());
}

function showphoto()
{
    tran = 0.0;
    DivPhoto=document.getElementById('myphoto');
    DivPhoto.style.opacity=tran;
    DivPhoto.style.visibility='visible';
    setTimeout(inphoto,5);

    function inphoto(){
 	DivPhoto.style.opacity=tran;
	DivPhoto.style.filter='alpha(opacity='+(100*tran)+')';
 	if (tran<1){
 	    tran +=  0.01;
 	    setTimeout(inphoto,5);
 	}
    }
}

function hidephoto()
{
/*
    tran = 1.0;
    DivPhoto=document.getElementById('myphoto');
    // DivPhoto.style.visibility='hidden';
    DivPhoto.style.opacity=tran;
    setTimeout(outphoto,50);

    function outphoto(){
 	DivPhoto.style.opacity=tran;
	DivPhoto.style.filter='alpha(opacity='+(100*tran)+')';
 	if (tran>0){
 	    tran -=  0.01;
 	    setTimeout(outphoto,50);
 	}else{
	    DivPhoto.style.visibility='hidden';
	}
    }
*/
}