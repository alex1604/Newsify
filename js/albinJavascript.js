window.onload = function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    let commentContainer = document.getElementsByClassName("commentContainer")[0];
    let commentButton = document.getElementById("commentButton");
    let loginBtn = document.getElementById("login");
    let logoutBtn = document.getElementById("logout");
    let profileContainer = document.getElementsByClassName("profileContainer")[0];
    
    commentButton.addEventListener("click", function(event){
        makeComment();
    });
    
    loginBtn.addEventListener("click", function(event){
        console.log("Clicked login");
        firebase.auth().signInWithPopup(provider).then(function(result){
            profileContainer.children[0].innerText = result.user.displayName;
            profileContainer.children[1].src = result.user.photoURL;
            console.log(result.user.photoURL);
        }).catch(function(error){
        console.log("Error: " + error);
        })
    });
    logoutBtn.addEventListener("click", function(event){
        console.log("Clicked logout");
        firebase.auth().signOut().then(function(){
            console.log("Signed out");
        }).catch(function(error){
        console.log("Error: " + error);
        })
    });
    
    document.getElementById("commentInput").addEventListener("keyup", function(event){
        if (event.key === "Enter"){
            makeComment();
        }
    })

    let makeComment = function(event){
        //adds current text in commenter field to the commentContainer with all relevant information. Login and database not yet implemented
        var current = new Date();
        var text = document.getElementById("commentInput").value;
        document.getElementById("commentInput").value = "";
        var commentDiv = document.createElement("div");
        var userDiv = document.createElement("div");
        var commentImage = document.createElement("img");
        var textDiv = document.createElement("div");
        var timeDiv = document.createElement("div");
        var commentObj = {
        user: {
        //name: logged in username,
        //image: logged in user image,
        },
        text: text,
        };
        commentDiv.className = "commentDiv";
        userDiv.className = "userDiv";
        commentImage.className = "commentImage";
        textDiv.className = "textDiv";
        timeDiv.className = "timeDiv";
        userDiv.innerText = /* username, use local storage? */ "Aengman";
        timeDiv.innerText = current.toLocaleDateString() + " " + current.toLocaleTimeString();
        commentImage.src = /* user image*/ "https://lh3.googleusercontent.com/-Y6nqQ5p0nvM/AAAAAAAAAAI/AAAAAAAAAGI/67YdkO3_XKk/photo.jpg";
        textDiv.innerText = text;
        commentDiv.append(commentImage);
        commentDiv.append(userDiv);
        commentDiv.append(timeDiv);
        commentDiv.append(textDiv);
        commentContainer.prepend(commentDiv);
    }
}