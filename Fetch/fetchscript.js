const userList = document.getElementById("root");

fetch('https://jsonplaceholder.typicode.com/comments')
.then(res=>{
   return res.json()
})
.then((resdata)=> { 
    let tableValue=""
     resdata.forEach((user) => {
        tableValue += `<tr>
        <td></td>
        <td></td>
        <td></td>
        </tr>`
       // const userdiv = document.createElement("div");
//         userdiv.classList.add('card')
//         userdiv.innerHTML = `
//                         <div id="card-body">
//                             <h4 class="card-title mb-2">${user.name}</h5>
//                             <h5 class="card-text mb-2 ">Email${user.email}</h5>
//                             <p class="card-text">${user.body}</p>
//                         </div>`;
//       userList.appendChild(userdiv)
//         // const list = `<li>${user.name}</li>`

//         // document.querySelector('ul').insertAdjacentHTML('beforeend',list)
    

    });
    document.getElementById("table_body").innerHTML= tableValue
})
.catch(error=>console.log(error))
