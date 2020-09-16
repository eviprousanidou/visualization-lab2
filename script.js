// TODO: load the dataset 

let attractions;
fetch('attractions.json')
    .then(response => response.json())
    .then(data => {
        attractions = data;


        function filterData(category){
            /* **************************************************
	        *
	        * TODO: filter attractions by the selected category
	        * TODO: filter top 5 attractions
	        *
	        * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	        *
	        * renderBarChart(data)
	        *
	        * - 'data' must be an array of JSON objects
	        * - the max. length of 'data' is 5
	        *
	        * **************************************************/

            if (category.value == null|| category.value == "all" ) {

                //sort the data on visitors
                attractions.sort(function(a,b){
                    return a.visitors > b.visitors;
                });

                //get topfive
                let topfive = attractions.slice(0,5);

                //get BarChart with topfive
                renderBarChart(topfive);

            } 
            else {

                //Filter data according to the category selected

                let filteredData = attractions.filter(function(a){
                    return a.Category == category.value;
                });

                //sort the data on visitors
                filteredData.sort((a,b)=>{
                    return a.visitors > b.visitors;
                });

                //get topfive
                let topfive = filteredData.slice(0,5);

                //get BarChart with topfive
                renderBarChart(topfive);
            }
        }


        // TODO: Define an event listener for the dropdown menu
        //       Call filterData with the selected category

        let selectBox = document.querySelector("#attraction-category");

        filterData(selectBox);

        selectBox.addEventListener('change',changeFunction);

        function changeFunction(){
            filterData(selectBox);
        }
      
    })

