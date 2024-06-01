import React from 'react'
import Layout from '../../Components/Layout'
import { Table } from '../../Components/Table'
import SearchAlert from '../../Components/SearchAlert'

export default function RegistroAlert() {
  return (
    <>
    <Layout>
      <h1 className=' font-bold text-4xl my-5'>Registro de alertas</h1>
      <SearchAlert/>
      <Table/>
    </Layout>
    
    
    </>
  )
}
