import { Octokit as BaseOctokit } from '@octokit/core';
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods';
import { Api } from '@octokit/plugin-rest-endpoint-methods/dist-types/types';

const octokit = BaseOctokit.plugin(restEndpointMethods).defaults({
    userAgent: 'lum-network-website',
});

class GithubUtils {
    private static instance?: GithubUtils;
    octokit: (BaseOctokit & Api) | null = null;

    constructor() {
        this.octokit = new octokit();
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new GithubUtils();
        }

        return this.instance;
    }

    private getWalletRepoInfos = async () => {
        if (!this.octokit) {
            throw new Error('Octokit not initialized');
        }

        return await this.octokit.rest.repos.get({
            owner: 'lum-network',
            repo: 'wallet',
        });
    };

    private getExplorerReposInfos = async () => {
        if (!this.octokit) {
            throw new Error('Octokit not initialized');
        }

        return await this.octokit.rest.repos.get({
            owner: 'lum-network',
            repo: 'explorer',
        });
    };

    private getOpenSourceReposInfos = async () => {
        if (!this.octokit) {
            throw new Error('Octokit not initialized');
        }

        return await this.octokit.rest.repos.listForOrg({
            org: 'lum-network',
            type: 'public',
        });
    };

    getReposInfos = async () => {
        if (!this.octokit) {
            throw new Error('Octokit not initialized');
        }

        let commits = 0;
        let stars = 0;
        let forks = 0;

        try {
            const repos = await this.octokit.rest.repos.listForOrg({
                org: 'lum-network',
                type: 'public',
            });

            for (const repo of repos.data) {
                const [repoCommits, repoInfos] = await Promise.all([
                    this.octokit.rest.repos.listCommits({
                        owner: 'lum-network',
                        repo: repo.name,
                    }),
                    this.octokit.rest.repos.get({
                        owner: 'lum-network',
                        repo: repo.name,
                    }),
                ]);

                commits += repoCommits.data.length;
                stars += repoInfos.data.stargazers_count;
                forks += repoInfos.data.forks_count;
            }

            return {
                commits,
                stars,
                forks,
                openSourceRepos: repos.data.length,
            };
        } catch {
            return {
                commits: null,
                stars: null,
                forks: null,
                openSourceRepos: null,
            };
        }
    };
}

export default GithubUtils.getInstance();
