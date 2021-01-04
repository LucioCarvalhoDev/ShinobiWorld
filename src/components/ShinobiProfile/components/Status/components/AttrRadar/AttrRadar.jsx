import React, { useEffect } from "react";
import Chart from "chart.js";

import "./style.css";

function AttrRadar(props) {

    useEffect(() => {
        const target = document.querySelector("#chart");
        const radar = new Chart(target, {
            type: "radar",
            data: {
                labels: Object.keys(props.shinobi._attr),
                datasets: [
                    {
                        label: "Sasaki",
                        data: Object.values(props.shinobi._attr)
                    }
                ]
            },
            options: {
                scale: {
                    ticks: {
                        beginAtZero: true,
                        callback: function () { return "" },
                        backdropColor: "rgba(0, 0, 0, 0)",
                        max: 5+(Math.max(...Object.values(props.shinobi._attr)))
                    }
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 1
            }
        })
    }, [props.shinobi])

    return (
        <section className="AttrRadar">
            <div className="chart-container">
                <canvas id="chart"></canvas>
            </div>
        </section>
    );
}

export default AttrRadar;