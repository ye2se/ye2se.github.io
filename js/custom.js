$(function () {
    const tl = gsap.timeline();

    tl
        .from('.intro .inner .tit .line ', { x: 100, opacity: 0, duration: 3, })

    $('#content').fullpage({
        anchors: ['intro', 'pf01', 'pf02', 'pf03', 'pf04', 'pf05', 'tranning', 'about'],
        onLeave: function (idx, nidx, dir) {
            console.log(idx, nidx, dir);
            $('#header .hd_r .gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            $('.section').eq(nidx - 1).addClass('on').siblings().removeClass('on');

            if (nidx == -1) {
                tl.restart();
            }

            $('.number').text(nidx - 1)
        },
        responsiveWidth: 768,
    });


    $('#header .menu').on('click', function () {
        $(this).toggleClass('on');
        $('#header .cover').toggleClass('on');
    });


    $('#header .cover a').on('click', function () {
        $('#header .cover').removeClass('on');
        $('#header .menu').removeClass('on');
    });


    $('#header .cover').on('wheel', function (e) {
        e.stopPropagation();
    });

    $('#header .mopen').on('click', function () {
        $(this).toggleClass('on');
        $('#header .gnb').toggleClass('on');
    });

    $('#header .gnb a').on('click', function () {
        $('#header .gnb').toggleClass('on');
        $('#header .mopen').toggleClass('on');
    })
})