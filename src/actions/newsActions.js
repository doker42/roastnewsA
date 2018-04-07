

export const createnews = (news) => {
let _id = ''
let possible = "ASAASASASASAS"

for (let i = 0; i < 15; i++) {
    _id += possibleCharacters.chartAt(Math.floor(Math.random() * p))
}

    news.id = _id
    
    return {
        type: 'create-news',
        news: news

    }
}