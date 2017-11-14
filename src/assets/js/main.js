$(function () {
    var win = $(window),
        body = $('body'),
        scrFunc = function(){
            var scrTop = win.scrollTop(),
                winH = win.height();
            if(scrTop > 0){
                body.addClass('fix-head');
            }else{
                body.removeClass('fix-head');
            }
            $('[data-anim]').each(function(i,anim){
                var offTop = $(anim).offset().top,
                    pos = scrTop + winH*.9;
                if(offTop < pos){
                    $(anim).attr('data-anim', 'true');
                }else{
                    $(anim).attr('data-anim', 'false');
                }
            });

        },
        loadFunc = function(){

            body.addClass('page-load');

            if($('.browse-top .swiper-container')){
                var swiper = new Swiper('.browse-top .swiper-container', {
                    pagination: '.peoples-wrap .swiper-pagination',
                    slidesPerView: 4,
                    centeredSlides: true,
                    paginationClickable: true,
                    spaceBetween: 10,
                    nextButton: '.browse-top .swiper-button-next',
                    prevButton: '.browse-top .swiper-button-prev'
                });
            }
            if($('.top-playlist .swiper-container')){
                var swiper = new Swiper('.top-playlist .swiper-container', {
                    slidesPerView: 3,
                    centeredSlides: true,
                    spaceBetween: 0,
                    nextButton: '.top-playlist .swiper-button-next',
                    prevButton: '.top-playlist .swiper-button-prev'
                });
            }
            if($('.wrap-playlist .swiper-container')){
                var swiper = new Swiper('.wrap-playlist .swiper-container', {
                    slidesPerView: 2,
                    centeredSlides: true,
                    spaceBetween: 0,
                    initialSlide: 1,
                    nextButton: '.wrap-playlist .swiper-button-next',
                    prevButton: '.wrap-playlist .swiper-button-prev',
                    onSlideChangeStart: function (swiper) {
                        console.log(swiper.activeIndex);
                        var src = $('#playlist .swiper-slide:eq('+swiper.activeIndex+') .img img').attr('src');
                        $('#playlist .plst-top-bg').css({
                            'background-image': 'url('+src+')'
                        });
                    }
                });
            }


        },
        resizeFunc = function(){

        };


    $(window)
        .on('load', function(){
            scrFunc();
            loadFunc();
            addImgToSoundWave();
        })
        .on('scroll', function(){
            scrFunc();
        })
        .on('resize', function(){
            resizeFunc();
        });

    // при клике "вне" плеера - делаем его маленьким
    $(document).mouseup(function (e) {
        var container = $("#player");
        if (container.has(e.target).length === 0){
            container.removeClass('big');
            $('body').removeClass('open-bigPlayer');
        }
    });

    $('body')
        .on('click','a[data-type="popup"]',function () {
            var $a = $(this),
                _el = $a.attr('href');

            $(_el).addClass('show');

            if(_el =='#searchPopup') {
                var searchInput = $('#searchInput');
                var searchValue = searchInput.val();
                var searchPopupInput = $('#searchPopupInput');

                searchPopupInput.val( searchValue );
                $( ".search-value" ).text( searchValue );

                searchPopupInput
                    .keyup(function() {
                        var searchPopupValue = searchPopupInput.val();

                        $( ".search-value" ).text( searchPopupValue )
                    })
                    .keyup();
            }

            if(_el == '#aboutPopup'){
                var swiper = new Swiper('.swiper-container.peoples-wrap', {
                    pagination: '.peoples-wrap .swiper-pagination',
                    slidesPerView: 4,
                    // width: 164,
                    paginationClickable: true,
                    // spaceBetween: 'auto'
                });
            }

            return false;
        })

        .on('click','.tulip-ico',function () {
            var $songFlexTable = $(this).parents('.wrap-playlist').siblings('.song-flex-table'),
                $songInfo = $(this).next(),
                $iconsWrap = $(this).parents('.wrap-playlist').next('.icons-wrap');

            $(this).toggleClass('active');
            $('.m-toolip').toggleClass('show');

            if ( ($songFlexTable.css('opacity') =='1') || ($songInfo.css('visibility') !=='hidden') || ($iconsWrap.css('opacity') =='1')) {
                $songFlexTable.css('opacity', '.2');
                $songInfo.css('visibility', 'hidden');
                $iconsWrap.css('opacity', '.2');
            } else {
                $songFlexTable.css('opacity', '1');
                $songInfo.css('visibility', 'visible');
                $iconsWrap.css('opacity', '1');
            }
        })

        .on('click','.notes-close',function () {
            var $notesItem = $(this).closest('.follow-one');
            $notesItem.remove();
        })


        .on('click','.nav-one[href="playlist.html"]',function () {
            isMenuPopupOpen($('#notifications'), $('#messaging'), $('#favorites'));
            $('#playlist').toggleClass('show');
            return false;
        })

        .on('click','.note-link[href="#messaging"]',function () {
            isMenuPopupOpen($('#notifications'), $('#playlist'), $('#favorites'));
            $(this).toggleClass('active');
            $('#messaging').toggleClass('show');
            return false;
        })

        .on('click','.nav-one[href="notifications.html"]',function () {
            isMenuPopupOpen($('#playlist'), $('#messaging'), $('#favorites'));
            $(this).toggleClass('active');
            $('#notifications').toggleClass('show');
            return false;
        })

        .on('click','.notifications-after, .messaging-after, .popup-close',function () {
            $('.nav-one[href="notifications.html"]').removeClass('active');
            $('.note-link[href="#messaging"]').removeClass('active');
            $('#notifications').removeClass('show');
            $('#playlist').removeClass('show');
            $('#messaging').removeClass('show');
            return false;
        })

        .on('click','.nav-one[href="favorites.html"]',function () {
            isMenuPopupOpen($('#playlist'), $('#messaging'), $('#notifications'));
            $('#favorites').toggleClass('show');
            return false;
        })

        .on('click','.favorites-after, .popup-close',function () {
            $('#favorites').removeClass('show');
            return false;
        })

        .on('click','.playlist-after',function () {
            $('#playlist').removeClass('show');
            return false;
        })
        .on('click','.popup-close,.scroll-bg',function () {
            var $pop = $(this).parents('.popup');

            $pop.removeClass('show');
            $('#searchInput').val('');
            return false;
        })
        .on('click','.btn-plus',function () {
            $('#player').toggleClass('big');
            return false;
        })

        // Edit track
        .on('click','.opt-name',function () {
            var optName = $(this),
                currentPrice = $(this).children('.price-btn').text(),
                optCheckbox = $ (this).prev('[type=checkbox]'),
                hiddenPrice = $(this).children('.hidden-price'),
                newPrice,
                priceReadyBtn= $(this).children('.price-ready-btn'),
                priceBtn = $(this).children('.price-btn');

            priceBtn.toggleClass('active');
            hiddenPrice.val(currentPrice);


            priceBtn.on('click', function(){

                if (optName.hasClass('disabled') || !optCheckbox.prop('checked') || !priceBtn.hasClass('active') ) {
                    return false;
                } else {

                    priceBtn.toggleClass('hidden');
                    priceReadyBtn.toggleClass('active');
                    hiddenPrice.toggleClass('active')
                                .val('$ ')
                                .focus();
                    return false;
                }
            })

            hiddenPrice.on('click', function (event) {
                event.preventDefault();
                return false;
            })

            hiddenPrice.keyup(function(event){
                event.preventDefault();

                $(this).bind("change keyup input", function() {

                    if (this.value.match(/[^0-9]/g)) {
                        this.value = this.value.replace(/[^0-9]/g, '');
                    }

                    if (this.value.length > 6) {
                        this.value = this.value.substr(0, 6);
                    }

                });

                newPrice = hiddenPrice.val();
                return false;

            })

            priceReadyBtn.on('click', function (event) {
                event.preventDefault();

                if(newPrice == hiddenPrice.val()){
                    priceBtn.text('$ '+newPrice);
                } else {
                    priceBtn.text(currentPrice);
                }

                hiddenPrice.toggleClass('active');
                priceReadyBtn.toggleClass('active');
                priceBtn.toggleClass('hidden');

                return false;

            })

            hiddenPrice.focusout(function(){
                if(newPrice == hiddenPrice.val()){
                    priceBtn.text('$ '+newPrice);
                } else {
                    priceBtn.text(currentPrice);
                }

                hiddenPrice.toggleClass('active');
                priceReadyBtn.toggleClass('active');
                priceBtn.toggleClass('hidden');

                return false;
            })
        })

        .on('click','.song-flex-table .action-btn.ellipses',function () {
            $(this).parents('.tr').addClass('slided-right');
            return false;
        })

        .on('click','.song-flex-table .action-btn.close',function () {
            $(this).parents('.tr').removeClass('slided-right');
            return false;
        })
        .on('mouseenter','.song-flex-table .tr .action-btn.basket',function () {
            var $btn = $(this),
                $tr = $btn.closest('.tr'),
                tmp = '<div class="popup-checkout">' +
                    '<button type="button">Film / TV Show</button>' +
                    '<button type="button">Documentary, Indie, Student Film</button>' +
                    '<button type="button">Corporate, Commercial Film</button>' +
                    '<button type="button">Internet Video</button>' +
                    '<button type="button">Websites</button>' +
                    '<button type="button">Audiobooks</button>' +
                    '<button type="button">Advertising</button>' +
                    '<button type="button">Music On Hold</button>' +
                    '</div>';
            $tr.find('.td:first').append(tmp);
            setTimeout(function () {
                $tr.addClass('show-popup');
            },0);
        })
        .on('mouseleave','.song-flex-table .tr',function () {
            var $tr = $(this);
            $tr.find('.popup-checkout').fadeOut(200, function () {
                $tr.removeClass('show-popup');
                $(this).remove();
            })
            console.log('unhover');
        })
        .on('mouseenter','.foll-show', function () {
            $(this).find('.avatar-follow').addClass('show');
            console.log('foll-show hover');
        })
        .on('mouseleave','.foll-show',function () {
            $(this).find('.avatar-follow').removeClass('show');
            console.log('avatar-follow unhover');
        })

        .on('click','.prof-notes .settings-ico',function () {
            var $th = $(this);
            $th.parent().find('.popover').toggleClass('show');
            return false;
        })

    $('#player').on('mousewheel','.player-inner, .big-block',function (ev) {
        if(ev.deltaY > 0){
            $('#player').addClass('big');
            $('body').addClass('open-bigPlayer');
        }else{
            $('#player').removeClass('big');
            $('body').removeClass('open-bigPlayer');
        }
    });

    $('#editTrackPopup')
        .on('click', '.tab-pnl-btn:not(.active)', function () {
            var tab = $(this).attr('data-tab');
            $('#editTrackPopup [data-tab]').removeClass('active');
            $('#editTrackPopup [data-tab="'+tab+'"]').addClass('active');
        })
        .on('change', '.toggleLabel input[type="checkbox"]', function () {
            var chk = $(this).prop('checked'),
                hddn = $(this).parents('.inp-block').next();
            if(hddn.hasClass('hidden-inp-block')) {
                if (chk) {
                    hddn.addClass('active');
                } else {
                    hddn.removeClass('active');
                }
            }
        });

    //Queue table
    $('.btn-queue').on('click', function () {
        $(this).toggleClass( "active" );
        $('.queue-table-wrap').toggleClass( "active" );
    });
    $('body').on('click','.queue-table-wrap tbody tr',function () {
        $('.queue-table-wrap tbody tr').removeClass('active');
        $(this).addClass('active');
    });


    $('.inner-scroll').on('scroll', function () {
        var scrl = $(this);
        if ($('.inner-scroll .tab-panel').length) {
            var $tbp = $('.inner-scroll .tab-panel'),
                $prnt = $tbp.parent(),
                top = $prnt.offset().top,
                hgt = $prnt.outerHeight(),
                main = ($('.main-top').length)?$('.main-top').outerHeight() - 10:0,
                pos = top + hgt;
            if (pos <= main) {
                if(!$tbp.hasClass('fixed')) {
                    $tbp.addClass('fixed').css('top', main);
                }
            } else {
                $tbp.removeClass('fixed').removeAttr('style');
            }
        }

        if($('.prof-top-bg').length){
            var $el = $('.prof-top-bg'),
                tp = 1+$el.offset().top/-1800,
                k = 1.3,
                scale = (tp>k)?k:tp;

            $el.css({
                '-webkit-transform':'scale('+scale+')',
                '-moz-transform':'scale('+scale+')',
                'transform':'scale('+scale+')'
            })
        }

        if(scrl.hasClass('follow-inner')){
            var scrTop = scrl.scrollTop(),
                prevTop = scrl.prev().outerHeight(),
                top = parseInt(scrl.css('padding-top')),
                bot = parseInt(scrl.css('padding-bottom')),
                hgt = scrl.height(),
                folRight = scrl.find('.foll-right'),
                folRhgt = folRight.outerHeight(),
                folRtop = prevTop - parseInt(folRight.css('top')),
                tp = -scrTop;

            if ((scrTop + hgt) > folRhgt) {
                if (hgt - folRhgt < 0) {
                    tp = hgt - folRhgt;
                } else if (tp < folRtop) {
                    tp = folRtop;
                }
            }
            folRight.css({
                'margin-top': tp
            });
        }

        if(scrl.hasClass('song-dtl-inner')){
            var scrTop = scrl.scrollTop(),
                prevTop = scrl.prev().outerHeight(),
                top = parseInt(scrl.css('padding-top')),
                bot = parseInt(scrl.css('padding-bottom')),
                hgt = scrl.height(),
                folRight = scrl.find('.song-dtl-right'),
                folRhgt = folRight.outerHeight(),
                folRtop = prevTop - parseInt(folRight.css('top')),
                tp = -scrTop;

            if ((scrTop + hgt) > folRhgt) {
                if (hgt - folRhgt < 0) {
                    tp = hgt - folRhgt;
                } else if (tp < folRtop) {
                    tp = folRtop;
                }
            }
            folRight.css({
                'margin-top': tp
            });
        }
    });

    // Pickmeup

    addEventListener('DOMContentLoaded', function () {
        pickmeup('input#birthDate', {
            position       : 'bottom',
            hide_on_select : true
        });

        pickmeup('input[data-type="datepicker"]', {
            position       : 'bottom',
            hide_on_select : true
        });

    });

    //Select2

    $('select').select2({
        minimumResultsForSearch: -1,
        dropdownCssClass: 'inp-block-dropdown',
        placeholder: function(){
            $(this).data('placeholder');
        }
    }).on('select2:open', function(){
        $(this).siblings('.select2-label').toggleClass('active');
    }).on('select2:close', function(){
        $(this).siblings('.select2-label').removeClass('active');
    });

    $('.filter-selection').select2({
        minimumResultsForSearch: -1,
        placeholder: function(){
            $(this).data('placeholder');
        }
    });


    $('.select2').on({
        mouseenter: function () {
            $(this).siblings('.select2-label').css('opacity', '.8');
        },
        mouseleave: function () {
            $(this).siblings('.select2-label').css('opacity', '.4');
        }
    });

    //Ranges
    if($('#rangeslider').length) {
        $('#rangeslider').slider({
            range: true,
            min: 0,
            max: 100,
            values: [20, 85],
            slide: function (event, ui) {
                $('#rangeval').html("$" + ui.values[0] + " - " + "$" + ui.values[1]);
            }
        });
    }

    if($('#slider-range-min').length) {
        $('#slider-range-min').slider({
            range: "min",
            value: 4.20,
            min: 0,
            max: 5,
            step: 0.01,
            slide: function (event, ui) {
                $("#amount").html(ui.value);
            }
        });
    }
    if($('#amount').length) {
        $('#amount').html($("#slider-range-min").slider('value'));
    }

    function addImgToSoundWave(){
        function appendImg() {
            var imgs = ["<img class='sound-wave-img' src='./images/peoples/4.jpg'/><div class='com-body'><a class='com-author' href='profile.html'>Petra Kongale</a><span class='com-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></div></div>",
                    "<img class='sound-wave-img' src='./images/peoples/2.jpg'/><div class='com-body'><a class='com-author' href='profile.html'>Gloria Estefan</a><span class='com-text'>Lorem ipsum</span></div></div>",
                    "<img class='sound-wave-img' src='./images/peoples/9.jpg'/><div class='com-body'><a class='com-author' href='profile.html'>David August</a><span class='com-text'>Lorem</span></div></div>",
                    "<img class='sound-wave-img' src='./images/peoples/10.jpg'/><div class='com-body'><a class='com-author' href='profile.html'>Marine Gone</a><span class='com-text'>Lorem ipsum dolor sit amet</span></div></div>",
                    "<img class='sound-wave-img' src='./images/peoples/1.jpg'/><div class='com-body'><a class='com-author' href='profile.html'>İrem Karasüleymanoğlu</a><span class='com-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></div></div>",
                    "<img class='sound-wave-img' src='./images/peoples/3.jpg'/><div class='com-body'><a class='com-author' href='profile.html'>Jade Snowland</a><span class='com-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span></div></div>",
                    "<img class='sound-wave-img' src='./images/peoples/7.jpg'/><div class='com-body'><a class='com-author' href='profile.html'>Mike Stingerborne</a><span class='com-text'>Lorem</span></div></div>"],
                imgRand = Math.floor(Math.random() * imgs.length),
                marginRand = Math.floor(Math.random() * 100),
                comments = [];

            comments.push("<div class='s-wave-com' style='margin-right: "+ marginRand +"px;'>" + imgs[imgRand]);

            $('.song-dtl-track').append(comments);
        };
        var imgNum = 7;
        for (var i = 0; i < imgNum; i++) {
            appendImg();
        }
    }

    function isMenuPopupOpen() {
        for (var i = 0; i < arguments.length; i++) {
            if(arguments[i].hasClass('show')) {
                arguments[i].removeClass('show');
            }
        }
        if($('#notifications').removeClass('show')) {
            $('.nav-one[href="notifications.html"]').removeClass('active');
        }
    }

    // Profile status

    function returnStatus(elem, status1, status2, status3){
        if( $(elem).hasClass(status1) ){
            return status1;
        } else if ( $(elem).hasClass(status2) ) {
            return status2;
        } else {
            return status3;
        }
    }

    $('[data-status="edit"]').on('click', function(event){
        event.preventDefault();

        $('.prof-status-opt').toggleClass('show');
    })


    $('[data-status="selected"]').on('click', function(event){
        event.preventDefault();

        var currentStatus = returnStatus('[data-status="current"]', 'online', 'offline', 'away');

        if( $(this).hasClass('online') ){
            $('[data-status="current"]').toggleClass(''+currentStatus+' online')
        } else if ( $(this).hasClass('offline') ) {
            $('[data-status="current"]').toggleClass(''+currentStatus+' offline')
        } else {
            $('[data-status="current"]').toggleClass(''+currentStatus+' away')
        }

        $('.prof-status-opt').removeClass('show');

    })

    //Media queries

    function burgerMenu(){
        $('.menu-nav').on('click', function(){

            $(this).toggleClass('open');
            $('.main').toggleClass('disabled');
            $('#messaging').removeClass('show');
            $('#notifications').removeClass('show');
            $('[data-item="added"]').remove();

            if($('.profile').hasClass('open')) {
                $('.profile').removeClass('open');
                $('.popover,.top').removeClass('show');

            }

            if($(this).hasClass('open')){
                $('#menu footer').css('display', 'block');
                $('#player').css('opacity', '0');
                $('#favorites').removeClass('show');
                $('#playlist').removeClass('show');
            } else  {
                $('#menu footer').css('display', 'none');
                $('#player').css('opacity', '1');
            }
        })
    }

    function addNewLi(){
        var $newLi = '<li data-item="added"><a href="#messaging" class="note-link" title="messages"><span>Messages</span></a></li>'+
                '<li data-item="added"><a href="#notifications" class="note-link" title="notifications"><span>Notifications</span></a></li>',
            $li = $('.inn-list').children('li:first-child');

        $li.after($newLi);
    }

    function openProfLinks(elem, link) {
        $(elem).on('click', function(){
            $(link).addClass('show');
            $('.profile').removeClass('open');
            $('.popover,.top').removeClass('show');
            $('.main').toggleClass('disabled');
            $('[data-item="added"]').remove();
            return false;
        })
    }

    function burgerProfile(){
        $('.profile').on('click', function(event) {
            event.preventDefault();

            $(this).toggleClass('open');
            $('.main').toggleClass('disabled');
            $('.menu-nav').removeClass('open');
            $('.popover,.top').toggleClass('show');
            $('#favorites').removeClass('show');
            $('#playlist').removeClass('show');

            addNewLi();

            if(!$(this).hasClass('open')) {
                $('[data-item="added"]').remove();
                $('#player').css('opacity', '1');

                $('.popover,.top').removeClass('show');
                $('.main').removeClass('disabled');

            } else {
                $('#player').css('opacity', '0');
            }

            openProfLinks('.note-link[href="#messaging"]', '#messaging');
            openProfLinks('.note-link[href="#notifications"]', '#notifications');
        })
    }

    // function autoReload(){
    //     var goal = self.location;
    //     location.href = goal;
    // }

    function hidePlayerBtns(){
        $('.player-queue').on('click', function () {
            $(this).toggleClass('open');


            if($(this).hasClass('open')){
                $('.play-type').css('opacity', '1');
            } else {
                $('.play-type').css('opacity', '0');
            }
        })
    }

    $(window).resize(function() {
        // window.setTimeout(autoReload(), 500);

        var $mq = window.matchMedia( "(max-width: 720px)" );

        if($mq.matches) {
            burgerMenu();
            burgerProfile();

            $('.prof-status.edit').on('click', function() {
                $('.profile').toggleClass('open');
                return false;
            })
        }

        if (window.matchMedia( "(max-width: 450px)" ).matches) {
            hidePlayerBtns();
        }

        if (window.matchMedia( "(max-width: 980px)" ).matches) {
            $('#searchLink').on('click', function(event) {
                event.preventDefault();
                $(this).siblings('input').toggleClass('active');
                $(this).parent('.search-form').siblings('.tabs').toggleClass('hidden');
                return false;
            })


            $('#searchLink').siblings('input').keyup(function () {
                var searchValue = $('#searchLink').siblings('input').val();

                $('#searchLink').one('click', function(){
                    $('#searchPopup').toggleClass('show');
                    $('#searchPopupInput').val(searchValue);
                    $( ".search-value" ).text( searchValue );
                })
            })
        }



    });

    if (window.matchMedia( "(max-width: 980px)" ).matches) {
        $('#searchLink').on('click', function(event) {
           event.preventDefault();
            $(this).siblings('input').toggleClass('active');
            $(this).parent('.search-form').siblings('.tabs').toggleClass('hidden');
            return false;
        })


        $('#searchLink').siblings('input').keyup(function () {
            var searchValue = $('#searchLink').siblings('input').val();

            $('#searchLink').one('click', function(){
                $('#searchPopup').toggleClass('show');
                $('#searchPopupInput').val(searchValue);
                $( ".search-value" ).text( searchValue );
            })
        })
    }

    if (window.matchMedia( "(max-width: 720px)" ).matches) {
        burgerMenu();
        burgerProfile();

        $('.prof-status.edit').on('click', function() {
            $('.profile').toggleClass('open');
            return false;
        })
    }

    $('#messaging .foll-right').on('click', function () {
        $(this).toggleClass('show');

        if($(this).hasClass('show')){
            $('#messaging .popup-close').css('opacity', '0');
        } else {
            $('#messaging .popup-close').css('opacity', '1');
        }

    })

    if (window.matchMedia( "(max-width: 450px)" ).matches) {
        hidePlayerBtns();
    }

    if(!$('.opt-name').prev('[type=checkbox]').prop('checked')) {

        $('.price-btn').on('click', function(event){
            event.preventDefault();
            return false;
        })
    }

});