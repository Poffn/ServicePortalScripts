// ==UserScript==
// @name         Service.meridium.se UserFilter
// @namespace    https://meridium.se
// @version      0.5
// @description  try to take over the world!
// @downloadURL https://github.com/Poffn/ServicePortalScripts/raw/master/UserFilter.js
// @author       Kristoffer Bjelkmark
// @match        https://service.meridium.se/sv/mina-sidor/mina-arenden/
// @match        https://service.meridium.se/sv/mina-sidor/mina-arenden/*
// @match        https://service.meridium.se/templates/ProductSupport/Templates/CaseList.aspx*
// @match        https://service.meridium.se/*
// @grant GM.getResourceUrl
// @resource test https://github.com/Poffn/ServicePortalScripts/raw/master/Dark-theme.css
// ==/UserScript==

(async function() {
    var t = await GM.getResourceUrl("test");
    $('head').append('<link rel="stylesheet" href="'+t+'" type="text/css" />')
})();

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
        var name = $(this).text().toLowerCase().replace("klar","").replace("påbörja","").replace("godkänn","").replace("underkänn","").trim()

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


})();
