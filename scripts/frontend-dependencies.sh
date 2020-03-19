echo "Frontedn-dependencies.sh"
npm install
echo 'node modules installed'
export DISPLAY=":20"
npm install protractor -g
echo 'installed protractor globally'
webdriver-manager shutdown
webdriver-manager update --standalone  --gecko false
webdriver-manager start --detach
npm run e2e
echo 'e2e test cases executed.'
