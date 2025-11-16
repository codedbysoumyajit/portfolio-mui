// src/hooks/useGitHubRepo.js
import { useEffect, useState } from 'react';

export default function useGitHubRepo(repoPath) {
  const [data, setData] = useState({
    stars: null,
    forks: null,
    updated: null,
  });

  useEffect(() => {
    if (!repoPath) return;

    const cacheKey = `repo_${repoPath}`;
    const cached = sessionStorage.getItem(cacheKey);

    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        setData(parsed);
      } catch {
        // ignore parse error, will refetch
      }
    }

    fetch(`https://api.github.com/repos/${repoPath}`)
      .then((res) => res.json())
      .then((repo) => {
        if (!repo || repo.message === 'Not Found') return;

        const formatted = {
          stars:
            typeof repo.stargazers_count === 'number'
              ? repo.stargazers_count
              : 0,
          forks:
            typeof repo.forks_count === 'number'
              ? repo.forks_count
              : 0,
          updated: repo.pushed_at || null,
        };

        setData(formatted);
        sessionStorage.setItem(cacheKey, JSON.stringify(formatted));
      })
      .catch(() => {
        // on error, keep whatever was in state (cached or nulls)
      });
  }, [repoPath]);

  return data;
}