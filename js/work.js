$('.projectDescription').each(function(index, element) {
    $clamp(element, { clamp: 5, useNativeClamp: true });
});

$('#soleGallery').click(function(){
    SimpleLightbox.open({
        items: ['/resources/projects/sole/sole1.png', '/resources/projects/sole/sole2.png', '/resources/projects/sole/sole3.png', '/resources/projects/sole/sole4.png']
    });
})

$('#phoenixGallery').click(function(){
    SimpleLightbox.open({
        items: ['/resources/projects/phoenix/phoenix1.png', '/resources/projects/phoenix/phoenix2.png']
    });
})