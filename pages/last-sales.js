import { useEffect, useState } from "react";

const LastSalesPage = () => {
    const [sales, setSales] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(
            "https://nextjs-course-11ad3-default-rtdb.firebaseio.com/sales.json"
        )
            .then((response) => response.json())
            .then((data) => {
                const transformedSales = [];

                for (const key in data) {
                    transformedSales.push({
                        id: key,
                        username: data[key].username,
                        volume: data[key].volume,
                    });
                }

                setSales(transformedSales);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!sales) {
        return <p>No data yet...</p>;
    }
    return (
        <ul>
            {sales &&
                sales.map((sale) => (
                    <li key={sale.id}>
                        {sale.username} - {sale.volume} eur
                    </li>
                ))}
        </ul>
    );
};

export default LastSalesPage;
