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

Ext.define('Mobile.view.HelpView', {
    extend: 'Ext.Container',

    config: {
        centered: true,
        height: '100%',
        padding: '40 7 40 7',
        width: '100%',
        layout: {
            type: 'vbox'
        },
        scrollable: false,
        style: {
            background: 'white'
        },
        items: [
            {
                xtype: 'container',
                layout: {
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'label',
                        html: '<div style="background-color: #ffcc00; border-radius: 5px; float: left; font-size: 0.70em; padding: 5px;">' + locale.helpTopLeftMessage + '</div>'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'label',
                        html: '<div style="background-color: #ffcc00; border-radius: 5px; float: right; font-size: 0.70em; padding: 5px;">' + locale.helpTopRightMessage + '</div>'
                    }
                ]
            },
            {
                xtype: 'spacer'
            },
            {
                xtype: 'container',
                layout: {
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'label',
                        html: '<div style="background-color: #ffcc00; border-radius: 5px; float: right; font-size: 0.70em; padding: 5px;">' + locale.helpMiddleCenterMessage + '</div>'
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            },
            {
                xtype: 'spacer'
            },
            {
                xtype: 'container',
                layout: {
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'label',
                        html: '<div style="background-color: #ffcc00; border-radius: 5px; float: left; font-size: 0.70em; padding: 5px;">' + locale.helpBottomLeftMessage + '</div>'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'label',
                        html: '<div style="background-color: #ffcc00; border-radius: 5px; float: left; font-size: 0.70em; padding: 5px;">' + locale.helpBottomCenterMessage + '</div>'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'label',
                        html: '<div style="background-color: #ffcc00; border-radius: 5px; float: right; font-size: 0.70em; padding: 5px;">' + locale.helpBottomRightMessage + '</div>'
                    }
                ]
            }
        ]
    }

});