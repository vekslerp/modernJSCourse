class Github {
  constructor() {
    this.client_id = 'e68722fbde87fd62ea8e';
    this.client_secret = '06b521693fb2d8ad0d0100a096beb790a9b30a61';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      // same as 'profile: profile'
      profile,
      repos
    }
  }

}