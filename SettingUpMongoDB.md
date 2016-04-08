## Installing MongoDB

MongoDB is a cross-platform document-oriented (NoSQL) database.

We've provided the install instructions for Windows, Mac OS X and Ubuntu.

### Mac OS X

1. Fire up your terminal
2. Ensure you have installed Xcode Command Line Tools installed. Follow [these](http://docwiki.embarcadero.com/RADStudio/XE4/en/Installing_the_Xcode_Command_Line_Tools_on_a_Mac) instructions for installing command line tools for your Mac.
3. Make sure you have Homebrew installed. Run this command:  
 ```  
 /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
 ```
4. Run:  
 ```  
 brew update
 
 brew install mongodb
 ```

5. Check if mongodb was installed successfully, running these commands should give you the versions installed.
  If it says command not found, then something went wrong.
  ```  
  mongo --version  
  
  mongod --version
  ```
 
 
### Windows

1. Visit https://www.mongodb.org/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-3.2.4-signed.msi/download
2. Follow the installer instructions. 
3. Phew that was easy! =P


### Ubuntu - apt for 64 Bit Ubuntu LTS 12.04 and 14.04

Note: You will be asked to use your password for executing commands in sudo mode.

1. Import the public key for the package management system  
  ```  
  sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
  ```
  
2. Create the list file.

  a. For **Ubuntu 12.04**
  ```
  echo "deb http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
  ```
  
  b. For **Ubuntu 14.04**
  ```
  echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
  ```
  
3. Then run the following commands:
  
  a. `sudo apt-get update`

  b. `sudo apt-get install -y mongodb-org`  
    This will install the latest stable version of mondodb

4. Start the mongodb service (daemon)  
  `sudo service mongod start`
  
5. Check if mongodb was installed successfully, running these commands should give you the versions installed.
  If it says command not found, then something went wrong.
  ```  
  mongo --version  
  
  mongod --version
  ```
  
6. Rejoice! =P
