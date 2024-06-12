import React from 'react';
import Layout from '../../Components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faExclamationCircle, faFire } from '@fortawesome/free-solid-svg-icons';

export default function Funcionamiento() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-6">Funcionamiento</h1>
        <p className="mb-6">
          En <strong>Alertree</strong>, nuestra tecnología avanzada de detección de humo está diseñada para mantenerte informado y protegido en todo momento. Nuestro sistema clasifica las alertas en tres niveles de severidad para ayudarte a entender y reaccionar adecuadamente a cada situación.
        </p>

        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faExclamationCircle} className="text-blue-500 text-2xl mr-4" />
              <h2 className="text-2xl font-semibold">Alerta Tipo A</h2>
            </div>
            <p className="mb-2"><strong>Descripción:</strong> Estas alertas indican la presencia de una cantidad mínima de humo en el ambiente.</p>
            <p className="mb-2"><strong>Acciones Recomendadas:</strong> Verificar el área por posibles fuentes de humo. Puede ser causado por actividades cotidianas como cocinar.</p>
            <p><strong>Mensaje Predeterminado:</strong> "Se ha detectado una pequeña cantidad de humo. Verifique su entorno inmediato."</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-500 text-2xl mr-4" />
              <h2 className="text-2xl font-semibold">Alerta Tipo B</h2>
            </div>
            <p className="mb-2"><strong>Descripción:</strong> Estas alertas indican una mayor concentración de humo, sugiriendo que puede haber un problema más serio.</p>
            <p className="mb-2"><strong>Acciones Recomendadas:</strong> Inspeccionar inmediatamente el área. Posible fuego en etapa inicial.</p>
            <p><strong>Mensaje Predeterminado:</strong> "Alerta de humo detectada. Revise el área por posibles fuentes de incendio."</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faFire} className="text-red-500 text-2xl mr-4" />
              <h2 className="text-2xl font-semibold">Alerta Tipo C</h2>
            </div>
            <p className="mb-2"><strong>Descripción:</strong> Estas son las alertas más críticas, indicando una alta concentración de humo y un riesgo inminente de incendio.</p>
            <p className="mb-2"><strong>Acciones Recomendadas:</strong> Evacuar el área de inmediato y contactar a los servicios de emergencia.</p>
            <p><strong>Mensaje Predeterminado:</strong> "ALERTA CRÍTICA: Alta concentración de humo detectada. Evacúe inmediatamente y llame a los bomberos."</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Cómo Funciona el Sistema</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li><strong>Detección:</strong> Nuestros dispositivos Arduino monitorean continuamente el ambiente en busca de humo.</li>
            <li><strong>Notificación:</strong> Al detectar humo, el dispositivo envía una señal a nuestra plataforma web.</li>
            <li><strong>Registro:</strong> La plataforma registra los detalles de la alerta, incluyendo el tipo de alerta (A, B o C), la ubicación del dispositivo, la fecha y hora de la detección, y el mensaje predeterminado correspondiente.</li>
            <li><strong>Acción:</strong> El sistema envía una notificación instantánea a los usuarios registrados, permitiéndoles tomar las medidas necesarias según el tipo de alerta.</li>
          </ol>
        </div>

        <p className="mt-6">
          Nuestro sistema de clasificación de alertas permite una respuesta rápida y adecuada a cada situación, asegurando que siempre estés informado y preparado para actuar. En <strong>Alertree</strong>, estamos comprometidos a proporcionar la tecnología más confiable y efectiva para la detección y prevención de incendios.
        </p>

        <p className="mt-4 text-xl font-semibold">Alertree - La tecnología que protege tu hogar.</p>
      </div>
    </Layout>
  );
}
