import React from 'react';
import Layout from '../../Components/Layout';

export default function Nosotros() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Nosotros</h1>
        <div className="bg-white rounded-lg p-8">
          <p className="text-lg leading-7 text-gray-700 mb-4">
            En <span className="font-bold">Alertree</span>, nos dedicamos a proteger lo más valioso: tu seguridad. Somos una empresa innovadora que ha desarrollado un sistema avanzado de detección de humo mediante tecnología Arduino, diseñada para prevenir incendios de manera efectiva y oportuna.
          </p>
          <p className="text-lg leading-7 text-gray-700 mb-4">
            Nuestro sistema está compuesto por dispositivos Arduino de alta sensibilidad que detectan la presencia de humo en el ambiente. Una vez que se detecta humo, el sistema envía una notificación instantánea a nuestra plataforma web, donde se registran todos los detalles relevantes de la alerta. Estos detalles incluyen el tipo de alerta, la ubicación exacta del dispositivo que detectó el humo, la fecha de la detección, y un mensaje predeterminado que varía según el tipo de alerta.
          </p>
          <p className="text-lg leading-7 text-gray-700 mb-4">
            Nuestro compromiso es proporcionar una respuesta rápida y eficaz a cualquier indicio de incendio, minimizando así los riesgos y daños potenciales. En Alertree, creemos que la prevención es la clave para la seguridad, y es por eso que nos esforzamos en ofrecer la tecnología más avanzada y confiable para la detección de incendios.
          </p>
          <p className="text-lg leading-7 text-gray-700 mb-4">
            Nuestro equipo está formado por expertos en tecnología, seguridad y atención al cliente, todos dedicados a garantizar que nuestros sistemas funcionen de manera óptima y que nuestros clientes reciban el mejor servicio posible. Nos enorgullece decir que Alertree no solo protege propiedades, sino que también salva vidas.
          </p>
          <p className="text-lg leading-7 text-gray-700 mb-4">
            Únete a nosotros y descubre cómo Alertree puede hacer de tu hogar un lugar más seguro. Con nuestra tecnología avanzada y nuestro compromiso con la excelencia, puedes estar seguro de que estás en buenas manos.
          </p>
          <p className="text-lg leading-7 text-gray-700 font-bold text-center mb-8">
            Alertree - La tecnología que protege tu hogar.
          </p>
          <div className="flex justify-center">
            <img src="/src/assets/fambosque.jpg" alt="Alertree Technology" className="rounded-lg shadow-md h-1/2 w-1/2"/>
          </div>
        </div>
      </div>
    </Layout>
  );
}
