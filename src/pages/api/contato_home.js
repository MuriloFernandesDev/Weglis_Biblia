import request from 'superagent'

export default async (req, res) => {
  const { body } = req

  const data = {
    ...body,
    listIds: [2], //Adicionar o ID da lista que foi criada no Sendinblue - Newsletter
  }

  if (req.method === 'POST') {
    try {
      const response = await request
        .post('https://api.brevo.com/v3/contacts')
        .send(data)
        .set({
          'Content-Type': 'Application/json',
          'api-key': process.env.NEXT_APP_API_EMAIL,
        })

      res.status(response.status).json(response.body)
    } catch (error) {
      // console.log(error.response)
      res
        .status(error.status || 500)
        .json(JSON.parse(error.response.text) || 'Something went wrong')
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
