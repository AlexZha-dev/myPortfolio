const PROJECT_HASH_PREFIX = '#project/'

export function buildProjectHash(projectId: string) {
  return `${PROJECT_HASH_PREFIX}${projectId}`
}

export function parseProjectHash(hash: string) {
  if (!hash.startsWith(PROJECT_HASH_PREFIX)) {
    return null
  }

  return hash.slice(PROJECT_HASH_PREFIX.length) || null
}
