$('#nav').on({
    'mousewheel': function(e) {
        if (e.target.id == 'el') return;
        e.preventDefault();
        e.stopPropagation();
    }
})
