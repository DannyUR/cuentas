export default function CreditCard({ nameBank, number, name, date }) {
    return (
        <>
            <div className="credit-card">
                <h5>{nameBank}</h5>
                <div className="credit-card-number">{number}</div>
                <div className="d-flex justify-content-between">
                    <span>{name}</span>
                    <span>{date}</span>
                </div>
            </div>
        </>
    )

}