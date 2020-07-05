import React from 'react'
import CardNews from './components/cardNews/card'
import Card from './components/card/card'
import InfoCovid from './components/infoCovid/infoCovid'

import news from '../../mock-data/news'
import generalInfo from '../../mock-data/general-info'
import statistics from '../../mock-data/statistics'

import './style/feed'

export default () => {

    return (
        <main className="feed">
            <section className="news">
                {news.map(news =>
                    <CardNews key={news.index} data={news}></CardNews>
                )}
            </section>

            <aside className="aside">
                <Card {...generalInfo}>
                    <article className="general-statistics">
                        <section className="item">
                            <span className="recovered">Casos recuperados</span>
                            <p className="recovered-value">{new Intl.NumberFormat().format(generalInfo.recovered)}</p>
                        </section>

                        <section className="item">
                            <span className="monitoring">Em acompanhamento</span>
                            <p className="monitoring-value">{new Intl.NumberFormat().format(generalInfo.monitoring)}</p>
                        </section>
                    </article>
                </Card>

                {statistics.map(info =>
                    <Card key={info.index} {...info}>
                        <InfoCovid {...info}></InfoCovid>
                    </Card>
                )}
            </aside>
        </main>
    );
};