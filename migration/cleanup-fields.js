module.exports = (migration) => {
  const article = migration.editContentType('article')
  article.deleteField('copyRef')
  article.deleteField('content')
}