/*! update-notifier-go. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */

/**
 * @param {string} name The name of the module.
 * @param {string} version The version of the module you are using.
 */
export async function updateNotifier(name,version){await globalThis.fetch?.('https://registry.npmjs.org/'+name).then(e=>e.json()).then((a)=>{var i=a['dist-tags'].latest.split('-')[0],s=`New version of "${name}" is available: ${version} → `+i,n='\n',o=n+'='.repeat(s.length)+n;i.localeCompare(version,'en',{numeric:!0})>0&&console.info(o+s+o+n)}).catch(e=>e)}
