# twig-test
Steps to start the application

1: git clone "https://github.com/gayathri7/twig-test.git"
2: After clone install the packages: npm install
3: To start the server: npm start
4: Please use below postman curl which will return the contents of the array into equally sized arrays by taking array and size as inputs

Sample Curls:
A: curl --location --request POST 'http://localhost:8090/divideArrayToNParts' \
--header 'Content-Type: application/json' \
--data-raw '{
    "Arr": [1,2,3,4,5],
    "N": 3
}'
B) curl --location --request POST 'http://localhost:8090/divideArrayToNParts' \
--header 'Content-Type: application/json' \
--data-raw '{
    "Arr": [1,2,3,4,5,6,7],
    "N": 4
}'
5: import the curl in postman or test them in git bash by changing the Arr or N value for different cases
6: To run the test suite: npm test
