import Head from 'next/head'
import { useState } from 'react'
import { Theme } from 'react-daisyui'
import PaginaDeContato from '../components/contato'
import { useTheme } from '../hooks/useTheme'

function Home() {
  const { theme, loadingTheme } = useTheme()
  const [etapa, setEtapa] = useState(1)

  return (
    <>
      <Head>
        <title>Quer aprender a ler a bíblia?</title>
      </Head>
      {loadingTheme ? (
        <div id="preloader-active">
          <div className="preloader">
            <div className="logo jump">
              <img src="/assets/imgs/logo.png" alt="Logo" />
              <h1 className="font-semibold text-black">Atualizando dados</h1>
            </div>
          </div>
        </div>
      ) : (
        <Theme dataTheme={theme} className="text-primary-content bg-primary">
          <section className="py-20">
            <div className="container">
              <div className="max-w-2xl mx-auto text-center">
                <img src="/assets/imgs/logo.png" alt="Logo" />
                <div className="max-w-2xl mb-8 mx-auto">
                  <h2
                    className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".s"
                  >
                    Quer aprender a <span className="text-effect">bíblia</span>{' '}
                    do zero?
                  </h2>
                </div>
                {etapa === 1 ? (
                  <div className="flex flex-col md:flex-row gap-4">
                    <button
                      className="btn btn-success px-8"
                      onClick={() => setEtapa(2)}
                    >
                      Sim, estou interessado(a)
                    </button>
                    <button
                      className="btn btn-warning px-8"
                      onClick={() => setEtapa(3)}
                    >
                      Não tenho certeza
                    </button>
                    <button
                      className="btn btn-error px-8"
                      onClick={() => setEtapa(4)}
                    >
                      Não, obrigado
                    </button>
                  </div>
                ) : etapa === 2 ? (
                  <>
                    <PaginaDeContato url_api="/api/contato_home" />
                    <div>
                      <button
                        className="btn btn-info px-8 mt-2 "
                        onClick={() => setEtapa(1)}
                      >
                        Voltar
                      </button>
                    </div>
                  </>
                ) : etapa === 3 ? (
                  <>
                    <span>
                      Se ainda estiver indeciso(a), podemos enviar informações
                      adicionais para ajudá-lo(a) a tomar uma decisão informada.
                      Por favor, forneça suas informações para que possamos
                      enviar mais detalhes:
                    </span>
                    <PaginaDeContato url_api="/api/contato_home" />
                    <div>
                      <button
                        className="btn btn-info px-8 mt-2 "
                        onClick={() => setEtapa(1)}
                      >
                        Voltar
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col gap-1">
                    <span>
                      Entendido. Agradecemos pelo seu tempo e interesse.
                    </span>
                    <div>
                      <button
                        className="btn btn-info px-8 mt-2 "
                        onClick={() => setEtapa(1)}
                      >
                        Voltar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </Theme>
      )}
    </>
  )
}
export default Home
