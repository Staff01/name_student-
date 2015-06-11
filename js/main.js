$(function () {
            var
                button_send_message = $('button[name="send_message"]'), //Кнопка отправки
                str = '',
                form_msg = $('form[name="form_msg"]'), //Форма
                alert_msg = $('div[name="message_text"]'), //Текстовое сообщение
                name_user = $('input[name="name_user"]'), //Имя
                surname_user = $('input[name="surname_user"]'), //Фамилия
                may_user = $('input[name="may_user"]'); //дата рождения
    
            alert_msg.hide();
    

            button_send_message.click(function () {
                    alert_msg.empty();
            
                //Проверка на ошибки
                    if (name_user.val() === '') {
                        alert_msg.addClass('uk-alert-danger').append('<strong>Укажите пожалуйста имя</strong><br/>');
                    }

                    if (surname_user.val() === '') {
                        alert_msg.addClass('uk-alert-danger').append('<strong>Укажите пожалуйста фамилию</strong><br/>');
                    }
                    if (may_user.val() === '') {
                        alert_msg.addClass('uk-alert-danger').append('<strong>Укажите пожалуйста дату</strong></br>')
                    }
                    //Все очень хорошо, отображения результата
                    if ((name_user.val() !== '') && (surname_user.val() != '') && (may_user.val() != '')){
                            alert_msg.empty();
                            str = 'Вы ' + may_user.val()
                            '' + surname_user.val() + ' ' + name_user.val() + '<br/><strong>зарегистрированы на семинар</strong>';

                            alert_msg.removeClass('uk-alert-danger')
                                .addClass('uk-alert-success')
                                .append(str);

                            form_msg.hide();
                        }

                        alert_msg.show();
            });
});