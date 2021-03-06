SupportAppendUniqueMessages = function(parentObject, messagesHtml) 
{
    var messages = jQuery(messagesHtml);
    var uniqueMessages = [];
    
    messages.each(function(){
        var el = jQuery(this);
        var id = el.attr('id');
        if (!parentObject.find('#'+id).length) {
            uniqueMessages.push(el);
        }
    });
    
    if (uniqueMessages.length > 0) {
        parentObject.append(uniqueMessages);
    }
};

SupportScrollBottom = function(parentObject) 
{
    parentObject.animate({ scrollTop: parentObject[0].scrollHeight}, 1000);
};

jQuery(document).ready(function(){
    jQuery('body').append( jQuery('<div id="site-chat-container"></div>') );
    jQuery.get( "./support/live-chat/ajax/init?ping=1", function( data ) {
        if (data.result) {
            jQuery('#site-chat-container').html( data.result );
        }           
    });    
});