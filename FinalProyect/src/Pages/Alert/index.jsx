import React from 'react'
import Layout from '../../Components/Layout'
import AlertasActivas from '../../Components/AlertasActivas';
import NuevaAlerta from '../../Components/NuevaAlerta';

export default function Alert() {
  return (
    <Layout>
      <AlertasActivas/>
      <NuevaAlerta/>
    </Layout>
  )
}
