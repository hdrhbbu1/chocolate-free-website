const crypto = require('crypto')

module.exports = (migration) => {

  migration.deriveLinkedEntries({
    contentType: 'article',
    derivedContentType: 'articleCopy',
    from: ['content', 'title'],
    toReferenceField: 'copyRef',
    derivedFields: ['copy'],
    identityKey: async (fromFields) => {
      return crypto.createHmac('sha256', fromFields.content['en-US']).digest('hex')
    },
    shouldPublish: true,
    deriveEntryForLocale: async (inputFields, locale) => {
      if (locale !== 'en-US') {
        return;
      }
      const copy = inputFields.content[locale]
      const title = inputFields.title[locale]
      return {
        copy,
        title
      };
    }
  })
}