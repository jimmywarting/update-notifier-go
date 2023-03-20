/*! update-notifier-go. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */

/**
 * @param {string} name The name of the module.
 * @param {string} version The version of the module.
 */
export function updateNotifier (name, version) {
  return globalThis.fetch ? fetch('https://registry.npmjs.org/' + name)
    .then(res => res.json())
    .then(json => {
      const latest = json['dist-tags'].latest.split('-')[0]

      if (latest.localeCompare(version, 'en', { numeric: true }) === 1) {
        const msg = `New version of "${name}" is available: ${version} → ${latest}`
        console.info(
          `\n${'='.repeat(msg.length)}\n${msg}\n${'='.repeat(msg.length)}\n\n`
        )
      }
    })
    .catch(() => { }) : void 0
}
