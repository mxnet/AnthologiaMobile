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

Ext.define('Mobile.view.PagesView', {
    extend: 'Ext.Sheet',

    config: {
        tag: 'pagesView',
        border: 0,
        bottom: 0,
        centered: false,
        height: 177,
        hideOnMaskTap: true,
        layout: {
            type: 'fit'
        },
        stretchX: true,
        stretchY: false,
        items: [
            {
                xtype: 'dataview',
                tag: 'pagesData',
                id: 'pagesData',
                inline: {
                    wrap: false
                },
                itemTpl: [
                    '<div class="item"><img src="{pageThumb}"><div class="name">{pageName}</div><div class="info"><tpl if="pageInfo==&quot;&quot;">&nbsp;</tpl>{pageInfo}</div></div>'
                ],
                loadingText: locale.loadingText,
                store: 'pagesStore'
            }
        ]
    }

});