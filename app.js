"use strict";
$(document).ready(function () {
    $("#sendMe").click(function (e) {
        e.preventDefault();
        function myel(myclass = "") {
            if (!$.trim($("#inputMe").val()) == "") {
                let vall = $("#inputMe").val(),
                    newLi = $('<li></li>'),
                    newDiv = $('<div class="line"></div>'),
                    bigDiv = $(`<div ${myclass}></div>`)
                $(newH3).append(vall);
                $(newDiv).append(newH3);
                $(bigDiv).append(newDiv);
                return bigDiv;
            } else {
                return
            }
        }
        $("#messageyou").append(myel());
        $("#messageme").append(myel('class="me"'));
        $("#inputme").val("");
    });
});
