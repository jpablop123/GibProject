"use client";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import InjectableSvg from "@/components/common/InjectableSvg";

interface Country {
    id: string;
    country: string;
}

interface PropsType {
    style?: boolean;
}

const MarqueeArea = ({ style }: PropsType) => {
    const [isPaused, setIsPaused] = useState(false);
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("/api/admin/countries");
                if (!response.ok) throw new Error("Failed to fetch countries");
                const data = await response.json();
                setCountries(data.countries);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
    }, []);

    return (
        <section className="marquee__area fix">
            <div className="container-fluid p-0">
                <div className="slider__marquee clearfix marquee-wrap">
                    <Marquee className="marquee_mode marquee__group" pauseOnHover={false} play={!isPaused}>
                        {countries.map((country) => (
                            <h6
                                key={country.id}
                                className={`marquee__item ${style ? "marquee__item-three" : ""}`}
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                <Link href={`/cotizar?country=${encodeURIComponent(country.country)}`}>
                                    <InjectableSvg src="/assets/img/icon/star.svg" alt="" className="injectable" />
                                    Envía a {country.country}
                                </Link>
                            </h6>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default MarqueeArea;
