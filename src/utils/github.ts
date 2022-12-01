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

    private getCommitsCount = async () => {
        if (!this.octokit) {
            throw new Error('Octokit not initialized');
        }

        const [walletCommits, explorerCommits] = await Promise.all([
            this.octokit.rest.repos.listCommits({
                owner: 'lum-network',
                repo: 'wallet',
            }),
            this.octokit.rest.repos.listCommits({
                owner: 'lum-network',
                repo: 'explorer',
            }),
        ]);

        return walletCommits.data.length + explorerCommits.data.length;
    };

    getReposInfos = async () => {
        const [walletRepoInfos, explorerRepoInfos, openSourceReposInfos, commits] = await Promise.all([
            this.getWalletRepoInfos(),
            this.getExplorerReposInfos(),
            this.getOpenSourceReposInfos(),
            this.getCommitsCount(),
        ]);

        return {
            wallet: {
                forks: walletRepoInfos.data.forks_count,
                stars: walletRepoInfos.data.stargazers_count,
            },
            explorer: {
                forks: explorerRepoInfos.data.forks_count,
                stars: explorerRepoInfos.data.stargazers_count,
            },
            openSourceRepos: openSourceReposInfos.data.length,
            commits,
        };
    };
}

export default GithubUtils.getInstance();
