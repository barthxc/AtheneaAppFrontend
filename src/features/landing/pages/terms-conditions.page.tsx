import { Heading, Paragraph, Section } from "../components";

export const TermsConditionPage = () => {
  return (
    <Section className="!pt-[8.5rem]">
      <Heading variant="display" position="centered" className="pb-20">
        Términos & Condiciones
      </Heading>
      <div className="flex flex-col justify-center items-center gap-10">
        <article className="">
          <div>
            <Paragraph className="text-xl xl:text-3xl">
              1. Información General
            </Paragraph>
            <ul>
              <li>
                <Paragraph className="text-base xl:text-xl">
                  Nombre: Asociación de Personas con Discapacidad Athenea Cuenca
                  Minera
                </Paragraph>
                <Paragraph className="text-base xl:text-xl">
                  CIF: G21419213
                </Paragraph>
                <Paragraph className="text-base xl:text-xl">
                  Dirección: C/ Antonio Llorden Fernández s/n, Nerva, Huelva,
                  España
                </Paragraph>
                <Paragraph className="text-base xl:text-xl">
                  Correo Electrónico: asociacionatheneanerva@gmail.com
                </Paragraph>
                <Paragraph className="text-base xl:text-xl">
                  Teléfono: +34 613 11 13 43
                </Paragraph>
                <Paragraph className="text-base xl:text-xl">
                  Sitio Web: https://athenea.netlify.app
                </Paragraph>
              </li>
            </ul>
            <Paragraph className="text-base xl:text-xl">
              Al acceder a este sitio web y utilizar los servicios ofrecidos por
              la Asociación de Personas con Discapacidad Athenea Cuenca Minera,
              aceptas cumplir con los siguientes términos y condiciones. Si no
              estás de acuerdo con estos términos, por favor, no utilices este
              sitio web.
            </Paragraph>
          </div>
        </article>
        <article className="">
          <Paragraph className="text-xl xl:text-3xl">
            2. Propósito del Sitio Web
          </Paragraph>
          <Paragraph className="text-base xl:text-xl">
            Este sitio web tiene como objetivo proporcionar información sobre la
            asociación y sus actividades. No se permiten la creación de cuentas
            de usuario ni la publicación de contenido por parte de los
            visitantes.
          </Paragraph>
        </article>
        <article className="">
          <Paragraph className="text-xl xl:text-3xl">
            3. Propiedad Intelectual
          </Paragraph>
          <Paragraph className="text-base xl:text-xl">
            Todos los contenidos, materiales y marcas comerciales presentes en
            este sitio web son propiedad exclusiva de la Asociación de Personas
            con Discapacidad Athenea Cuenca Minera. Queda prohibida la
            reproducción, distribución o uso no autorizado de dichos contenidos
            sin el consentimiento previo por escrito de la asociación.
          </Paragraph>
        </article>
        <article className="">
          <Paragraph className="text-xl xl:text-3xl">4. Donaciones</Paragraph>
          <Paragraph className="text-base xl:text-xl">
            Los usuarios pueden realizar donaciones a través del sitio web.
            Todas las donaciones son voluntarias y no implican la compra de
            bienes o servicios. No existen suscripciones ni membresías
            vinculadas a las donaciones.
          </Paragraph>
        </article>
        <article className="">
          <Paragraph className="text-xl xl:text-3xl">
            5. Promociones y Concursos
          </Paragraph>
          <Paragraph className="text-base xl:text-xl">
            La asociación puede organizar promociones, concursos o sorteos a
            través del sitio web. Cada evento estará sujeto a sus propias
            reglas, que se comunicarán oportunamente.
          </Paragraph>
        </article>
        <article className="">
          <div>
            <Paragraph className="text-xl xl:text-3xl">6. Contacto</Paragraph>
            <Paragraph className="text-base xl:text-xl">
              Para cualquier pregunta relacionada con estos términos y
              condiciones, puedes contactarnos a través de:
            </Paragraph>
            <ul>
              <li>
                <Paragraph className="text-base xl:text-xl">
                  Correo electrónico: asociacionatheneanerva@gmail.com
                </Paragraph>
                <Paragraph className="text-base xl:text-xl">
                  Página de contacto: https://athenea.netlify.app/contact
                </Paragraph>
                <Paragraph className="text-base xl:text-xl">
                  Teléfono: +34 613 11 13 43
                </Paragraph>
                <Paragraph className="text-base xl:text-xl">
                  Correo postal: C/ Antonio Llorden Fernández s/n, Nerva,
                  Huelva, 21670, España
                </Paragraph>
              </li>
            </ul>
            <Paragraph className="text-base xl:text-xl">
              Al acceder a este sitio web y utilizar los servicios ofrecidos por
              la Asociación de Personas con Discapacidad Athenea Cuenca Minera,
              aceptas cumplir con los siguientes términos y condiciones. Si no
              estás de acuerdo con estos términos, por favor, no utilices este
              sitio web.
            </Paragraph>
          </div>
        </article>
        <article className="">
          <Paragraph className="text-xl xl:text-3xl">
            7. Limitación de Responsabilidad
          </Paragraph>
          <Paragraph className="text-base xl:text-xl">
            La asociación no será responsable por daños directos o indirectos
            derivados del uso del sitio web o de la imposibilidad de acceder a
            él. El uso del sitio es responsabilidad exclusiva del usuario.
          </Paragraph>
        </article>
        <article className="">
          <Paragraph className="text-xl xl:text-3xl">
            8. Modificaciones
          </Paragraph>
          <Paragraph className="text-base xl:text-xl">
            La Asociación de Personas con Discapacidad Athenea Cuenca Minera se
            reserva el derecho de modificar estos términos y condiciones en
            cualquier momento. Cualquier cambio será publicado en esta página y
            entrará en vigor inmediatamente.
          </Paragraph>
        </article>
        <article className="">
          <Paragraph className="text-xl xl:text-3xl">
            9. Ley Aplicable
          </Paragraph>
          <Paragraph className="text-base xl:text-xl">
            Estos términos y condiciones se rigen por las leyes de España.
            Cualquier disputa que surja en relación con estos términos será
            sometida a la jurisdicción exclusiva de los tribunales de Huelva,
            España.
          </Paragraph>
        </article>
      </div>
    </Section>
  );
};
