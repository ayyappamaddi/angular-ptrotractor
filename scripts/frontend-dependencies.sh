echo "Frontedn-dependencies.sh"
npm install
echo 'node modules installed'
npm install -g protractor
echo 'install protractor globally'
webdriver-manager shutdown
webdriver-manager update --standalone  --gecko false
webdriver-manager start
npm run e2e
echo 'e2e test cases executed.'
