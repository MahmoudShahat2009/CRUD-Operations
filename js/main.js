
var  SiteNameInput = document.getElementById("inputName");
var  SiteURLInput = document.getElementById("inputUrl");


var  allSiets=[];
if(localStorage.getItem("allSiets") !=null){

    allSiets = JSON.parse (localStorage.getItem("allSiets"))
    displayAllSites();
}


// Add site 
function addWebsiteFavorite() {

var site = {
            name : SiteNameInput.value,
            site : SiteURLInput.value
        }
    
    allSiets.push(site);
    localStorage.setItem("allSiets" , JSON.stringify(allSiets));
    clearForm()
    displayAllSites()

   console.log(allSiets);
}

// clear form 

function clearForm(){
    SiteNameInput.value ="";
    SiteURLInput.value  ="";
}


//  display sites
function displayAllSites(){
     
    allWebSites= "";
 for (var i = 0;  i<allSiets.length; i++) {

    // allSiets[i] 
   
    allWebSites +=   ` <tr>
    <td> ${i + 1 } </td>
    <td> ${allSiets[i].name} </td>
    <td>
         <a href="${allSiets[i].site} " target="_blank"> 
            <button class="btn btn-primary px-4"> <i class="fa-brands fa-golang" id="visit"></i> VISIT</button>
        </a>    
    </td>
    <td><button  onclick= "deleteElemint( ${ i } )"  class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete </button></td>
</tr>`
 }
  
    document.getElementById('tbody').innerHTML=  allWebSites;
  
}
//    delete item 
function deleteElemint( idx ){
      
    allSiets.splice ( idx , 1 );
    localStorage.setItem("allSiets" , JSON.stringify(allSiets));

    displayAllSites()
}


function validatInput(){
    
    var regexName = /^[a-z]{3,4}$/gm
     
    
    return regexName.test (SiteNameInput.value);
}
if(validatInput()){
    console.log(SiteNameInput.value);
}


