import React from 'react';
import MovieCard from "@/app/Components/MovieCard";
import Styles from "@/app/styles/common.module.css"

const movie = async () => {

    await new Promise(resolve => setTimeout(resolve,1500));

    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '979750fabemsh20c3e8684c1da4dp18e334jsnea19fabfaac5',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    const main_data = data.titles;


    // console.log(data);

    return (
        <section className={Styles.movieSection}>
            <div className={Styles.container}>
                <h1>Series & Movies</h1>
                <div className={Styles.card_section}>
                    {
                        main_data.map((ele) => {
                            return <MovieCard key={ele.id} {...ele}/>
                        })

                    }
                </div>
            </div>
        </section>
    );
};

export default movie;