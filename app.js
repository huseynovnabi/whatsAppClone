"use strict";
$(document).ready(function () {
    $("#sendMe").click(function (e) {
        e.preventDefault();
        function myel(myclass = "") {
            if (!$.trim($("#inputMe").val()) == "") {
                let vall = $("#inputMe").val(),
                    newLi = $('<li></li>'),
                    newUl = $(`<ul ${myclass}></ul>`)
                $(newLi).append(vall);
                $(newUl).append(newLi);
                return newUl;
            } else {
                return
            }
        }
        $("#ulYou").append(myel("class='lineYou'"));
        $("#ulMe").append(myel('class="forUl lineMe"'));
        $("#inputMe").val("");
    });



    $("#sendYou").click(function (e) {
        e.preventDefault();
        function myel(myclass = "") {
            if (!$.trim($("#inputYou").val()) == "") {
                let vall = $("#inputYou").val(),
                    newLi = $('<li></li>'),
                    newUl = $(`<ul ${myclass}></ul>`)
                $(newLi).append(vall);
                $(newUl).append(newLi);
                return newUl;
            } else {
                return
            }
        }
        $("#ulMe").append(myel("class='lineYou'"));
        $("#ulYou").append(myel('class="forUl lineMe"'));
        $("#inputYou").val("");
    });
});
