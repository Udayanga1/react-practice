import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({input}){
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

  return (
    <table id="result">
      <tr>
        <th>Year</th>
        <th>Investment Valu</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
      <tbody>
        {resultsData.map(yearData => {
          const totalInterst = yearData.annualInvestment * yearData.year - initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterst;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterst)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}