// ==UserScript==
// @name         Cisco/Linksys E3000 Session BUG Workaround
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  https://community.linksys.com/t5/Wireless-Routers/Linksys-E1200-firmware-2-0-07-bug-editing-anything-in-setup/m-p/974084#M309702
// @author       Brian Trusz (5/2017)
// @match        http://YourRoutersIPaddress/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //Re: Linksys E1200 firmware 2.0.07 bug: editing anything in setup kicks me out with session failure

    //THIS SCRIPT MUST BE ACTIVE ON *EVERY* ROUTER PAGE to properly capture all events!!!!!
    //Not just Share_Properties.asp*, FTP_Share_Access.asp*, Media_Share_Access.asp*

    //alert("Cisco/Linksys E3000 Session BUG Workaround: Begin");
    document.forms[1].action=document.forms[0].action;    document.forms[3].action=document.forms[0].action; //VERY CRUDE, BUT ALWAYS WORKS TO FIX HIDDEN FORMS #2 AND #4!

    /* //FOR MORE COMPLEX PAGES (FORM LAYOUTS?)
    var i, action=document.forms[0].action;
    action = action.slice(action.indexOf("apply"));//trim leading http crap, only keep relative link: apply.cgi...
    for (i=1; i<document.forms.length; i++) //skip teh only correct form
        if (document.forms[i].action !== 'undefined' && document.forms[i].action.length)  //does this form REALLY have an action?
            document.forms[i].action = action;  //fix it
    */

    //alert("Cisco/Linksys E3000 Session BUG Workaround: End\n"+document.forms[0].action);
})();
