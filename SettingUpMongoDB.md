### Mac OS X




### Windows

1. Visit https://www.mongodb.org/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-3.2.4-signed.msi/download
2. Follow instructions


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
  mongo -v  
  
  mongod -v
  ```
  
6. Rejoice! =P
