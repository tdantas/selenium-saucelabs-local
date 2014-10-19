# Setup

##### Download selenium

	$ curl -O http://selenium-release.storage.googleapis.com/2.43/selenium-server-standalone-2.43.1.jar
	

##### Download Sauce Connect
	https://docs.saucelabs.com/reference/sauce-connect/ 
	
##### Clone Repo
	git clone https://github.com/tdantas/selenium-saucelabs-local.git
	



# Let’s Start 


##### Start the Sauce Connect

	.bin/sc  -u <SAUCELABS_USER> -k <SAUCELABS_KEY>
	 wait until:
		18 Oct 20:35:07 - Connection established.
	
##### Start your local selenium
	java -jar ./selenium-server-standalone-2.43.1.jar
	
##### Install the code dependencies
	cd selenium-saucelabs-local
	npm install
	

## Running Tests

##### Saucelabs tests
	$ export SAUCE_ACCESS_KEY=<YOUR_ACCESS_KEY>
	$ export SAUCE_USERNAME=<YOUR_USERNAME>
	$ npm run-script saucelabstest
	
	# the config.js file inside test folder has the options to saucelabs 
	
##### Running with your local selenium
	$ npm test
	