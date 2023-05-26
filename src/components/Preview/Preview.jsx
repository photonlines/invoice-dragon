import styles from "./preview.module.scss";
import { Document, Page, Text, Image, View, StyleSheet, Font, PDFViewer } from '@react-pdf/renderer';
import { useEffect, useState } from "react";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2";
import Template3 from "./Templates/Template3";
import Template4 from "./Templates/Template4";

const PDF = ({ template, rows, currencySymbol, formName, logo, email, businessName, address, city, zipcode, phone, owner, clientName, clientEmail, clientAddress, clientCity, clientZipcode, clientPhone, date, InvoiceNo, website, notes }) => {
  const [totalAmount, setTotalAmount] = useState(null);

  const handleTotalCalculation = () => {
    let sum = 0;
    rows.forEach(row => {
      sum += parseFloat(row.amount);
    })
    setTotalAmount(sum.toFixed(2));
  }

  useEffect(() => {
    handleTotalCalculation();
  }, [])

  return ( 
    <Document
      author={owner}
      keywords="invoice, receipt"
      subject={`${businessName} Invoice`}
      title="Invoice"
    >
      {template === 'template1' && 
        <Template1 
          logo={logo}
          formName={formName}
          businessName={businessName}
          InvoiceNo={InvoiceNo}
          date={date}
          clientName={clientName}
          clientEmail={clientEmail}
          clientAddress={clientAddress}
          clientCity={clientCity}
          clientZipcode={clientZipcode}
          clientPhone={clientPhone}
          rows={rows}
          currencySymbol={currencySymbol}
          totalAmount={totalAmount}
          notes={notes}
          owner={owner}
          address={address}
          city={city}
          zipcode={zipcode}
          website={website}
        /> 
      }
      {template === 'template2' && 
        <Template2 
          logo={logo}
          formName={formName}
          businessName={businessName}
          InvoiceNo={InvoiceNo}
          date={date}
          clientName={clientName}
          clientEmail={clientEmail}
          clientAddress={clientAddress}
          clientCity={clientCity}
          clientZipcode={clientZipcode}
          clientPhone={clientPhone}
          rows={rows}
          currencySymbol={currencySymbol}
          totalAmount={totalAmount}
          notes={notes}
          owner={owner}
          address={address}
          city={city}
          zipcode={zipcode}
          website={website}
        /> 
      }
      {template === 'template3' && 
        <Template3 
          logo={logo}
          formName={formName}
          businessName={businessName}
          InvoiceNo={InvoiceNo}
          date={date}
          clientName={clientName}
          clientEmail={clientEmail}
          clientAddress={clientAddress}
          clientCity={clientCity}
          clientZipcode={clientZipcode}
          clientPhone={clientPhone}
          rows={rows}
          currencySymbol={currencySymbol}
          totalAmount={totalAmount}
          notes={notes}
          owner={owner}
          address={address}
          city={city}
          zipcode={zipcode}
          email={email}
          phone={phone}
          website={website}
        /> 
      }
      {template === 'template4' && 
        <Template4 
          logo={logo}
          formName={formName}
          businessName={businessName}
          InvoiceNo={InvoiceNo}
          date={date}
          clientName={clientName}
          clientEmail={clientEmail}
          clientAddress={clientAddress}
          clientCity={clientCity}
          clientZipcode={clientZipcode}
          clientPhone={clientPhone}
          rows={rows}
          currencySymbol={currencySymbol}
          totalAmount={totalAmount}
          notes={notes}
          owner={owner}
          address={address}
          city={city}
          zipcode={zipcode}
          phone={phone}
          website={website}
        /> 
      }

    </Document>
   );
}

const PDFView = ({ template, rows, currencySymbol, formName, logo, email, businessName, address, city, zipcode, phone, owner, clientName, clientAddress, clientEmail, clientCity, clientZipcode, clientPhone, date, InvoiceNo, website, notes }) => {
  
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, [])
  
  return ( 
    <>
      <PDFViewer className={styles.full}>
        <PDF 
          template={template}
          rows={rows}
          email={email} 
          businessName={businessName}
          formName={formName}
          logo={logo}
          address={address}
          city={city}
          zipcode={zipcode}
          phone={phone}
          owner={owner}
          clientName={clientName}
          clientEmail={clientEmail}
          clientAddress={clientAddress}
          clientCity={clientCity}
          clientZipcode={clientZipcode}
          clientPhone={clientPhone}
          date={date}
          InvoiceNo={InvoiceNo}
          website={website}
          notes={notes}
          currencySymbol={currencySymbol}
          >
        </PDF>
      </PDFViewer>
    </>
   );
}
 
export default PDFView;
// export default PDF;