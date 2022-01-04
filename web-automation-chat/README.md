Chat Page test automation by Valters Steinblums.
Page under test - https://demos.mqtt.cool/chat/
Project is built with node version 14.17.4, npm version 6.14.14

The code might not look like much, could have done better I suppose.
But it still works :)

- To run the test - clone, fork or download to your machine.
- Go in to the terminal and cd into the target folder.
- Once you’re in the target folder run the command: **npm install**
- After all the necessary files have been downloaded, to execute the test run the command: **npm run multi**
- If you wish to look at the results in a more pleasant way, do that via allure reporter.
- You also should add the allure-results folder, since I've removed it.
Run command: **allure generate ./allure-results --clean && allure open**
- Jenkins setup and execution https://drive.google.com/drive/folders/1gW1-yssY-lFPv2l0jx4yRcrdDZxN4GJH?usp=sharing

