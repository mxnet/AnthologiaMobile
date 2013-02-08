/*
 * Copyright 2013, mxnet snc.
 * 
 * This file is part of Anthologia Mobile.
 * 
 * Anthologia Mobile is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3 of the License.
 * 
 * Anthologia Mobile is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with Anthologia Mobile. If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Mobile.controller.MainController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            loginView: '[tag=loginView]',
            usernameField: '[tag=usernameField]',
            passwordField: '[tag=passwordField]',
            loginButton: '[tag=loginButton]',
            editionsView: '[tag=editionsView]',
            editionsData: '[tag=editionsData]',
            logoutButton: '[tag=logoutButton]',
            imageContainer: '[tag=imageContainer]',
            downloadButton: '[tag=downloadButton]',
            pageLabel: '[tag=pageLabel]',
            imageViewer: '[tag=imageViewer]',
            pagesView: '[tag=pagesView]',
            pagesData: '[tag=pagesData]'
        },

        control: {
            "[tag=browseButton]": {
                tap: 'browsePages'
            },
            "[tag=usernameField]": {
                keyup: 'usernameFieldChange'
            },
            "[tag=passwordField]": {
                keyup: 'passwordFieldChange'
            },
            "[tag=loginButton]": {
                tap: 'login'
            },
            "[tag=logoutButton]": {
                tap: 'logout'
            },
            "[tag=editionsData]": {
                itemsingletap: 'loadEdition'
            },
            "navigationview": {
                resized: 'onNavigationviewResized'
            },
            "[tag=pagesData]": {
                itemsingletap: 'loadPage'
            },
            "[tag=helpButton]": {
                tap: 'displayHelp'
            },
            "[tag=downloadButton]": {
                tap: 'download'
            }
        }
    },

    browsePages: function(button, e, options) {
        if(this.getPagesView()) {
            this.getPagesView().show();
        }
    },

    usernameFieldChange: function(textfield, e, options) {
        this.manageLoginButton()
    },

    passwordFieldChange: function(textfield, e, options) {
        this.manageLoginButton()
    },

    login: function(button, e, options) {
        var values = this.getLoginView().getValues();
        if (values.username && values.password) {
            this.getLoginButton().setDisabled(true);
            Ext.Ajax.request({
                scope: this,
                url: config.loginScript,
                params: {
                    username: values.username,
                    password: values.password
                },
                method: 'POST',
                success: function(response, options) {
                    var result = Ext.JSON.decode(response.responseText);
                    if(result.success) {
                        this.getLoginView().destroy();
                        this.showEditionsView(result.message);
                    } else {
                        if(result.message) {
                            Ext.Msg.alert(locale.warningTitle, result.message, Ext.emptyFn);
                        }
                    }
                },
                failure: function() {
                    this.getLoginButton().setDisabled(false);
                    Ext.Msg.alert(locale.errorTitle, locale.loginFailureMessage, Ext.emptyFn);
                }
            });
        }
    },

    logout: function(button, e, options) {
        Ext.Msg.confirm(
        locale.questionTitle,
        locale.logoutConfirmMessage,
        function(buttonId) {
            if(buttonId == 'yes') {
                Ext.Ajax.request({
                    scope: this,
                    url: config.logoutScript,
                    method: 'POST',
                    success: function() {
                        this.getEditionsView().destroy();
                        this.showLoginView();
                    },
                    failure: function() {
                        Ext.Msg.alert(locale.errorTitle, locale.logoutFailureMessage, Ext.emptyFn);
                    }
                });
            }
        },
        this
        );
    },

    loadEdition: function(dataview, index, target, record, e, options) {
        var page = Ext.create('Mobile.view.PageView', {title:  locale.pageViewStaticTitle || record.get('editionName')});
        this.getDownloadButton().setHidden(! config.downloadEnabled);
        var viewer = Ext.create('Ext.ux.ImageViewer', {imageSrc: record.get('editionImage'), style: {backgroundColor: '#444444'}});
        viewer.tag = 'imageViewer';
        Mobile.app.globalEditionName = record.get('editionName');
        Mobile.app.globalEditionInfo = record.get('editionInfo');
        Mobile.app.globalEditionPages = record.get('editionPages');
        Mobile.app.globalEditionFile = record.get('editionFile');
        Mobile.app.globalPageName = '';
        Mobile.app.globalPageInfo = '';
        this.updatePageLabel();
        this.getImageContainer().add(viewer);
        this.getEditionsView().push(page);
        if(this.getPagesView()) {
            this.getPagesView().destroy();
        }
        if(Ext.os.is.iPhone) {
            var pages = Ext.create('Mobile.view.PagesView', {height: 180});
        } else {
            var pages = Ext.create('Mobile.view.PagesView');
        }
        Ext.Viewport.add(pages);
        this.getPagesData().getStore().load({
            url: record.get('pagesFile'),
            callback: function(records, operation, success) {
                if(! success) {
                    Ext.Msg.alert(locale.errorTitle, locale.pagesLoadingFailureMessage, Ext.emptyFn);
                }
            }
        });

    },

    onNavigationviewResized: function(eventOptions) {
        if(this.getImageViewer()) {
            this.getImageViewer().resize();
            this.updatePageLabel();
        }
    },

    loadPage: function(dataview, index, target, record, e, options) {
        this.getImageViewer().unloadImage();
        this.getImageViewer().loadImage(record.get('pageImage'));
        Mobile.app.globalPageName = record.get('pageName');
        Mobile.app.globalPageInfo = record.get('pageInfo');
        this.getPagesView().hide();
        this.updatePageLabel();

    },

    displayHelp: function(button, e, options) {
        Ext.create('Mobile.view.HelpView', {
            fullscreen: true,
            listeners: {
                element: 'element',
                tap: function() {
                    this.destroy();
                }
            }
        });
    },

    download: function(button, e, options) {
        Ext.Msg.confirm(
        locale.questionTitle,
        locale.downloadConfirmMessage,
        function(buttonId) {
            if(buttonId == 'yes') {
                if(Ext.os.deviceType == 'Desktop') {
                    window.open(Mobile.app.globalEditionFile);
                } else {
                    if(Ext.os.name == 'iOS') {
                        this.openLink(Mobile.app.globalEditionFile);
                    } else {
                        window.location = Mobile.app.globalEditionFile;
                    }
                }
            }
        },
        this
        );
    },

    launch: function() {
        Ext.apply(Ext.MessageBox, {
            YES: {text: locale.yesButtonText, itemId: 'yes', ui: 'action'},
            NO: {text: locale.noButtonText, itemId: 'no' }
        });
        Ext.apply(Ext.MessageBox, {
            YESNO: [Ext.MessageBox.NO, Ext.MessageBox.YES]
        });
        if(config.loginEnabled) {
            this.authenticate();
        } else {
            this.showEditionsView();
        }
    },

    authenticate: function() {
        Ext.Ajax.request({
            scope: this,
            url: config.authenticateScript,
            method: 'POST',
            success: function(response, options) {
                var result = Ext.JSON.decode(response.responseText);
                if(result.success) {
                    this.showEditionsView(result.message);
                } else {
                    this.showLoginView(result.message);
                }
            },
            failure: function() {
                Ext.Msg.alert(locale.errorTitle, locale.authenticationFailureMessage, Ext.emptyFn);
            }
        });
    },

    showLoginView: function(message) {
        Ext.create('Mobile.view.LoginView', {fullscreen: true});
        if(message) {
            Ext.Msg.alert(locale.infoTitle, message, Ext.emptyFn);
        }
    },

    manageLoginButton: function() {
        if(this.getUsernameField().getValue() && this.getPasswordField().getValue()) {
            this.getLoginButton().setDisabled(false);
        } else {
            this.getLoginButton().setDisabled(true);
        }
    },

    showEditionsView: function(message) {
        Ext.create('Mobile.view.EditionsView', {fullscreen: true});
        this.getLogoutButton().setHidden(! config.loginEnabled);
        this.getEditionsData().getStore().load({
            url: config.editionsScript,
            callback: function(records, operation, success) {
                if(! success) {
                    Ext.Msg.alert(locale.errorTitle, locale.editionsLoadingFailureMessage, Ext.emptyFn);
                }
            }
        });
        if(message) {
            Ext.Msg.alert(locale.infoTitle, message, Ext.emptyFn);
        }
    },

    updatePageLabel: function() {
        if(Mobile.app.globalPageName === '') {
            if(Ext.os.deviceType == 'Phone') {
                this.getPageLabel().setHtml('<div>' + locale.shortCoverLabelText.replace('%en%', Mobile.app.globalEditionName).replace('%ei%', Mobile.app.globalEditionInfo).replace('%ep%', Mobile.app.globalEditionPages) + '</div>');
            } else {
                this.getPageLabel().setHtml('<div>' + locale.longCoverLabelText.replace('%en%', Mobile.app.globalEditionName).replace('%ei%', Mobile.app.globalEditionInfo).replace('%ep%', Mobile.app.globalEditionPages) + '</div>');
            }
        } else {
            if(Ext.os.deviceType == 'Phone') {
                this.getPageLabel().setHtml('<div>' + locale.shortPageLabelText.replace('%en%', Mobile.app.globalEditionName).replace('%ei%', Mobile.app.globalEditionInfo).replace('%ep%', Mobile.app.globalEditionPages).replace('%pn%', Mobile.app.globalPageName).replace('%pi%', Mobile.app.globalPageInfo) + '</div>');
            } else {
                this.getPageLabel().setHtml('<div>' + locale.longPageLabelText.replace('%en%', Mobile.app.globalEditionName).replace('%ei%', Mobile.app.globalEditionInfo).replace('%ep%', Mobile.app.globalEditionPages).replace('%pn%', Mobile.app.globalPageName).replace('%pi%', Mobile.app.globalPageInfo) + '</div>');
            }
        }
    },

    openLink: function(href) {
        var link = document.createElement('a');
        link.setAttribute('href', href);
        link.setAttribute('target','_blank');
        var clickevent = document.createEvent('Event');
        clickevent.initEvent('click', true, false);
        link.dispatchEvent(clickevent);
        return false;
    }

});