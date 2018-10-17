var app = angular.module('myApp', [])
.controller('myCtrl', function($scope) {
    
    $scope.zeroZero = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.zeroOne = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.zeroTwo = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.zeroThree = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.oneZero = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.oneOne = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.oneTwo = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.oneThree = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.twoZero = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.twoOne = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.twoTwo = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.twoThree = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.threeZero = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.threeOne = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.threeTwo = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.threeThree = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    
    
    $scope.array = ['https://www.nationalgeographic.com/content/dam/animals/2018/09/comedy-wildlife-awards-photos/comedy-wildlife-awards-squirel-stop.ngsversion.1537203605960.adapt.1900.1.jpg', 
    'https://pbs.twimg.com/profile_images/378800000831249044/effb57c08b2f5783c686b589d84d2b92.jpeg', 'https://hounslowurbanfarm.co.uk/wp-content/uploads/2017/03/img-animal-Willow-the-Barn-Owl.jpg',
    'http://www.top13.net/wp-content/uploads/2016/02/animal-love-3.jpg', 'http://chdanimalhusbandry.gov.in/img/13.jpg', 'https://metrouk2.files.wordpress.com/2018/06/4233a94b93ce00ce8274afe4c3b4a818.jpg?quality=80&strip=all&zoom=1&resize=644%2C427',
    'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web03/2012/6/20/12/enhanced-buzz-13209-1340210795-17.jpg?downsize=700:*&output-format=auto&output-quality=auto', 
    'https://cdn.theatlantic.com/assets/media/img/photo/2018/02/animals-on-the-playing-field/a01_545766130/main_900.jpg?1517515869',
    'https://www.nationalgeographic.com/content/dam/animals/2018/09/comedy-wildlife-awards-photos/comedy-wildlife-awards-squirel-stop.ngsversion.1537203605960.adapt.1900.1.jpg', 
    'https://pbs.twimg.com/profile_images/378800000831249044/effb57c08b2f5783c686b589d84d2b92.jpeg', 'https://hounslowurbanfarm.co.uk/wp-content/uploads/2017/03/img-animal-Willow-the-Barn-Owl.jpg',
    'http://www.top13.net/wp-content/uploads/2016/02/animal-love-3.jpg', 'http://chdanimalhusbandry.gov.in/img/13.jpg', 'https://metrouk2.files.wordpress.com/2018/06/4233a94b93ce00ce8274afe4c3b4a818.jpg?quality=80&strip=all&zoom=1&resize=644%2C427',
    'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web03/2012/6/20/12/enhanced-buzz-13209-1340210795-17.jpg?downsize=700:*&output-format=auto&output-quality=auto', 
    'https://cdn.theatlantic.com/assets/media/img/photo/2018/02/animals-on-the-playing-field/a01_545766130/main_900.jpg?1517515869'];
    
    $scope.numFlipped = 0;
    $scope.firstFlipped = {index: "", pictureUrl: ""};
    $scope.secondFlipped = {index: "", pictureUrl: ""};
    
    $scope.incrementNumFlipped = function() {
        if ($scope.numFlipped == 0 || $scope.numFlipped == 1) {
             ++$scope.numFlipped;
        }
        console.log("NumberFlipped:", $scope.numFlipped);
        /*if ($scope.numFlipped == 2) {
            $scope.numFlipped = 0;
        }*/
    }
    $scope.addToFlippedScopeValues = function(arrayIndex, value) {
        if ($scope.numFlipped == 1) {
            $scope.firstFlipped.index = arrayIndex;
            $scope.firstFlipped.pictureUrl = value;
        }
        if ($scope.numFlipped == 2) {
            $scope.secondFlipped.index = arrayIndex;
            $scope.secondFlipped.pictureUrl = value;
        }
        console.log("firstFlipped:", $scope.firstFlipped);
        console.log("secondFlipped", $scope.secondFlipped);
    }
    
    $scope.checkPicture = function() {
        if ($scope.numFlipped == 1) {
            alert("One");
            return;
        } 
        if ($scope.numFlipped == 2) {
            if ($scope.firstFlipped.pictureUrl == $scope.secondFlipped.pictureUrl) {
                $scope.array[$scope.firstFlipped.index] = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                $scope.array[$scope.secondFlipped.index] = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                alert("wow");
            }
            else {
                $scope.firstFlipped.pictureUrl = "";
                $scope.secondFlipped.pictureUrl ="";
                $scope.firstFlipped.index = "";
                $scope.secondFlipped.index = "";
                $scope.numFlipped = 0;
            }
        }
    }
    
    $scope.flipOver = function(index) {
        if (index == "00") {
            $scope.zeroZero = $scope.array[0];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(0, $scope.array[0]);
            $scope.checkPicture();
            console.log("Zero Zero:", $scope.zeroZero);
            $scope.zeroZero = $scope.array[0];
        }
        if (index == "01") {
            $scope.zeroOne = $scope.array[1];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(1, $scope.array[1]);
        }
        if (index == "02") {
            $scope.zeroTwo = $scope.array[2];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(2, $scope.array[2]);
        }
        if (index == "03") {
            $scope.zeroThree = $scope.array[3];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(3, $scope.array[3]);
        }
        if (index == "10") {
            $scope.oneZero = $scope.array[4];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(4, $scope.array[4]);
        }
        if (index == "11") {
            $scope.oneOne = $scope.array[5];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(5, $scope.array[5]);
        }
        if (index == "12") {
            $scope.oneTwo = $scope.array[6];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(6, $scope.array[6]);
        }
        if (index == "13") {
            $scope.oneThree = $scope.array[7];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(7, $scope.array[7]);
        }
        if (index == "20") {
            $scope.twoZero = $scope.array[8];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(8, $scope.array[8]);
            $scope.checkPicture();
            $scope.twoZero = $scope.array[8];
        }
        if (index == "21") {
            $scope.twoOne = $scope.array[9];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(9, $scope.array[9]);
        }
        if (index == "22") {
            $scope.twoTwo = $scope.array[10];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(10, $scope.array[10]);
        }
        if (index == "23") {
            $scope.twoThree = $scope.array[11];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(11, $scope.array[11]);
        }
        if (index == "30") {
            $scope.threeZero = $scope.array[12];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(12, $scope.array[12]);
        }
        if (index == "31") {
            $scope.threeOne = $scope.array[13];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(13, $scope.array[13]);
        }
        if (index == "32") {
            $scope.threeTwo = $scope.array[14];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(14, $scope.array[14]);
        }
        if (index == "33") {
            $scope.threeThree = $scope.array[15];
            $scope.incrementNumFlipped();
            $scope.addToFlippedScopeValues(15, $scope.array[15]);
        }
        
        /*if ($scope.numFilled == 0) {
            ++$scope.numFilled;
            $scope.firstFlipped = 
        }
        if ($scope.numFlipped == 1) {
            
        }*/
    }
    
    $scope.randomizePictures = function() {
        var tempArray = [];
        var endIndex = array.length - 1;
        for (var i = 0; i < array.length / 2; ++i) {
            tempArray[i] = $scope.array[endIndex - i];
            tempArray[endIndex - i] = $scope.array[i]
        }
    }
})

//Todo:
/*
randomizePicture function.
assign pictures to indexes.
note: we can randomize by swapping and then get a random
number and swap that amount of times. 

do on click for pictures
do something when the pictures match vs. don't match

function when they win: 
tell them they won and re-randomize

*/