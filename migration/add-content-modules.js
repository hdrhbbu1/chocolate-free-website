module.exports = (migration) => {
  const article = migration.editContentType('article')
  article.createField('contentModules', {
      "name": "Content Modules",
      "type": "Array",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false,
      "items": {
        "type": "Link",
        "validations": [],
        "linkType": "Entry"
      }
  })
}