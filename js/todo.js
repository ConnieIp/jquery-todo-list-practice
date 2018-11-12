$(document)
    .ready(function() {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12 ?
                    4 :
                    (i === 16 ?
                        (random & 3 | 8) :
                        random)).toString(16);
            }
            return uuid;
        }

        // code to be implemented

        function addToDo() {
            var input = $(".input-text").val();
            $("ol").append(`<li id="` + generateUUID() + `" class="">
            <input name="done-todo" type="checkbox" class="done-todo"> ` + input + ` </li>`);
        }

        $('#button').click(addToDo);

        $('.done-todo').change(function() {
            if ($(this).parent().hasClass("checked")) {
                $(this).parent().attr("class", "");
            } else {
                $(this).parent().attr("class", "checked");
            }
        });
        //
    });