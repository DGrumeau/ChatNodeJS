// Ajout d'un Regex pour détecter les vidéos YouTube

const isYouTube = /(https|http)(:\/\/)(www\.|m\.)?(youtu(be)?)(\.com|\.be)?\/((watch|w)(\?v=)|v\/|)(-?)([aA-zZ0-9?=&]*)/

// Si c'est une vidéo YouTube, on intègre le contenu

module.exports = function(givenUrl) {
  let url = givenUrl
  let embed = ''
  
  if (url.match(isYouTube)) embed = `<iframe width="420" height="315" src="https://www.youtube.com/embed/${url.match(isYouTube)[11]}"></iframe>`

  return embed
}
