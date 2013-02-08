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

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux': './ux'
    }
});

Ext.application({
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.field.Password',
        'Ext.Button',
        'Ext.MessageBox',
        'Ext.dataview.DataView',
        'Ext.Label'
    ],
    globalEditionName: '',
    globalEditionInfo: '',
    globalEditionPages: '',
    globalEditionFile: '',
    globalPageName: '',
    globalPageInfo: '',
    models: [
        'EditionsModel',
        'PagesModel'
    ],
    stores: [
        'EditionsStore',
        'PagesStore'
    ],
    views: [
        'LoginView',
        'EditionsView',
        'PageView',
        'Ext.ux.ImageViewer',
        'PagesView',
        'HelpView'
    ],
    icon: {
        57: 'resources/icons/57x57.png',
        72: 'resources/icons/72x72.png',
        114: 'resources/icons/114x114.png',
        144: 'resources/icons/144x144.png'
    },
    isIconPrecomposed: true,
    name: 'Mobile',
    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.jpg',
        '640x1096': 'resources/startup/640x1096.jpg',
        '768x1004': 'resources/startup/768x1004.jpg',
        '748x1024': 'resources/startup/748x1024.jpg',
        '1536x2008': 'resources/startup/1536x2008.jpg',
        '1496x2048': 'resources/startup/1496x2048.jpg'
    },
    controllers: [
        'MainController'
    ]
});
