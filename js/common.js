var flag=0
var defaultTxt = "Write a Question and share it with the community" ;
var ht;
$(document).ready(function(){
	$('.deleteAnnouncement').bind('click',function(){		
		$('.confirmationDelete').show();
		$('.overlay').show();	
		$(this).addClass('rowToDelete')	
		//$(this).parent().parent().remove();
	});
	
	$('#yesDelete').bind('click',function(){
		$('.confirmationDelete').hide();
		$('.overlay').hide();
		$('.rowToDelete').parent().parent().remove();
	});
	$('#no').bind('click',function(){
		$('.confirmationDelete').hide();
		$('.overlay').hide();
		$('.rowToDelete').removeClass('rowToDelete')
		//$('.rowToDelete').parent().parent().remove();
	});
	
	$('.markFeatured').bind('click',function(){
		//$(this).text()
		var txt= $.trim('<img src="images/tick.gif">mark as featured');
		if($.trim($(this).html())=='<img src="images/tick.gif">mark as featured')
		{
				
		$(this).parent().parent().parent().addClass('featuredAnswer ');
		$(this).html('<img src="images/tick.gif"/>unmark as featured');
		}
		else
		{
			$(this).html('<img src="images/tick.gif"/>mark as featured');
			$(this).parent().parent().parent().removeClass('featuredAnswer ');
			
		}
	});
	
	$('.deletePost').bind('click',function(){
		$(this).parent().parent().parent().remove();
    });
	
	$('.subCommentsJS').bind('click',function(){
		$(this).parent().next().show();
		$(this).parent().next().find('.subcommentTxtBox').focus();
		$(this).parent().next().find('.subcommentTxtBox').val('');
	});
	
	$('.subcommentTxtBox').blur(function(){
		if($(this).val()=="")
		{
			$(this).val('Write a reply...');
		}
	});
	$('.commentBtn').bind('click',function(){
		$('.yourCommentTxt').focus();
	});
	//Tab functionality
	$('.tabJS').bind('click',function(){
		var tabid= $.trim($(this).attr('id'))+'.html';
	
		$('iframe').attr('src',tabid);
		$('.tabs div').removeClass('selected');
		$('.tabs div').css('background-color','#E3F1F8');
		$('.tabs').find('img').attr('src','images/tab_ns.gif')
		$(this).find('img').attr('src','images/tab_s.gif')
		$(this).addClass('selected')
		$('.homePagetabs').find('.')
	});
	
	
	$('.mainTabJS').bind('click',function(){
		var offset = $(this).offset();
		offset = offset.left+"px";		
		$('.commentArrow').css('left',offset);
			
		$('.mainTabJS').removeClass('selected')
		$(this).addClass('selected');		
		var tabid= $(this).attr('id');	
		tabid = $.trim(tabid)
		
		if(tabid=="askQuestion")
		{
			defaultTxt = "Write a Question and share it with the community"
		}
		else if(tabid=="shareIdea")
		{
			defaultTxt = "Post an Idea and share it with the community" 
		}
		else if(tabid=="reportIssue")
		{
			defaultTxt = "Report an Issue and share it with the community"
		}
		else if(tabid=="addTestimonials")
		{
			defaultTxt = "Add a Testimonial and share it with the community"
		}		
		$('.txtArea').val(defaultTxt)
	});
	
	// to view all comments
	$('.likeJS').bind('click',function(){
		$(this).next().show();	
		    if($(this).hasClass('showNext'))
			{
			   $(this).parent().find('.allComments').show();
			   $(this).remove();
			}
			$('.likeJS').html('<img src="images/viewAll.jpg"  />View Previous Comments' );
			$(this).parent().find('.commentBlockJS').show();
			$(this).addClass('showNext')
			//flag=1;
		
			
			//flag=0;
					
		
	});	
	
	//on click of post button post button
	$('.postButton').bind('click',function(){
		//var txt = $.trim(" Write a Question and share it with the community");
		var textVal = $.trim($('.txtArea').val());
		if(defaultTxt != textVal && textVal!="" )
		{
			$(this).val('Searching..');
			$('.searchResultsBlock').slideDown();
			$(this).fadeOut();
		}
		if( textVal == "")
		{
			$('.txtArea').val(defaultTxt);
		}
	});
	
	$('.postQuestion').bind('click',function(){
		$('.questionDialog').show();
		$('.overlay').show();
		var textVal = $.trim($('.txtArea').val());
		$('.txtArea_d').val(textVal);
		$('.titleBox').focus();  
	});	
	
	$('.txtArea').focus(function(){
		//var txt = $.trim(" Write a Question and share it with the community");
		var textVal = $.trim($('.txtArea').val());
		var empty = "";
		
		if(textVal == defaultTxt)
		{
			$('.txtArea').val(empty);
		}		
	});
	$('.txtArea').blur(function(){
		//var txt = $.trim(" Write a Question and share it with the community");
		var textVal = $.trim($('.txtArea').val());
		if(textVal == '')
		{
			$('.txtArea').val(defaultTxt)
		}
	});
	$('.cancelBtn,.startOver').bind('click',function(){
		//var txt=" Write a Question and share it with the community";
		$('.searchResultsBlock, .questionDialog, .overlay').hide();
		$('.postButton').show();
		$('.postButton').val('share');
		$('.txtArea').val(defaultTxt);
		$('.txtArea').focus();
	});
	
	$('.postbtn').bind('click',function(){
		if($('.titleBox').val()=='')
		{
			$('.questionDialog').find('.errorMsg').show();
		}
		else
		{
			//var txt=" Write a Question and share it with the community";
			$('.searchResultsBlock, .questionDialog').hide();
			$('.postButton').show();
			$('.postButton').val('share');
			$('.txtArea').val(defaultTxt);
		}
	});	
	
	$('.detailsJS').bind('click',function(){
		
		$.ajax({
		  url: 'postDetails.html',
		  dataType: 'html',  		  
		  success: function(data) {			 
			$('.questionDetails').html(data);			
			$('.questionDetails').show();
			$('.overlay').show();			
		  }		  
		});
	});	
	
	$(".questionDetails").ajaxError(function() {		
	  $(this).text( "Triggered ajaxError handler." );
	});
	
	$('.closeDetails').bind('click',function(){
		$('.questionDetails').hide();
		$('.overlay').hide();
	});		
	
	$('.mainCommentOption').bind('click',function(){
		
		$(this).parent().parent().find('.mainReplyTxt').focus()
		$(this).parent().parent().find('.mainReplyTxt').val("")
		//$('.mainRemplyTxt').focus();
	});
	
	$('.mainReplyTxt').blur(function(){
		if($(this).val()=="")
		{
			$(this).val("Write reply..")
		}
	});
	$('.mainReplyTxt').focus(function(){		
			$(this).val("");		
	});
	$('.subcommentTxtBox').focus(function(){		
			$(this).val("");		
	});
	
	$(':radio').bind('click',function(){
		var radioOption =  $(this).attr('id');		
		$('.internal').hide();
		$('.external').hide();
		$('.'+radioOption).show();
	});
	
	$('.customerCat').find(':radio').bind('click',function(){		
		$('.productCat').show();
	});
	$('.productCatOptions').bind('change',function(){		
		$('.brandCat').show();
	});
	$('.brandCat').find(':radio').bind('click',function(){		
		$('.series').show();
	});
	$('.seriesOption').bind('change',function(){		
		$('.model').show();
	});
	$('.searchProduct').bind('click',function(){
		if($('#searchProduct').val()!="")
		{
			$('.customerCat').hide();
			$('.productCat').hide();
			$('.brandCat').hide();
			$('.series').hide();
			$('.model').hide();
			$('.searchResults').show();
		}
	});
	
	$('.reset').bind('click',function(){
	
		$('.searchResults').hide();
		//$('.customerCat').hide();
			$('.productCat').hide();
			$('.brandCat').hide();
			$('.series').hide();
			$('.model').hide();
			$('.customerCat').show();
		$('#searchProduct').val('');
    });
	
	$('#titleTxt, #urlTxt').blur(function(){
		var titleTxt = $('#titleTxt').val();
		var urlTxt = $('#urlTxt').val();
		if(titleTxt !="" && urlTxt!= "")
		{
			$('#saveInternalLinks').attr('disabled','false');
			$('#saveInternalLinks').removeClass('disabled');
		}
		else
		{
			$('#saveInternalLinks').attr('disabled','true');
			$('#saveInternalLinks').addClass('disabled');
		}
	});
	
	$('#reset').bind('click',function(){
		 $('#titleTxt, #urlTxt').val('');	
		 $('#saveInternalLinks').attr('disabled','true');
		 $('#saveInternalLinks').addClass('disabled');
	})
	
	$('#saveFeaturedProduct').bind('click', function(){
		
		if($('.fp').size()==5)
		{
			$('.errorDiv').show();
		}
	});
	$('#ok').bind('click',function(){
		$('.errorDiv').hide();
	});
	
	$('.publishAnnouncement').bind('click',function(){	
	  
			$(this).addClass('current');					
			
			if($(this).hasClass('unpublish'))
			{
				$('.confirmationDiv').find('p').html('Do you want to unpublish Announcement?')
			}
			else
			{
				$('.confirmationDiv').find('p').html('Do you want to publish Announcement?')
			}
			$('.overlay').show();
			$('.confirmationDiv').show();
	});
	
	$('#yes').bind('click',function(){
		if($('.current').hasClass('unpublish'))
		{
			$('.current').html('Publish');
			$('.current').removeClass('unpublish')
		}
		else
		{
			$('.current').html('Unpublish');
			$('.current').addClass('unpublish')
		}
		$('.current').removeClass('current');
		$('.confirmationDiv').hide();
		$('.overlay').hide();
	});
	$('#cancel').bind('click',function(){		
		$('.current').removeClass('current');
		$('.confirmationDiv').hide();
		$('.overlay').hide();
	});
	
	$('.productName').bind('mouseover',function(){
		var productImagePath ='images/'+ $(this).attr('id')+'.jpg';
		$(this).addClass('selected')		
		$('#productImg').attr('src',productImagePath)
	});
	$('.productName').bind('mouseout',function(){
		var productImagePath ='images/'+ $(this).attr('id')+'.jpg';
		$(this).removeClass('selected')		
		$('#productImg').attr('src',productImagePath)
	});
	
	$('.productCommentBtn').bind('click',function(){
      $('.productComments').show();	
	  $('.productCommentTxt').focus();
	  $('.productCommentTxt').val('')		
	});
	 $('.productCommentTxt').blur(function(){		 
		 var defaultTxt = "Write about the product.." 
		 if($('.productCommentTxt').val()=='')
		 {
			$('.productCommentTxt').val(defaultTxt); 
		 }
	});
	$('.productCommentTxt').focus(function(){		 
		
			$('.productCommentTxt').val(''); 
		 
	});
	$('.productImg').bind('click',function(){
		$('.productImg').find('p').removeClass('selected');
		$(this).find('p').addClass('selected')
	});
	
	var catDescriptionHt= $('.catDescription').height();
	//alert(catDescriptionHt)
	$('.categoryProduct').css('height',catDescriptionHt);
	
});



 /*$(window).load(function(){	
	if(typeof(ht)!='undefined')
	{	
	 $('.homePagetabs').attr('height',"1038px")	;
	}
});*/