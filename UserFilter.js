// ==UserScript==
// @name         Service.meridium.se UserFilter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://service.meridium.se/sv/mina-sidor/mina-arenden/,http://service.meridium.se/sv/mina-sidor/mina-arenden/*,http://service.meridium.se/templates/ProductSupport/Templates/CaseList.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addRemoveButton(){
        var btnTemplate = $('<input type="button" value="Rensa filtrering" id="CustomFiltering" class="button" />');

        var btn = $(".filter-options").first().append(btnTemplate);
        btn.click(function(e){
            e.preventDefault();
            $(".options").each(function(){
                $(this).parent("tr").show();
            });
            $("#CustomFiltering").remove();
        });
    }

     $(".options").css("cursor","pointer");


    $(".options").click(function(e){
        e.preventDefault();
        var name = $(this).text().toLowerCase().replace("klar","").replace("påbörja","").trim()

         $(".options").each(function(){
            var val = $(this).text().trim();
            if(val.toLowerCase().indexOf(name)>-1){
            }
            else{
                $(this).parent("tr").hide();
            }
        });
        if($("#CustomFiltering").length < 1){
            addRemoveButton();
        }
    });
    alert("test");

})();