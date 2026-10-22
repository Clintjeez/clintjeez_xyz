import React from 'react'
import ActivityGraph from '../components/ActivityGraph'
import { getGithubActivity, GITHUB_USERNAME } from '../lib/github'

const ActivityOverview = async () => {
  const activity = await getGithubActivity()
  if (!activity) return null

  return (
    <section aria-label="GitHub activity" className="mb-20">
      <ActivityGraph activity={activity} profileUrl={`https://github.com/${GITHUB_USERNAME}`} />
    </section>
  )
}

export default ActivityOverview
