class Github
{
    constructor()
    {
        this.client_id = 'cf0b4ce12c5fff8a975e';
        this.client_secrets = '898ca6e43dceed958c853202f9f6f38abf5156ef';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser (user)
    {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secrets}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secrets}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
             profile ,
            repos
        }
     }
}