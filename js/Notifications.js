/**
 * Created by liuchen on 16/5/7.
 */
$(function () {
    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
        theme: 'flat'
    }


    $(".error-notification").click(function (e) {
        e.preventDefault();

        Messenger().post({
            message: 'Sorry, there was problem while processing your request.',
            type: 'error',
            showCloseButton: true
        });
    });
});

function williams(message) {
    //e.preventDefault();
    Messenger().post(message);
}
