module.exports = (migration) => {
  const articleCopy = migration.createContentType('articleCopy', {
    "name": "Article > Copy",
    "description": "",
  })
  articleCopy.createField('title',
      {
        "name": "Title",
        "type": "Symbol",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false
      })
  articleCopy.createField('copy', {
        "name": "Copy",
        "type": "Text",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false
      })
  const articleImage = migration.createContentType('articleImage', {
      "name": "Article > Image",
      "description": "",
      "displayField": "title"
    }
  )
  articleImage.createField('title',
      {
        "name": "Title",
        "type": "Symbol",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false
      }
  )
  articleImage.createField('image',{
        "name": "Image",
        "type": "Link",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false,
        "linkType": "Asset"
      }
  )
}
