const ui = new UI;
const github = new Github;

//search input
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener('keyup', (e) =>
{
    //get input text
    const userText = e.target.value;

    if (userText != '') {
        //make http call
        github.getUser(userText).then(data =>
        {
            if (data.profile.message === 'Not Found') {
                ui.showAlert("UserNot Found", "alert alert-danger")
            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }
    else {
        ui.clearProfile();
    }
});
