### Mac OS X
1. Fire up your terminal.
2. Ensure you have installed Xcode Command Line Tools installed. Follow [these](http://docwiki.embarcadero.com/RADStudio/XE4/en/Installing_the_Xcode_Command_Line_Tools_on_a_Mac) instructions for installing command line tools for your Mac.
3. Visit http://nodejs.org/ 
4. Download the latest version of Node
5. Install the package from the .dmg by following along the install wizard which will install both node and npm, npm is Node Package Manager which facilitates installs of additional packages for node.js.
6. To check if node has been installed and added to your PATH variable correctly, type the following in your terminal:
	```
	$ node -v
	
	$ npm -v
	```
 Both these commands should return a version number.

### Windows

1. Visit http://nodejs.org
2. Download the latest version of Node (32Bit or 64Bit)
3. Install the package from the .exe installer.
4. To check if node has been installed and added to your PATH variable correctly, type the following in your terminal:
	```
	$ node -v
	
	$ npm -v
	```
 Both these commands should return a version number.

### Linux (Instructions tested on Ubuntu 14.04)

#### An old unrelated package called node might exist on your system & may create conflicts. 

Check by running `which node`.
It is best if removed.
	
1. Removing old node:  
 run `dpkg --get-selections | grep node`  
 If it says “install” in the right column, node is on your system.
 
 Remove by executing `sudo apt-get remove --purge node`  
2. Install nodejs  
 `sudo apt-get install nodejs`
3. Install npm  
 `sudo apt-get install npm`
4. To check if node has been installed and added to your PATH variable correctly, type the following in your terminal:
```
 $ node -v

 $ npm -v
 ```
 Both these commands should return a version number.

