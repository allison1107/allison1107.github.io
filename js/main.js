(function ($) {

    "use strict";

    var MENU_BREAKPOINT = 1340;
    var SCROLL_SPEED = 1500;

    var $window = $(window);
    var $htmlBody = $('html, body');
    var $body = $('body');
    var $toggle = $('#toggle');
    var $sections = $('.content-right .section');
    var $menuItems = $('#header-main-menu ul li');

    var isMenuOpen = false;
    var currentSectionId = null;
    var scrollTicking = false;

    stopAnimateOnScroll();
    setDataNumberForSections();
    setTotalPageNumber();
    setSlowScroll();
    setActiveMenuItem();
    portfolioItemContentLoadOnClick();

    $window.on('load', function () {
        setPortfolio();
        $toggle.on('click', toggleMenu);
        setMenu();
        setDefaultMenuState();
        setHash();
        $('.doc-loader').fadeOut();
    });

    $window.on('resize', function () {
        setDefaultMenuState();
        requestActiveMenuUpdate();
    });

    $window.on('scroll', requestActiveMenuUpdate);

//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------

    function stopAnimateOnScroll() {
        $htmlBody.on('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function () {
            $htmlBody.stop();
        });
    }

    function scrollToElement($target, offset, speed) {
        if (!$target.length) return;
        $htmlBody.animate({scrollTop: $target.offset().top - offset}, speed);
    }

    function setSlowScroll() {
        $('#header-main-menu').on('click', 'a[href^="#"]', function (e) {
            e.preventDefault();
            if ($(e.target).is('.sub-arrow')) return;
            if (this.hash) {
                scrollToElement($(this.hash), 0, SCROLL_SPEED);
            }
            if ($window.width() < 1360) {
                $body.removeClass('open done');
                $toggle.removeClass('on');
                isMenuOpen = false;
            }
        });
    }

    function setPortfolio() {
        var $grid = $('.grid').imagesLoaded(function () {
            $grid.isotope({
                percentPosition: true,
                itemSelector: '.grid-item',
                filter: '.Web',
                masonry: {
                    columnWidth: '.grid-sizer'
                }
            });
            $('.filters-button-group').on('click', '.button', function () {
                var $button = $(this);
                $button.siblings('.is-checked').removeClass('is-checked');
                $button.addClass('is-checked');
                $grid.isotope({filter: $button.attr('data-filter')});
            });
        });
    }

    // Scroll events fire many times per frame; update at most once per frame.
    function requestActiveMenuUpdate() {
        if (scrollTicking) return;
        scrollTicking = true;
        window.requestAnimationFrame(function () {
            setActiveMenuItem();
            scrollTicking = false;
        });
    }

    function setActiveMenuItem() {
        var scrollTop = $window.scrollTop();
        var $current = null;
        $sections.each(function () {
            if (scrollTop >= $(this).offset().top - 150) {
                $current = $(this);
            }
        });
        var id = $current ? $current.attr('id') : null;
        if (id === currentSectionId) return;
        currentSectionId = id;

        $menuItems.removeClass('current').find('a[href="#' + id + '"]').parent().addClass('current');
        $sections.removeClass('section-active');
        if (!$current) return;

        $current.addClass('section-active');
        var num = $current.data('num');
        $('.current-num span').stop(true).animate({opacity: 0, left: '-5px'}, 150, function () {
            $(this).text(num).animate({opacity: 1, left: 0}, 150);
            $('.current-big-num').text(num);
        });
    }

    function padNumber(n) {
        return ('0' + n).slice(-2);
    }

    function setTotalPageNumber() {
        $('.total-pages-num').text(padNumber($sections.length));
    }

    function setDataNumberForSections() {
        $sections.each(function (i) {
            $(this).data('num', padNumber(i + 1));
        });
    }

    function setHash() {
        var hash = location.hash;
        var $target = hash ? $(hash) : $();
        if ($target.length) {
            $window.scrollTop($target.offset().top);
        } else {
            $window.scrollTop(0);
        }
    }

    function setMenu() {
        $('.main-menu').smartmenus({
            subMenusSubOffsetX: 1,
            subMenusSubOffsetY: -8
        });
    }

    // 大螢幕預設顯示 menu
    function setDefaultMenuState() {
        if ($window.width() > MENU_BREAKPOINT) {
            $body.addClass('open');
            $('.toggle-holder').hide();
            return;
        }
        $('.toggle-holder').show();
        if (!isMenuOpen) {
            $body.removeClass('open');
        }
    }

    function toggleMenu(e) {
        e.preventDefault();
        // 動畫進行中暫停點擊，避免連點造成狀態錯亂
        $toggle.off('click').toggleClass('on');
        isMenuOpen = !isMenuOpen;
        $body.toggleClass('open').delay(300).queue(function (next) {
            $(this).toggleClass('done');
            $toggle.on('click', toggleMenu);
            next();
        });
    }

    function portfolioItemContentLoadOnClick() {
        $('#portfolio-grid').on('click', '.ajax-portfolio', function (e) {
            e.preventDefault();
            var portfolioItemID = $(this).data('id');
            if (portfolioItemID === undefined) return;
            $(this).closest('.grid-item').addClass('portfolio-content-loading');
            $('#portfolio-wrapper .filters-button-group').hide();
            $('#portfolio-grid').addClass('portfoio-items-mask');

            if ($('#pcw-' + portfolioItemID).length) {
                showPortfolioItem(portfolioItemID);
            } else {
                loadPortfolioItemContent(portfolioItemID, $(this).attr('href'));
            }
        });

        $('.portfolio-load-content-holder').on('click', '.close-icon', function () {
            var portfolioReturnItemID = $(this).closest('.portfolio-content-wrapper').attr('id').split('-')[1];
            var $holder = $('.portfolio-load-content-holder').addClass('viceversa');
            $('#portfolio-grid').show();
            $('#portfolio-wrapper .filters-button-group').css('display', 'flex');
            setTimeout(function () {
                $('#pcw-' + portfolioReturnItemID).removeClass('show');
                $holder.removeClass('viceversa show');
                $('#portfolio-grid').removeClass('hide');
            }, 300);
            setTimeout(function () {
                scrollToElement($('#p-item-' + portfolioReturnItemID), 150, 400);
            }, 500);
        });
    }

    function showPortfolioItem(portfolioItemID) {
        scrollToElement($('#portfolio-wrapper'), 150, 400);
        setTimeout(function () {
            $('#portfolio-grid').addClass('hide');
            setTimeout(function () {
                $('#pcw-' + portfolioItemID).addClass('show');
                $('.portfolio-load-content-holder').addClass('show');
                $('.grid-item').removeClass('portfolio-content-loading');
                $('#portfolio-grid').hide().removeClass('portfoio-items-mask');
            }, 300);
        }, 500);
    }

    function loadPortfolioItemContent(portfolioItemID, url) {
        $.get(url, function (html) {
            var selectItem = sortPortfolioList[portfolioItemID];
            var $wrapper = $('<div id="pcw-' + portfolioItemID + '" class="portfolio-content-wrapper"></div>')
                .html($(html).find('.portfolio-item-wrapper').html())
                .prepend('<div class="close-icon"></div>');

            // 只填入這個項目自己的內容，避免覆蓋其他已載入的項目
            $wrapper.find('img').first().attr({src: selectItem.img, alt: selectItem.title});
            $wrapper.find('.section-title').text(selectItem.title);
            $wrapper.find('.using-skills').text('使用技術 : ' + selectItem.skill);
            $wrapper.find('.platform').text('平台 : ' + selectItem.platform);
            $wrapper.find('.info').text(selectItem.content);
            $wrapper.find('.check-project').attr('href', selectItem.url);

            $('.portfolio-load-content-holder').append($wrapper);
            $wrapper.imagesLoaded(function () {
                showPortfolioItem(portfolioItemID);
            });
        });
    }

})(jQuery);
