echo "Frontedn-dependencies.sh"
npm install
echo 'node modules installed'
npm install -g protractor
echo 'install protractor globally'
npm run e2e
echo 'e2e test cases executed.'
