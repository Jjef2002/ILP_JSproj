var posts=[
    {      id:1,title:"daily JS news"    },
    {      id:2,title:"daily Python news"    },
    {      id:3,title:"daily C# news"    }];
const show=()=>{
var posts=JSON.parse(localStorage.getItem("posts"));
console.log(posts);
var rowHTML="";
var table=document.getElementById("pcontent");
    posts.forEach(post => {
        rowHTML += `<tr><td>${post.id}</td><td>${post.title}</td></tr>`;    
    
    });
    table.innerHTML=rowHTML;
}

const fillTable=()=>{
    event.preventDefault();
    var table=document.getElementById("pcontent");
    id12=document.getElementById("id");
    title12=document.getElementById("title");
    id1=Number(id12.value);
    title1=title12.value;
    var r1={id:id1,title:title1};
    console.log(r1)
    posts.push(r1);
    localStorage.setItem("posts",JSON.stringify(posts));
    window.location.href="post.html"  }
