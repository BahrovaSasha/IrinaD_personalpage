$(document).ready(function(){
    var errors = 0;
    $(document).on('click', '.send-contact-form', function() {
        var userData = {
            name: $('.contacts-form-item:eq(0)').val(), // $('#contacts-form').children().eq(2).children().eq(0).val() $('#contacts-form .input-field:eq(0)').children().eq(0).val()
            email: $('.contacts-form-item:eq(1)').val(),
            message: $('.contacts-form-item:eq(2)').val()
        };
        if (userData.name == '' && $('.contacts-form-item:eq(0)').next().text() == '') {
            $('.contacts-form-item:eq(0)').next().text('Извините, это обязактельное поле');
            errors += 1; //errors = errors + 1
        }
        if (userData.email == '' && $('.contacts-form-item:eq(1)').next().text() == '') {
            $('.contacts-form-item:eq(1)').next().text('Извините, это обязактельное поле');
            errors += 1;
        }
        if (userData.message == '' && $('.contacts-form-item:eq(2)').next().text() == '') {
            $('.contacts-form-item:eq(2)').next().text('Извините, это обязактельное поле');
            errors += 1;
        }


        if (errors == 0) {
            $.ajax({
                type: 'post',
                data: userData,
                url: baseUrl + '',
                dataType: 'json',
                success: function(data) {
                    if (data == 1) {
                        $('.contacts-submit').text('Сообщение отправлено');

                    } else {
                        $('.contacts-error-general').text('Сообщение не отправлено, попробуйте еще раз');
                    }
                },
            });
        }
    });

    $(document).on('focus', '.contacts-form-item:eq(0), .contacts-form-item:eq(1), .contacts-form-item:eq(2)', function(){
        if ($(this).next().text() != '') {
            $(this).next().text('');
            errors -=1;
        }
    });
    $(document).on('blur','.contacts-form-item:eq(0), .contacts-form-item:eq(1), .contacts-form-item:eq(2)', function(){
        if ($(this).val() == '' && $(this).next().text() == '') {
            $(this).next().text('Извините, это обязательное поле');
            errors += 1;
        }
    });

    //popup callback
    var popupErrors = 0;
    $(document).on('click', '.send-callback', function() {
        var userCallback = {
            name: $('.callback-form-item:eq(0)').val(),
            phone: $('.callback-form-item:eq(1)').val()
        };
        /*if (userCallback.name == '' && $('.callback-form-item:eq(0)').next().text() == '') {
            $('.callback-form-item:eq(0)').next().text('Извините, это обязактельное поле');
            popupErrors += 1;
        }
        if (userCallback.phone == '' && $('.callback-form-item:eq(1)').next().text() == '') {
            $('.callback-form-item:eq(1)').next().text('Извините, это обязактельное поле');
            popupErrors +=1;
        }*/
        for (var i = 0; i < 2; i++) {
            if ($('.callback-form-item:eq('+i+')').val() == '' && $('.callback-form-item:eq('+i+')').next().text() == '') {
                $('.callback-form-item:eq('+i+')').next().text('Извините, это обязактельное поле');
                popupErrors += 1;
            }
        }
        if (popupErrors == 0) {
            $.ajax({
                type: 'post',
                data: userData,
                url: baseUrl + '',
                dataType: 'json',
                success: function(data) {
                    if (data == 1) {
                        $('.callback-submit').text('В скором времени с Вами свяжутся');

                    } else {
                        $('.callback-error-general').text('Сообщение не отправлено, попробуйте еще раз');
                    }
                },
            });
        }
    });
    $(document).on('focus', '.callback-form-item:eq(1)', function(){
        $(this).val('+');
    }).on('blur','.callback-form-item:eq(1)', function(){
        if($(this).val() == '+') {
            $(this).val('');
        }

    });
    $(document).on('focus', '.callback-form-item:eq(0), .callback-form-item:eq(1)', function(){
        if ($(this).next().text() != '') {
            $(this).next().text('');
            popupErrors -=1;
        }
    });
    $(document).on('blur','.callback-form-item:eq(0), .callback-form-item:eq(1)', function(){
        if ($(this).val() == '' && $(this).next().text() == '') {
            $(this).next().text('Извините, это обязательное поле');
            popupErrors += 1;
        }
    });
});