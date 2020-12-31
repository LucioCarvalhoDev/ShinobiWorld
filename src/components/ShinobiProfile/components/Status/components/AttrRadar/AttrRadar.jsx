import React, { useState, useEffect } from "react";
import Chart from "chart.js";

import "./style.css";

function AttrRadar(props) {

    const shinobi = props.shinobi;

    useEffect(() => {
        const target = document.querySelector(".AttrRadar canvas");
        const radar = new Chart(target, {
            type: "radar",
            data: {
                labels: Object.keys(shinobi._attr),
                datasets: [
                    {
                        label: "Sasaki",
                        data: Object.values(shinobi._attr)
                    }
                ]
            },
            options: {
                scale: {
                    ticks: {
                        beginAtZero: true,
                        callback: function () { return "" },
                        backdropColor: "rgba(0, 0, 0, 0)"
                    }
                },
                legend: {
                    display: false
                }
            }
        })
    })

    return (
        <section className="AttrRadar">
            <canvas></canvas>
        </section>
    );
}

export default AttrRadar;