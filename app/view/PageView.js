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

Ext.define('Mobile.view.PageView', {
    extend: 'Ext.Container',

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'container',
                tag: 'imageContainer',
                layout: {
                    type: 'fit'
                }
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        tag: 'helpButton',
                        text: locale.helpButtonText
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        tag: 'downloadButton',
                        text: locale.downloadButtonText
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        tag: 'browseButton',
                        text: locale.browseButtonText
                    }
                ]
            },
            {
                xtype: 'container',
                top: 0,
                width: '100%',
                layout: {
                    align: 'start',
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'label',
                        tag: 'pageLabel',
                        html: '',
                        id: 'pageLabel',
                        margin: '10 0 0 0'
                    }
                ]
            }
        ]
    }

});