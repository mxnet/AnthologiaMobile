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

Ext.define('Mobile.view.LoginView', {
    extend: 'Ext.form.Panel',

    config: {
        tag: 'loginView',
        id: 'loginView',
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        tag: 'usernameField',
                        labelWidth: '40%',
                        name: 'username',
                        required: true,
                        autoCapitalize: false,
                        autoComplete: false,
                        autoCorrect: false,
                        placeHolder: locale.usernamePlaceHolder
                    },
                    {
                        xtype: 'passwordfield',
                        tag: 'passwordField',
                        labelWidth: '40%',
                        name: 'password',
                        required: true,
                        placeHolder: locale.passwordPlaceHolder
                    }
                ]
            },
            {
                xtype: 'button',
                tag: 'loginButton',
                disabled: true,
                ui: 'action',
                text: locale.loginButtonText
            },
            {
                xtype: 'label',
                docked: 'bottom',
                html: '<p style="font-size: 0.90em;"">Anthologia Mobile 1.1.0</p><p style="font-size: 0.60em; margin-top: 5px;">Copyright 2013, <a href="http://html5.mxnet.it" target="_blank">mxnet snc</a>.</p><p style="font-size: 0.55em; margin-top: 5px;">Anthologia Mobile is free software: you can redistribute it<br>and/or modify it under the terms of the <a href="http://www.gnu.org/licenses/gpl.txt" target="_blank">GNU GPL version 3</a>.</p>',
                id: 'infoLabel',
                margin: '0 10 10 10',
                style: 'text-align: center'
            }
        ]
    }

});