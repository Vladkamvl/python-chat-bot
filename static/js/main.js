$(document).ready(function () {
    $(".select2_el").select2({});
    //Открытие чата
    $(".chat-bot-icon").click(function (e) {
        $(this).children("img").toggleClass("hide");
        $(this).children("svg").toggleClass("animate");
        $(".chat-screen").toggleClass("show-chat");

        //убираю начальное окно ввода данных, может понадобится потом
        $(".chat-mail").addClass("hide");
        $(".chat-body").removeClass("hide");
        $(".chat-input").removeClass("hide");
        $(".chat-header-option").removeClass("hide");

    });
    $(".chat-mail button").click(function () {
        $(".chat-mail").addClass("hide");
        $(".chat-body").removeClass("hide");
        $(".chat-input").removeClass("hide");
        $(".chat-header-option").removeClass("hide");
    });
    $(".end-chat").click(function () {
        $(".chat-body").addClass("hide");
        $(".chat-input").addClass("hide");
        $(".chat-session-end").removeClass("hide");
        $(".chat-header-option").addClass("hide");
    });

    const chatBotUrl = '/message';

    const sendMessage = (messageText) => {
        addUserMessageToHtml(messageText);
        const data = {
            message: messageText,
        };
        $.post(chatBotUrl, data, function (result) {
            addBotMessageToHtml(result)
        });
    };

    const addUserMessageToHtml = (message) => {
        const resultHtml = `
        <div class="chat-bubble me">
            ${message}
        </div>`;
        $('.chat-body').append(resultHtml);
    }

    const addBotMessageToHtml = (message) => {
        const resultHtml = `
        <div class="chat-bubble you">
            ${message}
        </div>
        `;
        $('.chat-body').append(resultHtml);
    }

    const sendMessageValidator = () => {
        const messageText = $('.message-text-input').val();
        if(!messageText){
            alert('введите сообщение');
            return false;
        }
        sendMessage(messageText);
    }

    // логика бота
    $('.send-message-btn').click(function () {
        sendMessageValidator();
    });


    $('.message-text-input').keypress(function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            sendMessageValidator();
        }
    });

});