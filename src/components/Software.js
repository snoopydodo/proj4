import "./Software.css";
import { Chart } from "react-google-charts";
import Table from 'react-bootstrap/Table'

function Software() {
  return (
    <software className="organize">
              <div className="org-first">
              <h3>Graph of the snmp get and get next</h3>

        <div style={{ display: 'flex', maxWidth: 900 }}>
  <Chart
    width={400}
    height={'300px'}
    chartType="AreaChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['OID', 'SNMP-Get', 'SNMP-GetNext'],
      ['1.3.6.1.2.1.1.3.0', 57729, 57729],
      ['1.3.6.1.2.1.1.3.0', 58039, 58039],
      ['1.3.6.1.2.1.1.3.0', 58164, 58164],
      ['1.3.6.1.2.1.1.3.0', 58255, 58255],
      ['1.3.6.1.2.1.1.3.0', 58340, 58340],
      ['1.3.6.1.2.1.1.3.0', 58425, 58425],


    ]}
    options={{
      title: 'Oids Interface',
      hAxis: { title: 'oids', titleTextStyle: { color: '#333' } },
      vAxis: { minValue: 0 },
      // For the legend to fit, we make the chart area smaller
      chartArea: { width: '50%', height: '70%' },
      // lineWidth: 25
    }}
  />
</div>
</div>

<div className="org-second">
              <h3>Table of the snmp get and get next</h3>

              <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      {Array.from({ length: 1 }).map((_, index) => (
        <th key={index}>name</th>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <th key={index}>snmp get</th>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <th key={index}>snmp get next</th>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <th key={index}>snmp output</th>
      ))}

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>SNMPv2-MIB{index}</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>1.3.6.1.2.1.1.2.9{index}</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>1.3.6.1.2.1.1.3.0{index}</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>57729{index}</td>
      ))}

    </tr>
    <tr>
      <td>2</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>SNMPv2-MIB{index}</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>1.3.6.1.2.1.1.2.9{index}</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>1.3.6.1.2.1.1.3.0{index}</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>58039{index}</td>
      
      ))}
    </tr>

    <tr>
      <td>3</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>SNMPv2-MIB{index}</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>1.3.6.1.2.1.1.2.9{index}</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>1.3.6.1.2.1.1.3.0{index}</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>58164{index}</td>
      
      ))}
    </tr>

    <tr>
      <td>4</td>
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>SNMPv2-MIB{index}</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>1.3.6.1.2.1.1.2.9{index}</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>1.3.6.1.2.1.1.3.0{index}</td>
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <td key={index}>58255{index}</td>
      
      ))}
    </tr>


  </tbody>
</Table>
</div>
    </software>
  );
}

export default Software;

