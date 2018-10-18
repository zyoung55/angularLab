/*
TODO:
-add delay
-make it cool when they win
*/



var app = angular.module('myApp', [])
.controller('myCtrl', function($scope) {


    $scope.backPic = "https://my-brushes.s3.amazonaws.com/images/vector/412515/preview/bl-Background5.png?v=5";
    $scope.matchPic = "https://oceanexplorer.noaa.gov/facts/pacific-size.jpg";
    
    $scope.array = ['https://www.nationalgeographic.com/content/dam/animals/2018/09/comedy-wildlife-awards-photos/comedy-wildlife-awards-squirel-stop.ngsversion.1537203605960.adapt.1900.1.jpg', 
    'https://pbs.twimg.com/profile_images/378800000831249044/effb57c08b2f5783c686b589d84d2b92.jpeg', 
    'https://hounslowurbanfarm.co.uk/wp-content/uploads/2017/03/img-animal-Willow-the-Barn-Owl.jpg',
    'http://www.top13.net/wp-content/uploads/2016/02/animal-love-3.jpg', 
    'http://chdanimalhusbandry.gov.in/img/13.jpg', 'https://metrouk2.files.wordpress.com/2018/06/4233a94b93ce00ce8274afe4c3b4a818.jpg?quality=80&strip=all&zoom=1&resize=644%2C427',
    'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web03/2012/6/20/12/enhanced-buzz-13209-1340210795-17.jpg?downsize=700:*&output-format=auto&output-quality=auto', 
    'https://cdn.theatlantic.com/assets/media/img/photo/2018/02/animals-on-the-playing-field/a01_545766130/main_900.jpg?1517515869',
    'https://www.nationalgeographic.com/content/dam/animals/2018/09/comedy-wildlife-awards-photos/comedy-wildlife-awards-squirel-stop.ngsversion.1537203605960.adapt.1900.1.jpg', 
    'https://pbs.twimg.com/profile_images/378800000831249044/effb57c08b2f5783c686b589d84d2b92.jpeg', 'https://hounslowurbanfarm.co.uk/wp-content/uploads/2017/03/img-animal-Willow-the-Barn-Owl.jpg',
    'http://www.top13.net/wp-content/uploads/2016/02/animal-love-3.jpg', 'http://chdanimalhusbandry.gov.in/img/13.jpg', 'https://metrouk2.files.wordpress.com/2018/06/4233a94b93ce00ce8274afe4c3b4a818.jpg?quality=80&strip=all&zoom=1&resize=644%2C427',
    'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web03/2012/6/20/12/enhanced-buzz-13209-1340210795-17.jpg?downsize=700:*&output-format=auto&output-quality=auto', 
    'https://cdn.theatlantic.com/assets/media/img/photo/2018/02/animals-on-the-playing-field/a01_545766130/main_900.jpg?1517515869'];
    
    
    $scope.doneArray = [];
    $scope.match = false;
    $scope.numFlipped = 0;
    $scope.firstFlipped = {index: -1, pictureUrl: ""};
    $scope.secondFlipped = {index: -1, pictureUrl: ""};
    
    
    
    $scope.init = function(){
        console.log("init();");
        $scope.setAllOff();
        $scope.firstFlipped.index = -1;
        $scope.firstFlipped.pictureUrl = "";
        $scope.secondFlipped.index = -1;
        $scope.secondFlipped.pictureUrl = "";
        $scope.numFlipped = 0
        $scope.doneArray = [];
      //$scope.randomizePictures(); //uncomment this line before turn in
    }
    
    $scope.sleep = function (milliseconds) {
        console.log("SLEEP();");
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds)
                break;
        }
    }
    
    $scope.setAllOff = function(){
        $scope.zeroZero = $scope.backPic;
        $scope.zeroOne = $scope.backPic;
        $scope.zeroTwo = $scope.backPic;
        $scope.zeroThree = $scope.backPic;
        $scope.oneZero = $scope.backPic;
        $scope.oneOne = $scope.backPic;
        $scope.oneTwo = $scope.backPic;
        $scope.oneThree = $scope.backPic;
        $scope.twoZero = $scope.backPic;
        $scope.twoOne = $scope.backPic;
        $scope.twoTwo = $scope.backPic;
        $scope.twoThree = $scope.backPic;
        $scope.threeZero = $scope.backPic;
        $scope.threeOne = $scope.backPic;
        $scope.threeTwo = $scope.backPic;
        $scope.threeThree = $scope.backPic;
    }
    
    $scope.incrementNumFlipped = function(callbackOne) {
        console.log("incrementNumFlipped(" + "***" + ");\n")
        if ($scope.numFlipped == 0 || $scope.numFlipped == 1) {
             ++$scope.numFlipped;
        }
        callbackOne(arguments[1], arguments[2]); //what does this do?
    }

    $scope.addToFlippedScopeValues = function(arrayIndex, value) {
        console.log("addToFlippedScopeValues(" + arrayIndex + "," + value + ");\n")
        if ($scope.numFlipped == 1) {
            $scope.firstFlipped.index = arrayIndex;
            $scope.firstFlipped.pictureUrl = value;
        }
        if ($scope.numFlipped == 2) {
            $scope.secondFlipped.index = arrayIndex;
            $scope.secondFlipped.pictureUrl = value;
        }
    }
    
    $scope.setPics = function(pic){
        console.log("setPics()");
        $scope.setSinglePic($scope.secondFlipped.index);
        $scope.sleep(1000);
        //pic ='https://cdn.theatlantic.com/assets/media/img/photo/2018/02/animals-on-the-playing-field/a01_545766130/main_900.jpg?1517515869';// $scope.backPic;
        if ($scope.firstFlipped.index == 0 || $scope.secondFlipped.index == 0) {
            $scope.zeroZero = pic;
        }
        if ($scope.firstFlipped.index == 1 || $scope.secondFlipped.index == 1) {
            $scope.zeroOne = pic;
        }
        if ($scope.firstFlipped.index == 2 || $scope.secondFlipped.index == 2) {
            $scope.zeroTwo = pic;
        }
        if ($scope.firstFlipped.index == 3 || $scope.secondFlipped.index == 3) {
            $scope.zeroThree = pic;
        }
        if ($scope.firstFlipped.index == 4 || $scope.secondFlipped.index == 4) {
            $scope.oneZero = pic;
        }
        if ($scope.firstFlipped.index == 5 || $scope.secondFlipped.index == 5) {
            $scope.oneOne = pic;
        }
        if ($scope.firstFlipped.index == 6 || $scope.secondFlipped.index == 6) {
            $scope.oneTwo = pic;
        }
        if ($scope.firstFlipped.index == 7 || $scope.secondFlipped.index == 7) {
            $scope.oneThree = pic;
        }
        if ($scope.firstFlipped.index == 8 || $scope.secondFlipped.index == 8) {
            $scope.twoZero = pic;
        }
        if ($scope.firstFlipped.index == 9 || $scope.secondFlipped.index == 9) {
            $scope.twoOne = pic;
        }
        if ($scope.firstFlipped.index == 10 || $scope.secondFlipped.index == 10) {
            $scope.twoTwo = pic;
        }
        if ($scope.firstFlipped.index == 11 || $scope.secondFlipped.index == 11) {
            $scope.twoThree = pic;
        }
        if ($scope.firstFlipped.index == 12 || $scope.secondFlipped.index == 12) {
            $scope.threeZero = pic;
        }
        if ($scope.firstFlipped.index == 13 || $scope.secondFlipped.index == 13) {
            $scope.threeOne = pic;
        }
        if ($scope.firstFlipped.index == 14 || $scope.secondFlipped.index == 14) {
            $scope.threeTwo = pic;
        }
        if ($scope.firstFlipped.index == 15 || $scope.secondFlipped.index == 15) {
            $scope.threeThree = pic;
        }
    }

    $scope.checkPicture = function() {
        console.log("checkPicture();");
        if ($scope.numFlipped == 0 || $scope.numFlipped == 1) 
            return;

        if ($scope.firstFlipped.pictureUrl == $scope.secondFlipped.pictureUrl) {
            $scope.doneArray.push($scope.firstFlipped.index);
            $scope.doneArray.push($scope.secondFlipped.index);
            $scope.match = true;
        }
        else {
            $scope.match = false;

        }
        $scope.setFlipOff();
    }

    $scope.setFlipOff = function(){
        console.log("setFlipOff();");
        if(!$scope.match){
            $scope.setPics($scope.backPic);
        }
        $scope.firstFlipped.pictureUrl = "";
        $scope.secondFlipped.pictureUrl = "";
        $scope.firstFlipped.index = -1;
        $scope.secondFlipped.index = -1;
        $scope.numFlipped = 0;
        
    }
    
    $scope.flipOverCheck = function(index){
        console.log("flipOverCheck();")
      
        if ($scope.numFlipped == 2 || $scope.firstFlipped.index == index)
            return false;
        for(var i = 0; i < $scope.doneArray.length; i++){
            console.log(i + ":: " + $scope.doneArray[i]);
            if(index == $scope.doneArray[i])
                return false;
        }
        return true;
    }
    
    $scope.setSinglePic = function(index){
        console.log("setSinglePic(" + index);
                index = Math.floor(index/10%10)*4 + Math.floor(index%10);

        if (index == "00") 
            $scope.zeroZero = $scope.array[0];
        if (index == "01") 
            $scope.zeroOne = $scope.array[1];
        if (index == "02") 
            $scope.zeroTwo = $scope.array[2];
        if (index == "03") 
            $scope.zeroThree = $scope.array[3];
        if (index == "10")
            $scope.oneZero = $scope.array[4];
        if (index == "11") 
            $scope.oneOne = $scope.array[5];
        if (index == "12") 
            $scope.oneTwo = $scope.array[6];
        if (index == "13") 
             $scope.oneThree = $scope.array[7];
        if (index == "20") 
            $scope.twoZero = $scope.array[8];
        if (index == "21")
            $scope.twoOne = $scope.array[9];
        if (index == "22")
          $scope.twoTwo = $scope.array[10];
        if (index == "23")
            $scope.twoThree = $scope.array[11];
        if (index == "30")
            $scope.threeZero = $scope.array[12];
        if (index == "31")
            $scope.threeOne = $scope.array[13];
        if (index == "32") 
            $scope.threeTwo = $scope.array[14];
        if (index == "33")
            $scope.threeThree = $scope.array[15];
    }
    
    $scope.flipOver = function(index) {
        console.log("flipOver(" + index + ");")
        var arrIndex = Math.floor(index/10%10)*4 + Math.floor(index%10);
        
        if(!$scope.flipOverCheck(arrIndex))
            return;
         $scope.incrementNumFlipped($scope.addToFlippedScopeValues, arrIndex, $scope.array[arrIndex]);//0, $scope.array[0]);
        
        $scope.setSinglePic(index);
       
        if($scope.numFlipped == 2){
            $scope.checkPicture();
        }
        
        if($scope.doneArray.length >= 16){
            $scope.win();            
        }
    }
    
    $scope.randomizePictures = function() {
        console.log("randomizePictures();");

        var m = $scope.array.length;
        var i, t;
        
        while(m){
            i = Math.floor(Math.random() * m--);
            t = $scope.array[m];
            $scope.array[m] = $scope.array[i];
            $scope.array[i] = t;
        }
    }
    
    $scope.win = function(){
        alert("YOU WIN!");
    }
    
    
})







