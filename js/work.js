function collapse(element, lines) {
    var hola = element.currentTarget.previousElementSibling
    $clamp(hola, { clamp: lines, useNativeClamp: true });
}

$('.projectDescription').each(function(index, element) {
    $clamp(element, { clamp: 5, useNativeClamp: true });
});

// Read more
$('.readMore').click(function(target) {
    collapse(target, 15);
});



// Galleries
$('#soleGallery').click(function() {
    SimpleLightbox.open({
        items: ['/resources/projects/sole/sole1.png', '/resources/projects/sole/sole2.png', '/resources/projects/sole/sole3.png', '/resources/projects/sole/sole4.png']
    });
})

$('#phoenixGallery').click(function() {
    SimpleLightbox.open({
        items: ['/resources/projects/phoenix/phoenix4.jpg', '/resources/projects/phoenix/phoenix6.jpg', '/resources/projects/phoenix/phoenix5.jpg', '/resources/projects/phoenix/phoenix1.jpg', '/resources/projects/phoenix/phoenix2.jpg', '/resources/projects/phoenix/phoenix3.jpg']
    });
})

$('#wpGallery').click(function() {
    SimpleLightbox.open({
        items: ['/resources/projects/myWallapop1/myWallapop1_login.png']
    });
})

$('#wp2Gallery').click(function() {
    SimpleLightbox.open({
        items: ['/resources/projects/myWallapop2/myWallapop2_login.png']
    });
})