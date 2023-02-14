const { Configuration, OpenAIApi } = require('openai')

async function start() {
  const configuration = new Configuration({
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: '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',
  })
  const openai = new OpenAIApi(configuration)

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: '北京奥运会时间\nA',
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ['\n'],
  })
  console.log(111 , response.data)

}

start()