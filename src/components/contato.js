import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'

const PaginaDeContato = ({ url_api }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const body = {
      attributes: {
        SMS: data?.telefone,
        nome: data?.nome,
        whatsapp: data?.telefone,
        idade: data?.idade,
      },
      idade: data?.idade,
      email: data?.email,
    }

    axios
      .post(url_api, body)
      .then(() => {
        setEnviado(true)
      })
      .catch((error) => {
        const { data } = error.response

        toast.warn(data.message)
        toast.warn(
          'Ocorreu um erro ao finalizar o seu cadastro, iremos te redirecionar para o WhatsApp.'
        )
      })
      .finally(async () => {
        setLoading(false)
      })
  }

  return (
    <div>
      {enviado ? (
        <span>
          Agradecemos por expressar seu interesse em aprender mais sobre a
          Bíblia! Sua jornada de descoberta está prestes a começar. Em breve
          entraremos em contato para fornecer mais informações sobre como você
          pode começar a aprender a Bíblia do zero. Se você tiver alguma
          pergunta adicional ou precisar de assistência, sinta-se à vontade para
          nos contatar pelo instagram{' '}
          <a href="https://www.instagram.com/weglis" className="font-bold link">
            @weglis
          </a>
          . Fique atento(a) à sua caixa de entrada! Estamos ansiosos para
          acompanhá-lo(a) nesta emocionante jornada de aprendizado.
        </span>
      ) : (
        <form onSubmit={handleSubmit}>
          <div
            className="mb-4 wow animate__animatedanimated animate__fadeIn"
            data-wow-delay=".3s"
          >
            <input
              className="w-full p-4 text-xs font-semibold leading-none rounded outline-none text-primary bg-primary-content/80 placeholder:text-primary"
              type="text"
              required
              placeholder="Seu nome"
              id="nome"
              name="nome"
              value={data?.nome ?? ''}
              onChange={handleChange}
            />
          </div>
          <div
            className="mb-4 wow animate__animatedanimated animate__fadeIn"
            data-wow-delay=".3s"
          >
            <input
              className="w-full p-4 text-xs font-semibold leading-none rounded outline-none text-primary bg-primary-content/80 placeholder:text-primary"
              type="email"
              required
              placeholder="E-mail"
              id="email"
              name="email"
              value={data?.email ?? ''}
              onChange={handleChange}
            />
          </div>

          <div
            className="mb-4 wow animate__animatedanimated animate__fadeIn"
            data-wow-delay=".3s"
          >
            <input
              className="w-full p-4 text-xs font-semibold leading-none rounded outline-none text-primary bg-primary-content/80 placeholder:text-primary"
              type="tel"
              required
              placeholder="Idade"
              id="idade"
              name="idade"
              value={data?.idade ?? ''}
              onChange={handleChange}
            />
          </div>

          <div
            className="flex justify-end items-end wow animate__animatedanimated animate__fadeIn"
            data-wow-delay=".3s"
          >
            {loading ? (
              <button className="btn btn-primary px-8">
                <div className="loading" /> Enviando
              </button>
            ) : (
              <button className="btn btn-primary px-8" type="submit">
                Enviar
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  )
}

export default PaginaDeContato
