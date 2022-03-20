$(document).ready(function () {
    $('body').addClass('loaded');

    // header
    $(function () {
        var urlHome = 'http://localhost:3000/';
        var urlIntro = 'http://localhost:3000/intro';
        var urlDiscount = 'http://localhost:3000/discount';
        var urlSignIn = 'http://localhost:3000/sign_in';
        var urlSignUp = 'http://localhost:3000/sign_up';
        var listUrl = [urlHome, urlIntro, urlDiscount, urlSignIn, urlSignUp];
        $.each(listUrl, function (index, url) {
            if (url === location.href) {
                if (index !== 0) {
                    $('#nav > li:nth-child(1) a').removeClass('active');
                }
                if (index === 1) {
                    $('#nav > li:nth-child(2) a').addClass('active');
                } else if (index === 2) {
                    $('#nav > li:nth-child(3) a').addClass('active');
                } else if (index === 3 || index === 4) {
                    $('#nav > li:nth-child(5) a').addClass('active');
                }
            }
        });
    });

    // home
    $('.first-name').html($('.porsche').text());
    $('.second-name').html($('.land-rover').text());
    $('.third-name').html($('.alphard').text());

    // Thay đổi xe
    $('.car-item:first').click(function () {
        $('.car-name').removeClass('car-name-focus');
        $('.car-name:first').addClass('car-name-focus');
        $('.car-arrow').removeClass('fade-in');
        $('.car-arrow:first').addClass('fade-in');
        $('.car-under').addClass('none');
        $('.car-under:first').removeClass('none');
    });
    $('.car-item:odd').click(function () {
        $('.car-name').removeClass('car-name-focus');
        $('.car-name:odd').addClass('car-name-focus');
        $('.car-arrow').removeClass('fade-in');
        $('.car-arrow:odd').addClass('fade-in');
        $('.car-under').addClass('none');
        $('.car-under:odd').removeClass('none');
    });
    $('.car-item:last').click(function () {
        $('.car-name').removeClass('car-name-focus');
        $('.car-name:last').addClass('car-name-focus');
        $('.car-arrow').removeClass('fade-in');
        $('.car-arrow:last').addClass('fade-in');
        $('.car-under').addClass('none');
        $('.car-under:last').removeClass('none');
    });

    // Chose version
    $('.version-item').click(function () {
        $('.version-item').removeClass('active border-active');
        $(this).addClass('active border-active');
    });

    // Chose color
    var carImg = [];
    $('.car-img-item').each(function () {
        carImg.push($(this));
    });

    $('.color-item').each(function (i) {
        $('.color-item').click(function () {
            carImg.forEach(function (j) {
                carImg[i].add('none');
                if (i == j) {
                    carImg[j].removeClass('none');
                }
            });
        });
    });

    // discountPage
    setInterval(function () {
        $('.poster-red').toggleClass('none');
        $('.poster-blue').toggleClass('none');
    }, 500);

    $('.discount-poster').click(function () {
        window.location.href = 'home';
    });

    $('#nav li:nth-child(4)').hover(function () {
        $('#container').toggleClass('opacity');
    });

    // account
    // Xử lý ẩn hiện và vô hiệu hóa submitBtn
    setInterval(() => {
        var userNameValue = $('.user-name').val();
        var pwdValue = $('.password').val();
        var pwdAgainValue = $('.password-again').val();
        if (userNameValue !== '' && pwdValue !== '' && pwdAgainValue !== '') {
            $('.btn').css('backgroundColor', '#448AFF');
            $('.btn').removeAttr('disabled');
        } else {
            $('.btn').css('backgroundColor', '#BCAAA4');
            $('.btn').attr('disabled', 'disabled');
        }
    }, 0);

    var colorBtn = $('.btn').css('backgroundColor');
    if (colorBtn === 'rgb(188, 170, 164)') {
        $('.btn').hover(function () {
            $(this).toggleClass('opacity');
        });
    }

    // Validate form
    $('#sign-in form').submit(function () {
        var errol = document.querySelector('.errol');
        if ($('.user-name').val() !== 'letruongan' || $('.password').val() !== 'letruongan') {
            errol.innerHTML = 'Thông tin tài khoản hoặc mật khẩu không chính xác!';
            $('.password').val('');
            return false;
        } return true;
    });

    $('.btn').click(function () {
        var errol = document.querySelector('.errol');
        if ($('#sign-up .user-name').val().length < 5) {
            errol.innerHTML = 'Tên tài khoản quá ngắn!';
            return false;
        }
        if ($('#sign-up .password').val().length < 8) {
            errol.innerHTML = 'Mật khẩu phải có ít nhất 8 ký tự!';
            return false;
        }
        if ($('.password-again').val() !== $('.password').val()) {
            errol.innerHTML = 'Mật khẩu nhập lại không đúng!';
            $('.password-again').val('');
            return false;
        }
        return true;
    });

    // show eyes
    setInterval(function () {
        if ($('.password').val() !== '') {
            $('.eye-open:even').removeClass('none');
        } else $('.eye-open:even').addClass('none');

        if ($('.password-again').val() !== '') {
            $('.eye-open:odd').removeClass('none');
        } else $('.eye-open:odd').addClass('none');
    }, 0);

    // Hiện ẩn mật khẩu
    $('.eye-open:even').click(function () {
        if ($('.password:even').attr('type') === 'password') {
            $('.password:even').attr('type', 'text');
        }
        $(this).toggleClass('none');
        $('.eye-close:even').toggleClass('none');
    });
    $('.eye-close:even').click(function () {
        if ($('.password:even').attr('type') === 'text') {
            $('.password:even').attr('type', 'password');
        }
        $(this).toggleClass('none');
        $('.eye-open:even').toggleClass('none');
    });
    $('.eye-open:odd').click(function () {
        if ($('.password-again').attr('type') === 'password') {
            $('.password-again').attr('type', 'text');
        }
        $(this).toggleClass('none');
        $('.eye-close:odd').toggleClass('none');
    });
    $('.eye-close:odd').click(function () {
        if ($('.password-again').attr('type') === 'text') {
            $('.password-again').attr('type', 'password');
        }
        $(this).toggleClass('none');
        $('.eye-open:odd').toggleClass('none');
    });

    $('button:last').click(function () {
        var thisPage = location.href;
        var urlSignInPage = 'http://localhost:3000/sign_in';
        var urlSignUpPage = 'http://localhost:3000/sign_up';
        if (thisPage !== urlSignInPage) {
            window.location.assign(urlSignInPage);
        } else {
            window.location.assign(urlSignUpPage);
        }
    });
});