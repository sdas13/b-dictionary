angular.module('app',[])
       .controller('appctrl',function($scope,$http){
			
			$scope.search=function(){
				var url='http://192.168.1.5:3001/api/word/guru';
				$http.get(url).then(function(response){
				//$http.get('data/data.json').then(function(response){
					console.log(response)
					$scope.data=response.data.filter(function(elem){
						return elem.Word.toLowerCase()==$scope.searchterm.toLowerCase()
					})
					//console.log(data,data.length)
					if($scope.data.length!=0){
						$scope.word=$scope.data[0].Word;
						$scope.meanings=$scope.data[0].meaning.split(';');
						console.log($scope.meanings)					
						storeHistory($scope.data[0]);
						
					}
					else{
						$scope.word='No meaning found'
						$scope.meanings=[]		
					}
					
				})
			}
			
			
			$scope.loadHistory=function(){
				
			      $scope.nothingSaved=false;
				  
				  if(localStorage.history){
						$scope.savedWords=JSON.parse(localStorage.history)
				  }
				  else{
					  $scope.nothingSaved=true;
				  }
			
			}
			
		
		})

		
			function storeHistory(param){
						
					if(localStorage.history){
						var history=JSON.parse(localStorage.history)
						var isPresent=history.some(function(elem){
							return elem.Word==param.Word;
						})
						if(!isPresent){
						history.push(param)
						localStorage.history=JSON.stringify(history)
						}
					}
					else{
						var history=[]
						history.push(param)
						localStorage.history=JSON.stringify(history)
					}
			}		