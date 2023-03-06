import React from 'react'
import Newsitem from './Newsitem'
import styled, { ThemeProvider } from "styled-components";
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import img4 from '../img/4.png'
import img5 from '../img/5.png'
const Container = styled.div`
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;
`;
function News() {
  return (
    <Container>
      <Newsitem title="PayPal enables transfer of digital currencies to external wallets" description="The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.
After rolling out the ability to buy and sell crypto on its platform in October... 
" Modal={<span>The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.
<br />
After rolling out the ability to buy and sell crypto on its platform in October 2020, PayPal is finally allowing users the ability to natively transfer, send and receive digital assets between PayPal and other wallets and exchanges. As of Tuesday, the feature is available to select U.S. users, with the feature expanding to all eligible U.S. users in the coming weeks. The first batch of supported coins consists of Bitcoin 
BTC <span>$16,704,</span>  Ether ETH <span>$1,217</span> , Bitcoin Cash BCH <span>$100</span> , and Litecoin LTC <span>$74.58</span> .  
Crypto transfers to recipients outside of PayPal would incur a network fee based on their respective blockchains, but transfers between PayPal users will not incur such fees. To protect users' privacy, the firm generates a new recipient address for each transaction into one's PayPal account. PayPal will also not charge fees for incoming transfers, <br />
The company is also working to integrate other forms of cryptocurrency services, such as central bank digital currencies, to boost its digital footprint. It is also exploring the possibility of launching its own stablecoin, dubbed "PayPal Coin." The discovery came after a developer found evidence of such a stablecoin within the source code of the company's iPhone app.</span> } published="07-032023" author="xyz" source="abc" image={img1} heading={`PayPal enables transfer of digital currencies to external wallets
`}/>
      <Newsitem title={"Prime Minister Giorgia Meloni's new bill also includes ..."} description={`Crypto traders in Italy will be subject to a 26% capital-gains tax starting in 2023, according to a new budget that won parliamentary approval on Thursday....
`} Modal={<span>Crypto traders in Italy will be subject to a 26% capital-gains tax starting in 2023, according to a new budget that won parliamentary approval on Thursday. <br />
Italian Prime Minister Giorgia Meloni's 2023 expansionary budget – which was completed in a rush before the end of the year – features 21 billion euros ($22.3 billion) in tax breaks to assist businesses and households facing the energy crisis, Reuters reported.
Italy's (and most recently Portugal's) move to introduce a capital-gains tax on crypto comes ahead of the implementation of the European Union's Markets in Crypto Assets (MiCA) regulation that promises a licensing frameworks and stringent operating requirements for crypto-service providers in the 27-member bloc. <br />
The 26% rate applies to gains from crypto trading if they exceed 2,000 euros per tax period. As an incentive for declaring crypto profits, the new bill also sets a "substitute income tax" for investors at 14% of the value of the assets held as of Jan. 1, 2023, instead of the cost at the time of purchase. <br />
According to the new rules, losses from crypto investments can be deducted from profits and be carried forward.
Investors, however, may require some additional guidance on what qualifies as a taxable event as the document also says, "the exchange between crypto assets having same characteristics and functions," doesn't constitute a "fiscal case."
</span>} published="07-032023" author="xyz" source="abc" image={img2} heading={`Prime Minister Giorgia Meloni's new bill also includes an incentive for those declaring crypto for tax purposes.ayPal enables transfer of digital currencies to external wallets`}/>

      <Newsitem title={`Microstrategy Buys More Bitcoin — Company's Crypto ...`} description={`Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, the world’s largest cryptocurrency ...`} Modal={<span>
Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, the world’s largest cryptocurrency has emerged as ‘the institutional-grade digital asset,’ said Microstrategy founder Michael Saylor. <br />

 Microstrategy Acquires More Bitcoin <br />
Nasdaq-listed Microstrategy Inc. announced Wednesday that it has purchased more bitcoin for its corporate treasury. Michael Saylor, the company’s founder and executive chairman, tweeted Wednesday: <br />
Microstrategy has increased its bitcoin holdings by ~2,500 BTC. As of 12/27/22 Microstrategy holds ~132,500 bitcoin acquired for ~$4.03 billion at an average price of ~$30,397 per bitcoin. <br />
In its filing with the U.S. Securities and Exchange Commission (SEC), Microstrategy clarified that the 2,500 coins were acquired between Nov. 1 and Dec. 24 by its wholly owned subsidiary Macrostrategy. <br />
The subsidiary bought approximately 2,395 BTC at an average price of $17,871 per coin between Nov. 1 and Dec. 21. It then sold about 704 BTC at $16,776 per coin on Dec. 22. Macrostrategy then bought about 810 more BTC at $16,845 per coin on Dec. 24. At the time of writing, bitcoin is trading at $16,656.80. <br />
The bitcoin sale in December marked the first time Microstrategy sold its bitcoin since it began accumulating the crypto for its corporate treasury in 2020. The company cited tax reasons for selling BTC. ‘Microstrategy plans to carry back the capital losses resulting from this transaction against previous capital gains, to the extent such carrybacks are available under the federal income tax laws currently in effect, which may generate a tax benefit,’ the SEC filing describes. <br />
Saylor said in an interview last week: <br />
The most positive thing of the year is the emergence of bitcoin as the institutional grade digital asset and the clarity that … there is one crypto asset that’s a digital commodity … Bitcoin is that commodity. <br />
The executive noted that both the chairman of the SEC and the chair of the Commodity Futures Trading Commission (CFTC) have confirmed that bitcoin is a commodity. <br />
Saylor previously explained that Microstrategy is investing in BTC ‘for the long term.’ He added: ‘Our strategy is to buy bitcoin and hold the bitcoin, so there’s no price target … I expect bitcoin is going to go into the millions. So, we’re very patient. We think it’s the future of money.’
</span>} published="07-032023" author="xyz" source="abc" image={img3} heading={`Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 BTC

`}/>

      <Newsitem title={`Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022`} description={`Bitcoin, which is trading at $16,721 at press time, has been on a downward spiral alongside other cryptocurrencies. The falling cryptocurrency prices  ...`} Modal={<span>Bitcoin, which is trading at $16,721 at press time, has been on a downward spiral alongside other cryptocurrencies. The falling cryptocurrency prices had a major effect on the income an2022 has been a rough and tough year for investors, traders, cryptocurrency businesses, and miners in general. The prolonged bear market, exacerbated by a series of catastrophic events, posed a threat to miners. <br />
Miners were dealing with a variety of issues, including defaulted loans, quarterly losses, and soaring bitcoin hashrates that reached all-time highs. All these factors were affecting the profitability of the miners and were causing sell pressure. <br />
The situation was aggravated when cryptocurrency prices, including Bitcoin’s, plummeted. Bitcoin, which was hovering around $48,000 last year, hit a low of $15,590 by the end of 2022. According to the data collected from The Block, bitcoin miners’ revenue hit $9.55 billion in 2022.
Bitcoin miners’ revenue dropped in 2022 <br />
d profits of miners. Even though the $9.55 billion in revenue in 2022 seems like a large number, it is comparatively lower than that of 2021. <br />


Over the course of 2021, bitcoin miners made more than $15 billion in revenue, according to the data from the block. This was actually considered to be a 206% year-over-year increase. 
</span>} published="07-032023" author="xyz" source="abc" image={img4} heading={` Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022`}/>
      <Newsitem title={`Mango Markets Exploiter Eisenberg Arrested in Puerto Rico`} description={`The investor drained $110 million in cryptocurrencies from the platform.Avraham Eisenberg, the crypto investor whose ‘highly profitable trading strategy’ 
...`} Modal={<span>The investor drained $110 million in cryptocurrencies from the platform.Avraham Eisenberg, the crypto investor whose ‘highly profitable trading strategy’ drained DeFi trading platform Mango Markets of crypto worth $110 million, was arrested Monday in Puerto Rico, court documents said. <br />
The self-described game theorist admitted his role in draining Mango Markets’ treasury shortly after the incident in mid-October, and may now be the first U.S. resident to face charges for his role in manipulating a decentralized-finance trading platform. <br />
Eisenberg faces charges of commodities fraud and commodities manipulation, according to a filing unsealed Tuesday. The charges could see punishments ranging from fines to prison time. <br />
A deposition signed by FBI Special Agent Brandon Racz alleges Eisenberg ‘willfully and knowingly’ manipulated the sale of a commodity – namely futures contracts on Mango Markets. <br />
‘Eisenberg engaged in a scheme involving the intentional and artificial manipulation of the price of perpetual futures contracts on a cryptocurrency exchange called Mango Markets, and other manipulative and deceptive devices and contrivances.’ <br />
</span>} published="07-032023" author="xyz" source="abc" image={img5} heading={`Mango Markets Exploiter Eisenberg Arrested in Puerto Rico`}/>

    </Container>
  )
}

export default News