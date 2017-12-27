module.exports = (migration) => {
  const article = migration.editContentType('article')  
  migration.transformEntries({
    contentType: 'article',
    from: ['copyRef'],
    to: ['contentModules'],
    transformEntryForLocale: (fromFields, currentLocale) => {
      if (!fromFields.copyRef) {
        return
      }
      return {contentModules:[fromFields.copyRef[currentLocale]]}
    }
  })

}