Author:	Andrea Paraboni
Copyright:	2013 mxnet snc
Date:	2013-03-01
Email:	andrea.paraboni@mxnet.it
Version:	1.0.0

#Anthologia Mobile 1.1.0

Anthologia Mobile is a mobile web app for visualizing on mobile devices and desktops collections of newspapers, magazines, manuals, catalogues, pamphlets, etc. It was developed using the frameworks [Sencha Touch 2.1.1][touch] and [Sencha Cmd 3.0.2][cmd], Anthologia Mobile runs on all devices supported by the frameworks.

##Configuration

At the start the application loads the file `resources/config/config.js`:

	config = {
		loginEnabled: true,
		authenticateScript: 'resources/scripts/authenticate.php',
		loginScript: 'resources/scripts/login.php',
	    logoutScript: 'resources/scripts/logout.php',
	    downloadEnabled: true,
	    editionsScript: 'resources/scripts/editions.json'
	};

in which:

`loginEnabled`
:	boolean: enables/disables user authentication and hence logout button visibility;

`authenticateScript`
:	string: defines path to the [authentication script](#authenticationScript) (only if it is defined `loginEnabled: true`);

`loginScript`
:	string: defines path to the [login script](#loginScript) (only if it is defined `loginEnabled: true`);

`logoutScript`
:	string:, defines path to the [logout script](#logoutScript) (only if it is defined `loginEnabled: true`);

`downloadEnabled`
:	boolean: enables/disables download button visibility;

`editionsScript`
:	string: defines path to the [editions script](#editionsScript).

###<a id="authenticationScripts"></a>Authentication script

The application can authenticate the user with an AJAX request without parameters to a dynamic script (node.js, PHP, etc.) or statically to a file (JSON), which returns a JSON object thus structured:

	{
		"success":false,
		"message":""
	}

The value of message is optional.

###<a id="loginScripts"></a>Login script

The application can check the user login with an AJAX request with the parameters POST username and password to a dynamic script (node.js, PHP, etc.) or statically to a file (JSON), which returns a JSON object thus structured:

	{
		"success":true,
		"message":"Welcome!"
	}

The value of `message` is optional, but can be used to convey information to the user rather than signal errors.

###<a id="logoutScripts"></a>Logout script

The application can check the user logout with an AJAX request without parameters to a dynamic script (node.js, PHP, etc.) or statically to a file (JSON), which returns a JSON object thus structured:

	{
		"success":true
	}

###<a id="editionsScript"></a>Editions script

The application acquires the editions for visualization with an AJAX request without parameters to a dynamic script (node.js, PHP, etc.) or statically to a file (JSON), which returns a JSON object thus structured:

	[
		{
			"editionName": "PostgreSQL Magazine",
			"editionInfo": "Issue 1",
			"editionImage": "resources/editions/demo01/images/001.jpg",
			"editionThumb": "resources/editions/demo01/thumbs/001.jpg",
			"editionPages": 36,
			"editionFile":	"resources/editions/demo01/PostgreSQL Magazine.pdf",
			"pagesFile": "resources/editions/demo01/pages.json"
		},
		{
			…
		}
	]

in which:

`editionName`
:	string: defines name/title of edition

`editionInfo`
:	string: defines other optional information about the edition;

`editionImage`
:	string: defines the absolute or relative path/URL to the JPEG image of the edition;

`editionThumb`
:	string: defines the absolute or relative path/URL of the JPEG [thumbnail](#thumbnail) of the edition;

`editionPages`
:	integer: defines the number of pages of the edition;

`editionFile`
:	string: defines the absolute or relative path/URL to the PDF file of the edition;

`pagesFile`
:	string: defines the absolute or relative path/URL to the [script of the pages](#pagesScript).

###<a id="pagesScript"></a>Script of the pages

The application acquires the pages for visualization with an AJAX request without parameters to a dynamic script (node.js, PHP, etc.) or statically to a file (JSON), which returns a JSON object thus structured:

	[
		{
			"pageName":"Page 1",
			"pageImage":"resources/editions/demo00/images/001.jpg",
			"pageThumb": "resources/editions/demo00/thumbs/001.jpg",
			"pageInfo":""
		},
		{
			…
		},
	]

in which:

`pageName`
:	string: defines the name/title of the page;

`pageImage`
:	string: defines the absolute or relative path/URL to the JPEG image of the page;

`pageThumb`
:	string: defines the absolute or relative path/URL to the [thumbnail](#thumbnail) JPEG of the page;

`pageInfo`
:	string: defines other optional information about the page.

###<a id="thumbnail"></a>Thumbnail

The height of thumbnails must be 130 pixels.

##Localization

The file `index.html` of the application must contains the link to the preferred localization:

	<script src="resources/config/locale-en_US.js"></script>

You can edit each localized string of the included file (in this case `<script src="resources/config/locale-en_US.js"></script>`).

The contents of the file is self-explanatory, but we will improve the related documentation.

##Building

In the terminal, inside the application directory, run:

	sencha app build production

##Acknowledgements

Anthologia Mobile uses [Ext.ux.ImageViewer][viewer] (Copyright (c) 2012 André Fiedler. MIT license) modified and adapted.

##License

Copyright (c) 2013, [mxnet snc][mxnet].

edtionReader Mobile is free software: you can redistribute it and/or modify it under the terms of the [GNU General Public License][gpl] as published by the Free Software Foundation, version 3 of the License.

edtionReader Mobile is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the [GNU General Public License][gpl] for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see [http://www.gnu.org/licenses/][licenses].

[touch]: http://www.sencha.com/products/touch/download
[cmd]: http://www.sencha.com/products/sencha-cmd/download
[mxnet]: http://html5.mxnet.it/
[gpl]: http://www.gnu.org/licenses/gpl.txt
[licenses]: http://www.gnu.org/licenses/gpl.txt
[viewer]: https://github.com/SunboX/ST2_ImageViewer