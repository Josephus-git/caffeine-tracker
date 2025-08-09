import {coffeeConsumptionHistory, timeSinceConsumption, getCaffeineAmount, calculateCurrentCaffeineLevel} from "../utils"

export default function History() {
    return (
        <>
            <div className="section-header">
                <i className="fa-solid fa-timeline" />
                <h2>History</h2>
            </div>
            <p><i>Hover for more information!</i></p>
            <div className="coffee-history">
                {Object.keys(coffeeConsumptionHistory).sort((a,b) => Number(b)-Number(a)).map((utcTime, coffeeIndex) => {
                    const coffee = coffeeConsumptionHistory[utcTime]
                    const timeSinceConsume = timeSinceConsumption(Number(utcTime))
                    const originalAmount = getCaffeineAmount(coffee.name)
                    const remainingAmount = calculateCurrentCaffeineLevel({
                        [utcTime]: coffee
                    })

                    const summary =  `${coffee.name} | ${timeSinceConsume} | $${remainingAmount}mg / ${originalAmount}mg`

                    return (
                        <div title={summary} key={coffeeIndex}>
                            <i className="fa-solid fa-mug-hot" />
                        </div>
                    )

                })}
            </div>
        
        </>
    )
}