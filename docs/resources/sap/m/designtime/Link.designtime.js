/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e=function(e,t){var n=sap.ui.getCore().getLibraryResourceBundle("sap.m.designtime");return new Promise(function(a){var r={selectedKey:e.getTarget(),titleText:n.getText("LINK_DIALOG_TITLE_CHANGE_TARGET"),cancelBtn:n.getText("LINK_DIALOG_CANCEL_BTN"),okBtn:n.getText("LINK_DIALOG_OK_BTN")};var s=new sap.ui.model.json.JSONModel;s.setData(r);var i=sap.ui.xmlfragment("sap.m.designtime.LinkTargetSelectDialog",this);i.setModel(s);i.getBeginButton().attachPress(function(e){var t=sap.ui.getCore().byId("targetCombo").getValue();a(t);i.close()});i.getEndButton().attachPress(function(e){i.close()});i.attachEventOnce("afterClose",function(e){i.destroy()});i.addStyleClass(t.styleClass);i.open()}).then(function(t){return[{selectorControl:e,changeSpecificData:{changeType:"changeLinkTarget",content:t}}]})};return{name:{singular:"LINK_NAME",plural:"LINK_NAME_PLURAL"},palette:{group:"ACTION",icons:{svg:"sap/m/designtime/Link.icon.svg"}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"},settings:function(){return{changeLinkTarget:{name:"LINK_CHANGE_TARGET",isEnabled:function(e){return!!e.getHref()},handler:e}}}},templates:{create:"sap/m/designtime/Link.create.fragment.xml"}}},false);