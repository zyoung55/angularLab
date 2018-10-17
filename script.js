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
    
    $scope.incrementNumFlipped = function(callbackOne) {
        if ($scope.numFlipped == 0 || $scope.numFlipped == 1) {
             ++$scope.numFlipped;
        }
        console.log("NumberFlipped:", $scope.numFlipped);
        callbackOne(arguments[1], arguments[2]);
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
        } 
        if ($scope.numFlipped == 2) {
            alert("wowo"); 
            console.log("Money!");
            if ($scope.firstFlipped.pictureUrl == $scope.secondFlipped.pictureUrl) {
                alert("They matched! Great job!");
                if ($scope.firstFlipped.index == 0 || $scope.secondFlipped.index == 0) {
                    $scope.zeroZero = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                    console.log("did i make it 1?");
                }
                if ($scope.firstFlipped.index == 1 || $scope.secondFlipped.index == 1) {
                    $scope.zeroOne = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                    console.log("did i make it 2?");
                }
                if ($scope.firstFlipped.index == 2 || $scope.secondFlipped.index == 2) {
                    $scope.zeroTwo = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                }
                if ($scope.firstFlipped.index == 3 || $scope.secondFlipped.index == 3) {
                    $scope.zeroThree = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                }
                if ($scope.firstFlipped.index == 4 || $scope.secondFlipped.index == 4) {
                    $scope.oneZero = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                }
                if ($scope.firstFlipped.index == 5 || $scope.secondFlipped.index == 5) {
                    $scope.oneOne = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                }
                if ($scope.firstFlipped.index == 6 || $scope.secondFlipped.index == 6) {
                    $scope.oneTwo = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                }
                if ($scope.firstFlipped.index == 7 || $scope.secondFlipped.index == 7) {
                    $scope.oneThree = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                }
                if ($scope.firstFlipped.index == 8 || $scope.secondFlipped.index == 8) {
                    $scope.twoZero = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                }
                if ($scope.firstFlipped.index == 9 || $scope.secondFlipped.index == 9) {
                    $scope.twoOne = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                }
                if ($scope.firstFlipped.index == 10 || $scope.secondFlipped.index == 10) {
                    $scope.twoTwo = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                }
                if ($scope.firstFlipped.index == 11 || $scope.secondFlipped.index == 11) {
                    $scope.twoThree = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                }
                if ($scope.firstFlipped.index == 12 || $scope.secondFlipped.index == 12) {
                    $scope.threeZero = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                }
                if ($scope.firstFlipped.index == 13 || $scope.secondFlipped.index == 13) {
                    $scope.threeOne = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                }
                if ($scope.firstFlipped.index == 14 || $scope.secondFlipped.index == 14) {
                    $scope.threeTwo = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                }
                if ($scope.firstFlipped.index == 15 || $scope.secondFlipped.index == 15) {
                    $scope.threeThree = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
                }
            }
            else {
                alert("They didn't match :(. Try again!");
                console.log("did i make it?");
                if ($scope.firstFlipped.index == 0 || $scope.secondFlipped.index == 0) {
                    $scope.zeroZero = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                    console.log("did i make it 1?");
                }
                if ($scope.firstFlipped.index == 1 || $scope.secondFlipped.index == 1) {
                    $scope.zeroOne = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                    console.log("did i make it 2?");
                }
                if ($scope.firstFlipped.index == 2 || $scope.secondFlipped.index == 2) {
                    $scope.zeroTwo = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                }
                if ($scope.firstFlipped.index == 3 || $scope.secondFlipped.index == 3) {
                    $scope.zeroThree = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                }
                if ($scope.firstFlipped.index == 4 || $scope.secondFlipped.index == 4) {
                    $scope.oneZero = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                }
                if ($scope.firstFlipped.index == 5 || $scope.secondFlipped.index == 5) {
                    $scope.oneOne = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                }
                if ($scope.firstFlipped.index == 6 || $scope.secondFlipped.index == 6) {
                    $scope.oneTwo = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                }
                if ($scope.firstFlipped.index == 7 || $scope.secondFlipped.index == 7) {
                    $scope.oneThree = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                }
                if ($scope.firstFlipped.index == 8 || $scope.secondFlipped.index == 8) {
                    $scope.twoZero = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                }
                if ($scope.firstFlipped.index == 9 || $scope.secondFlipped.index == 9) {
                    $scope.twoOne = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                }
                if ($scope.firstFlipped.index == 10 || $scope.secondFlipped.index == 10) {
                    $scope.twoTwo = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                }
                if ($scope.firstFlipped.index == 11 || $scope.secondFlipped.index == 11) {
                    $scope.twoThree = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                }
                if ($scope.firstFlipped.index == 12 || $scope.secondFlipped.index == 12) {
                    $scope.threeZero = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                }
                if ($scope.firstFlipped.index == 13 || $scope.secondFlipped.index == 13) {
                    $scope.threeOne = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                }
                if ($scope.firstFlipped.index == 14 || $scope.secondFlipped.index == 14) {
                    $scope.threeTwo = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                }
                if ($scope.firstFlipped.index == 15 || $scope.secondFlipped.index == 15) {
                    $scope.threeThree = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
                }
            }
            $scope.firstFlipped.pictureUrl = "";
            $scope.secondFlipped.pictureUrl = "";
            $scope.firstFlipped.index = "";
            $scope.secondFlipped.index = "";
            $scope.numFlipped = 0;
        }
    }
    
    $scope.reupdatePicture = function(updateScopeValue) {
        console.log("hi");
    }
    
    $scope.flipOver = function(index) {
        if (index == "00") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.zeroZero = $scope.array[0];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 0, $scope.array[0]);
        }
        
        if (index == "01") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.zeroOne = $scope.array[1];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 1, $scope.array[1]);
        }
        
        if (index == "02") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.zeroTwo = $scope.array[2];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 2, $scope.array[2]);
        }
        
        if (index == "03") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.zeroThree = $scope.array[3];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 3, $scope.array[3]);
        }
        
        if (index == "10") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.oneZero = $scope.array[4];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 4, $scope.array[4]);
        }
        
        if (index == "11") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.oneOne = $scope.array[5];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 5, $scope.array[5]);
        }
        
        if (index == "12") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.oneTwo = $scope.array[6];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 6, $scope.array[6]);
        }
        
        if (index == "13") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.oneThree = $scope.array[7];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 7, $scope.array[7]);
        }
        
        if (index == "20") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.twoZero = $scope.array[8];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 8, $scope.array[8]);
        }
        
        if (index == "21") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.twoOne = $scope.array[9];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 9, $scope.array[9]);
        }
        
        if (index == "22") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.twoTwo = $scope.array[10];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 10, $scope.array[10]);
        }
        
        if (index == "23") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.twoThree = $scope.array[11];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 11, $scope.array[11]);
        }
        
        if (index == "30") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.threeZero = $scope.array[12];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 12, $scope.array[12]);
        }
        
        if (index == "31") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.threeOne = $scope.array[13];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 13, $scope.array[13]);
        }
        
        if (index == "32") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.threeTwo = $scope.array[14];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 14, $scope.array[14]);
        }
        
        if (index == "33") {
            if ($scope.numFlipped == 2) {
                alert("You can't flip more than two pictures");
                return;
            }
            $scope.threeThree = $scope.array[15];
            $scope.incrementNumFlipped($scope.addToFlippedScopeValues, 15, $scope.array[15]);
        }
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


/*
        if (updateScopeValue == 0) {
            $scope.zeroZero = $scope.array[updateScopeValue];
            console.log("zeroZero Now!!!", $scope.zeroZero);
            console.log("updateScopeValue:", updateScopeValue);
        }
         if (updateScopeValue == 1) {
            $scope.zeroOne = $scope.array[updateScopeValue];
            console.log("zeroOne Now!!!", $scope.zeroOne);
            console.log("updateScopeValue:", updateScopeValue);
        }
        if (updateScopeValue == 2) {
            $scope.zeroTwo = $scope.array[updateScopeValue];
            console.log("zeroTwo Now!!!", $scope.zeroTwo);
            console.log("updateScopeValue:", updateScopeValue);
        }
        if (updateScopeValue == 3) {
            $scope.zeroThree = $scope.array[updateScopeValue];
            console.log("zeroOne Now!!!", $scope.zeroThree);
        }
        if (updateScopeValue == 4) {
            $scope.oneZero = $scope.array[updateScopeValue];
            console.log("zeroOne Now!!!", $scope.oneZero);
        }
        if (updateScopeValue == 5) {
            $scope.oneOne = $scope.array[updateScopeValue];
            console.log("zeroOne Now!!!", $scope.zeroOne);
        }
        if (updateScopeValue == 6) {
            $scope.oneTwo = $scope.array[updateScopeValue];
            console.log("zeroOne Now!!!", $scope.zeroOne);
        }
        if (updateScopeValue == 7) {
            $scope.oneThree = $scope.array[updateScopeValue];
            console.log("zeroOne Now!!!", $scope.zeroOne);
        }
        if (updateScopeValue == 8) {
            $scope.twoZero = $scope.array[updateScopeValue];
            console.log("zeroOne Now!!!", $scope.zeroOne);
        }
        if (updateScopeValue == 9) {
            $scope.twoOne = $scope.array[updateScopeValue];
            console.log("zeroOne Now!!!", $scope.zeroOne);
        }
        if (updateScopeValue == 10) {
            $scope.twoTwo = $scope.array[updateScopeValue];
            console.log("zeroOne Now!!!", $scope.zeroOne);
        }
        if (updateScopeValue == 11) {
            $scope.twoThree = $scope.array[updateScopeValue];
            console.log("zeroOne Now!!!", $scope.zeroOne);
        }
        if (updateScopeValue == 12) {
            $scope.threeZero = $scope.array[updateScopeValue];
            console.log("zeroOne Now!!!", $scope.zeroOne);
        }
        if (updateScopeValue == 13) {
            $scope.threeOne = $scope.array[updateScopeValue];
            console.log("zeroOne Now!!!", $scope.zeroOne);
        }
        if (updateScopeValue == 14) {
            $scope.threeTwo = $scope.array[updateScopeValue];
            console.log("zeroOne Now!!!", $scope.zeroOne);
        }
        if (updateScopeValue == 15) {
            $scope.threeThree = $scope.array[updateScopeValue];
            console.log("zeroOne Now!!!", $scope.zeroOne);
        }*/