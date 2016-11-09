// User model based on the structure of github api at
// https://api.github.com/repos/{reponame}
export interface Repo {
  name: string;
  description: string;
  language: string;
  size: number;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  open_issues_count: number;
  owner: any
}
