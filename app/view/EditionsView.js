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

Ext.define('Mobile.view.EditionsView', {
    extend: 'Ext.navigation.View',

    config: {
        tag: 'editionsView',
        defaultBackButtonText: locale.backButtonText,
        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    tag: 'logoutButton',
                    align: 'right',
                    text: locale.logoutButtonText
                }
            ]
        },
        items: [
            {
                xtype: 'dataview',
                tag: 'editionsData',
                title: locale.editionsViewTitle,
                id: 'editionsData',
                itemTpl: [
                    '<div class="item"><img src="{editionThumb}"><div class="name">{editionName}</div><div class="info">{editionInfo}</div></div>'
                ],
                loadingText: locale.loadingText,
                store: 'editionStore'
            }
        ],
        listeners: [
            {
                fn: 'onNavigationviewResize',
                event: 'resize'
            }
        ]
    },

    onNavigationviewResize: function(element, options) {
        this.fireEvent('resized');
    }

});