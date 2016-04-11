* Contains most jQuery plugins from the original theme
* Upgrade to 1.3
..* Import template, associated .html file
..* onRendered(function{...}) instead of onrenderd = function{...
* Nestable works
* Migrated to Flow Router
* Migrated plugins to via the following methods:
..* If there was a straight Atmosphere port, commented out the plugin contents, and added the meteor version
..* If not, added the node version via meteor npm install --save <name_of_package>
