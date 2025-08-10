import { timeSinceConsumption, getCaffeineAmount, calculateCurrentCaffeineLevel} from "../utils"
import { useAuth } from "../context/AuthContext"

export default function History() {
    const { globalData } = useAuth()

    if (!globalData || Object.keys(globalData).length === 0) {
        return null
    }

    return (
        <>
            <div className="section-header">
                <i className="fa-solid fa-timeline" />
                <h2>History</h2>
            </div>
            <p><i>Hover for more information!</i></p>
            <div className="coffee-history">
                {Object.keys(globalData).sort((a,b) => Number(b)-Number(a)).map((utcTime, coffeeIndex) => {
                    const coffee = globalData[utcTime]
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